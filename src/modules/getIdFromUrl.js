
export default function getIdFromUrl(url) {
  const id = url.slice(0, -1).split("/").pop();
  return id;
}