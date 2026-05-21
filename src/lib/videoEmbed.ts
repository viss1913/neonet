/** VK / vkvideo / Rutube → URL для iframe */
export function resolveVideoEmbedUrl(input: string): string | null {
  const t = input.trim();
  if (!t) return null;

  const vk = t.match(/(?:vk\.com|vkvideo\.ru)\/video(-?\d+)_(\d+)/i);
  if (vk) {
    const oid = vk[1].startsWith('-') ? vk[1] : `-${vk[1]}`;
    return `https://vk.com/video_ext.php?oid=${oid}&id=${vk[2]}&hd=2`;
  }

  const rutube = t.match(/rutube\.ru\/video\/([a-f0-9-]+)/i);
  if (rutube) return `https://rutube.ru/play/embed/${rutube[1]}/`;

  if (/^https?:\/\//i.test(t)) return t;
  return null;
}
