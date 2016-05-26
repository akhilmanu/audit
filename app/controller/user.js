// if our user.js file is at app/models/user.js
var User = require('../models/user');
var Users = {};
// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password' 
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude

Users.dudify = function(request, response, next) {
	
	request.body = {
					  name: 'Chris',
					  username: 'sevilayha',
					  password: 'password' 
					}

	var user = new User(request.body);
	user.dudify(function(error, dudeRes) {
		console.log('Your new name is ', error);
		if (error) return response.status(200).json(Helper.digestMongooseErrors(error));
		response.json({ results: dudeRes });
		console.log("response : ", dudeRes);
	});
};


module.exports = Users;