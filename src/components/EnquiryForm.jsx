import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const enquirySchema = z
  .object({
    first_name: z
      .string()
      .min(1, "First name is required.")
      .min(2, "First name must be at least 2 characters."),
    last_name: z
      .string()
      .min(1, "Last name is required.")
      .min(2, "Last name must be at least 2 characters."),
    email: z
      .string()
      .min(1, "Email is required.")
      .email("Please enter a valid email."),
    phone: z
      .string()
      .min(1, "Phone number is required.")
      .regex(/^[\d\s()+-]{6,20}$/, "Please enter a valid phone number."),
    check_in: z.string().min(1, "Check in date is required."),
    check_out: z.string().min(1, "Check out date is required."),
    accommodation: z.string().min(1, "Please select an accommodation."),
  })
  .refine(
    (data) => {
      if (data.check_in && data.check_out)
        return data.check_out > data.check_in;
      return true;
    },
    { message: "Check out must be after check in.", path: ["check_out"] },
  );

export default function EnquiryForm() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const today = new Date().toISOString().split("T")[0];

  const clearError = (e) => {
    const { name } = e.target;
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formRef.current));
    const result = enquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 6000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={clearError}
      className="enquiry-form"
      aria-label="Enquiry form">
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="Your First Name"
            aria-invalid={!!errors.first_name}

          />
          {errors.first_name && (
            <span className="form-field-error">{errors.first_name}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            placeholder="Your Last Name"
            aria-invalid={!!errors.last_name}

          />
          {errors.last_name && (
            <span className="form-field-error">{errors.last_name}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@mail.com"
            aria-invalid={!!errors.email}

          />
          {errors.email && (
            <span className="form-field-error">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="04XX XXX XXX"
            aria-invalid={!!errors.phone}

          />
          {errors.phone && (
            <span className="form-field-error">{errors.phone}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="check_in">Check In</label>
          <input
            id="check_in"
            type="date"
            name="check_in"
            min={today}
            aria-invalid={!!errors.check_in}

          />
          {errors.check_in && (
            <span className="form-field-error">{errors.check_in}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="check_out">Check Out</label>
          <input
            id="check_out"
            type="date"
            name="check_out"
            min={today}
            aria-invalid={!!errors.check_out}

          />
          {errors.check_out && (
            <span className="form-field-error">{errors.check_out}</span>
          )}
        </div>
        <div className="form-group full">
          <label htmlFor="accommodation">Accommodation</label>
          <select
            id="accommodation"
            name="accommodation"
            aria-invalid={!!errors.accommodation}
            onChange={clearError}>
            <option value="">Select accommodation...</option>
            <option value="Bower Above - $700/week">
              Bower Above - $700/week
            </option>
            <option value="Bower Cottage - $750/week">
              Bower Cottage - $750/week
            </option>
            <option value="Either / Flexible">Either / Flexible</option>
          </select>
          {errors.accommodation && (
            <span className="form-field-error">{errors.accommodation}</span>
          )}
        </div>
        <div className="form-group full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your placement - duration, any specific requirements, or just say hello."
          />
        </div>
        <div className="form-group full form-submit">
          <button
            type="submit"
            className="btn btn-teal submit-btn"
            disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Enquiry"}
          </button>
        </div>
      </div>

      {status === "success" && (
        <p className="form-success" role="alert">
          Thank you for your enquiry - Anna will be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="form-error" role="alert">
          Something went wrong - please try again or email
          info@bowercottage.com.au directly.
        </p>
      )}
    </form>
  );
}
