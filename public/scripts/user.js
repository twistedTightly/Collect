Parse.initialize("zJmWzfcq3FcJAK4YcVpMt2EA9DScA5cgtQabb1Jo", "jInuu7BeuMeLlNocKR1DYkOiJpvPiCUcydpJuZlD");

$('#sign-up').on('submit', function(){
  var user = new Parse.User();

  // Get user information from inputs
  var username = $('#sign-up #name').val();
  var password = $('#sign-up #password').val();
  var email = $('#sign-up #mail').val();

  user.set("username", username);
  user.set("password", password);
  user.set("email", email);
    
  // other fields can be set just like with Parse.Object
  user.set("phone", "650-555-0000");
    
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
  var username = $('#log-in #name').val();
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