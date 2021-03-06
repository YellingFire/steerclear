const User = require('../database/models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username', // not necessary, DEFAULT,
		passwordField: 'password'
	},
	
	function (username, password, done) {
		User.findOne({ username: username }, function(err, user) {
			if (err) throw err;
	
			// test a matching password
			user.comparePassword(password, function(err, isMatch) {
				if (err) throw err;
				console.log("Password and isMatch: ", password, isMatch);
				
				return done(null, user)// -> Password123: true
			});
	
		})

	}
	

);

module.exports = strategy;