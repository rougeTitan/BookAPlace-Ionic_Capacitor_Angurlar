// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  databaseURL: "https://ionic-angular-backend-abebf-default-rtdb.firebaseio.com",
  googleMapAPIKey: "AIzaSyBBtoZC6BBoNzX9dZMBJOXXUeGaxsuwMwM",
  satelliteImageWidth: 500,
  satelliteImageHeight: 300,
  satelliteImageZoom: 14,
  photoHeight: 800,
  photoWidth: 600,
  uploadImageURL: 'https://us-central1-ionic-angular-backend-abebf.cloudfunctions.net/storeImage',
  //following takes firebase api keys
  //google api keys wont work here
  signUpApiURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBuPRX6w2nG1uHy4jVXFBnehootM7aYyDA',
  signInApiURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBuPRX6w2nG1uHy4jVXFBnehootM7aYyDA'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
