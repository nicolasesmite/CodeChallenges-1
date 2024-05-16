export default function esIsograma(string: string): boolean {
  const draft = string
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .normalize("NFD");

  return new Set([...draft]).size === draft.length;
}
