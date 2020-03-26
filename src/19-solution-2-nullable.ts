
type Nullable<T extends null | undefined | unknown> = T extends null      ? null      :
                                                      T extends undefined ? undefined :
                                                      T;

export function process<T extends null | undefined | string>(text: T): Nullable<T>;
export function process(text?: string | null): string | null | undefined {
  return text && text.replace(/f/g, 'p');
}

export interface User {
  email: string;
  firstName?: string | null;
}

const u: User = { email: 'trump@gmail.com', firstName: null };

console.log('User Name:', process(u.email).toUpperCase());
// console.log('User Name:', process(u.firstName).toUpperCase());
console.log('User Name:', process(u.firstName)?.toUpperCase());
