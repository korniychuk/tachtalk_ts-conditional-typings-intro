type AnyObject = { [key: string]: any };

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


export declare function dispatch(type: ActionType, args?: AnyObject): void

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
