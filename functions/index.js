const functions = require('firebase-functions');
// const { Nuxt } = require('nuxt');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
// const config = {
//   dev: false,
//   buildDir: 'nuxt',
//   build: {
//     publicPath: '/'
//   }
// }
// const nuxt = new Nuxt(config);
