export default function truncateText(
  text: string | undefined,
  maxLength: number
): string {
  if (!text) return '';

  const ellipsis = '...';

  if (text.length <= maxLength) return text;

  const truncatedText = text.slice(0, maxLength);
  return truncatedText + ellipsis;
}
