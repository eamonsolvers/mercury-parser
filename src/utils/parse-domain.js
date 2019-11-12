import URL from 'url';

// extract domain from URL
export default function parseDomain(url) {
  const parsedUrl = URL.parse(url);
  const { protocol, hostname } = parsedUrl;
  return `${protocol}//${hostname}`;
}
