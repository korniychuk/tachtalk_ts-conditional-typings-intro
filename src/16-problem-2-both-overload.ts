export function process(text: string): string;
export function process(text: null): null;
export function process(text: string | null): string | null;
export function process(text: string | null): string | null {
  return text && text.replace(/f/g, 'p');
}

export interface User {
  email: string;
  firstName: string | null;
}

const u: User = { email: 'trump@gmail.com', firstName: null };

console.log('User Name:', process(u.email).toUpperCase());
// console.log('User Name:', process(u.firstName).toUpperCase());
console.log('User Name:', process(u.firstName)?.toUpperCase());
