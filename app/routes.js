module.exports = function(app) {

	var Users = require('./controller/user');
	var auditData = require('./controller/auditData');

	// server routes ===========================================================
	// handle things like api calls

	// authentication routes
	app.get('/dude', function(req, res, next) {
		console.log("Reached dude");
		Users.dudify(req, res, next);
		res.sendfile('./public/index.html');
	});

	// // frontend routes =========================================================
	// // route to handle all angular requests


	app.put('/api/dataentry', auditData.insert);

	app.get('/api/dataentry', auditData.fetch);
	
	app.get('*', function(req, res) {
		console.log("Reached star");
		res.sendfile('./public/index.html');
	});
};