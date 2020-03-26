export type Action =
  | {
      type: 'INIT';
    }
  | {
      type: 'SYNC';
    }
  | {
      type: 'LOG_IN';
      emailAddress: string;
    }
  | {
      type: 'LOG_IN_SUCCESS';
      accessToken: string;
    }
  ;

type ActionType = Action['type']; // => "INIT" | "SYNC" | "LOG_IN" | "LOG_IN_SUCCESS"
type ExtractActionParameters<A, T> = A extends { type: T } ? Omit<A, 'type'> : never

export declare function dispatch<T extends ActionType>(type: T, args?: ExtractActionParameters<Action, T>): void

// ...

dispatch('INIT');

// ...

dispatch('LOG_IN', {
  emailAddress: 'david.sheldrick@artsy.net',
});

// ...

dispatch('LOG_IN_SUCCESS', {
  accessToken: '038fh239h923908h',
});
