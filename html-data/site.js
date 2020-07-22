module.exports = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World!');
	console.log(process.env);
	res.end();
}
