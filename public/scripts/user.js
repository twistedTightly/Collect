Parse.initialize("zJmWzfcq3FcJAK4YcVpMt2EA9DScA5cgtQabb1Jo", "jInuu7BeuMeLlNocKR1DYkOiJpvPiCUcydpJuZlD");

$('#sign-up').on('submit', function(){
  var user = new Parse.User();

  // Get user information from inputs
  var username = $('#sign-up #name').val();
  var password = $('#sign-up #password').val();
  var email = $('#sign-up #user-email').val();
  var firstName = $('#sign-up #first-name').val();
  var lastName = $('#sign-up #last-name').val();
  var age = $('#sign-up #user-age').val();
  var location = $('#sign-up #user-location').val();

  // Create Parse user object with all of the user's information
  user.set("username", email);
  user.set("password", password);
  user.set("email", email);
  user.set("firstname", firstName);
  user.set("lastname", lastName);
  user.set("age", age);
  user.set("location", location);
    
  user.signUp(null, {
    success: function(user) {
      document.signUp.submit();
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
  return false;
});

$('#log-in').on('submit', function(){
  // Get user information from inputs
  var username = $('#log-in #log-in-email').val();
  var password = $('#log-in #password').val();

  Parse.User.logIn(username, password, {
    success: function(user) {
      document.logIn.submit();
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
  return false;
});