export function process(text: string | null): string | null {
  return text && text.replace(/f/g, 'p');
}

export const a = process('foo');
a && a.toUpperCase(); /* ? */
if (a) a.toUpperCase(); /* ? */

try {
  const b = process(null);
  if (b) {
    b.toUpperCase(); /* ? */
  }
} catch (e) {
  console.log(e);
}
