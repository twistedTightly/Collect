require('cloud/app.js');

// Note: put your Cloud Functions in main.js, and put all Express-related code in app.js

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
