const offerRoutes = require('./products');
const myofferRoutes = require('./myoffers');
const appRouter = (app, fs) => {
	//include home route
	app.get('/', (req, res) => {
		res.send('This is Home route');
	});

	offerRoutes(app, fs);
	myofferRoutes(app, fs);
};

module.exports = appRouter;
