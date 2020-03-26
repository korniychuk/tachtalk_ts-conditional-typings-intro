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

export declare function dispatch(action: Action): void

// ...

dispatch({
  type: 'INIT',
});

// ...

dispatch({
  type: 'LOG_IN',
  emailAddress: 'david.sheldrick@artsy.net',
});

// ...

dispatch({
  type: 'LOG_IN_SUCCESS',
  accessToken: '038fh239h923908h',
});

// ...

// dispatch('LOG_IN_SUCCESS', {
//   accessToken: '038fh239h923908h',
// });
