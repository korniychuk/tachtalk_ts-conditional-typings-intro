export function process(text: string): string;
export function process(text: null): null;
export function process(text: string | null): string | null {
  return text && text.replace(/f/g, 'p');
}

process('foo').toUpperCase(); /* ? */

try {
  const b = process(null);
  if (b) {
    // b.toUpperCase(); /* ? */
  }
} catch (e) {
  console.log(e);
}
