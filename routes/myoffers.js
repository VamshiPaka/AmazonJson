const myofferRoutes = (app, fs) => {
	// variables
	const dataPath = './data/myoffers.json';

	// READ
	app.get('/myoffers', (req, res) => {
		fs.readFile(dataPath, 'utf8', (err, data) => {
			if (err) {
				throw err;
			}
			res.send(JSON.parse(data));
		});
	});

	//get each product
	app.get('/myoffers/:category', (req, res) => {
		fs.readFile(dataPath, 'utf8', (err, data) => {
			if (err) {
				throw err;
			}
			res.send(JSON.parse(data));
		});
	});
};

module.exports = myofferRoutes;
