const express = require('express');
const app = express();
const port = process.env.PORT || 4500;

app.get('/', (req, res) => {
	console.log('home');
	res.send(true);
});

const server = app.listen(port, () => {
	console.log(`server on port ${port}`);
});
