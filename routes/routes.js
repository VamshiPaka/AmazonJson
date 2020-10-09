const offerRoutes = require('./products');
const appRouter = (app, fs) => {
	
	app.get('/', (req, res) => {
		res.send('welcome to the development api-server');
	});

	offerRoutes(app, fs);
};

module.exports = appRouter;
