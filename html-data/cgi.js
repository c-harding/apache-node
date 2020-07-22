var http = require('http');

var Request = function() {
	this.method = process.env['REQUEST_METHOD'];
	this.headers = {
		'host': process.env['HTTP_HOST'],
		'user-agent': process.env['HTTP_USER_AGENT']
	};
	this.url = process.env['REQUEST_URI'];
};

var Response = function() {
	var body = false;

	this.writeHead = function(status=200, reason, headers={}) {
		if (typeof reason != 'string') {
			headers = reason || {};
			reason = http.STATUS_CODES[status] || 'unknown';
		}

		console.log('Status: ' + status + ' ' + reason);

		var field, value;
		var keys = Object.keys(headers);
		var isArray = (headers instanceof Array);

		for (const key of keys) {
			if (isArray) {
				field = headers[key][0];
				value = headers[key][1];
			} else {
				field = key;
				value = headers[key];
			}

			console.log(field + ": " + value);
		}
		console.log("")
		body = true;
	};

	this.write = function(message) {
		if (!body) this.writeHead();

		if (message) console.log(message);
	};

	this.flush = function() {
	};

	this.end = function() {
		this.write.apply(this, arguments);
	};
};

var Server = function(listener, options) {
	var request = new Request();
	var response = new Response();

	this.listen = function() {
		listener(request, response);
	};
};

exports.createServer = function(listener, options) {
	return new Server(listener, options);
};
