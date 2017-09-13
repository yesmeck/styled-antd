export function add(x, y) {
  const pattern = /([0-9]+)(.+)/;
  const [_, a, unit] = x.match(pattern)[1]
  const b = y.match(pattern)[1]
  return `${a + b}${unit}`;
}
