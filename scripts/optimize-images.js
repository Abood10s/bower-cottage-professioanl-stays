import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import path from 'path'

const INPUT_DIR = 'public/assets'
const OUTPUT_DIR = 'public/assets'
const WIDTHS = [480, 800, 1600]
const FORMATS = ['webp', 'avif']
const JPEG_QUALITY = 80
const WEBP_QUALITY = 80
const AVIF_QUALITY = 65

async function optimize() {
  const files = (await readdir(INPUT_DIR)).filter((f) =>
    /\.(jpg|jpeg|png)$/i.test(f)
  )

  // Skip already-generated files (contain width suffix like -480, -800, -1600)
  const generatedPattern = new RegExp(`-(${WIDTHS.join('|')})\\.(jpg|webp|avif)$`)
  const originals = files.filter((f) => !generatedPattern.test(f))

  console.log(`Found ${originals.length} source images`)

  for (const file of originals) {
    const inputPath = path.join(INPUT_DIR, file)
    const baseName = path.parse(file).name
    const img = sharp(inputPath)
    const meta = await img.metadata()

    console.log(`\n${file} (${meta.width}x${meta.height})`)

    for (const width of WIDTHS) {
      // Skip sizes larger than original
      if (width > meta.width) continue

      const resized = sharp(inputPath).resize(width, null, {
        withoutEnlargement: true,
      })

      // Compressed JPEG
      const jpgOut = path.join(OUTPUT_DIR, `${baseName}-${width}.jpg`)
      await resized.clone().jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(jpgOut)
      console.log(`  ✓ ${baseName}-${width}.jpg`)

      // WebP
      const webpOut = path.join(OUTPUT_DIR, `${baseName}-${width}.webp`)
      await resized.clone().webp({ quality: WEBP_QUALITY }).toFile(webpOut)
      console.log(`  ✓ ${baseName}-${width}.webp`)

      // AVIF
      const avifOut = path.join(OUTPUT_DIR, `${baseName}-${width}.avif`)
      await resized.clone().avif({ quality: AVIF_QUALITY }).toFile(avifOut)
      console.log(`  ✓ ${baseName}-${width}.avif`)
    }
  }

  console.log('\nDone! All optimized images generated.')
}

optimize().catch(console.error)
