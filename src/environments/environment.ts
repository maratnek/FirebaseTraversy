// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCAoukTQNyBdqJ_XTt9pjYmS4b63JU7DmQ',
    authDomain: 'fir-first-d14a0.firebaseapp.com',
    databaseURL: "https://fir-first-d14a0.firebaseio.com",
    projectId: "fir-first-d14a0",
    storageBucket: "fir-first-d14a0.appspot.com",
    messagingSenderId: "504426719525"
  }
};
