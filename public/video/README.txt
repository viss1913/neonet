Локальный ролик (не в git):
  process-hero.mp4       — для сайта / Rutube (после remux ~7–8 МБ)
  process-hero-source.mp4 — оригинал от Veo (~15 МБ), если Windows не открывает

Сгенерировать снова:
  cd "Fabric Sites"
  npm run generate:neonet:video

На проде: VK / Rutube ссылка в
  src/config/site.ts → process.videoEmbedUrl
