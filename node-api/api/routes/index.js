module.exports = function(app) {
	var apiController = require('../controllers/');

	// todoList Routes
	app.route('/api/')
		.get(apiController.get_boiler_room_videos);
};