export default function filtrarPares(array: string[]): string[] {
  const filtered = array.reduce((map, letter) => {
    if (!map[letter]) {
      map[letter] = 0;
    }

    map[letter]++;

    return map;
  }, {});

  const elements = Object.entries(filtered);

  return elements.reduce((pairAppearances: string[], [letter, appearances]) => {
    if (Number(appearances) % 2 === 0) {
      pairAppearances.push(String(letter));
    }

    return pairAppearances;
  }, []);
}
