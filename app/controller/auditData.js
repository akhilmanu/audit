// if our user.js file is at app/models/user.js
var auditData = require('../models/auditData');
var Audit = {};
// create a new user called chris
var chris = new auditData({
	godav : 10,
	dmos : 5
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude

Audit.insert = function(req, res, next) {

	auditData.godav  = req.body.godav;
	auditData.dmos  = req.body.dmos;
	auditData.save(function(err, threads) {
	    res.send({message: 'saved', data: audit});
	});
	
};

Audit.fetch = function(req, res, next) {

	auditData.find(function(err, threads) {
	    res.send(threads);
	});

};

module.exports = Audit;
