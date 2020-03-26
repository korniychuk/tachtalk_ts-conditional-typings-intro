function process(text) {
  return text && text.replace(/f/g, 'p');
}

process('foo').toUpperCase(); /* ? */

try {
  process(null).toUpperCase();
} catch (e) {
  console.log(e);
}
