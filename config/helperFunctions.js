function _respond(res, next, status, data, http_code) {
	var response = data;
	res.setHeader('Content-type', 'application/json');
	res.writeHead(http_code);
	res.end(JSON.stringify(response));
	return next();
}

module.exports.success = function (res, data, next) {
	_respond(res, next, 'success', data, 200);
}

module.exports.failure = function(res, next, data, http_code) {
	_respond(res, next, 'failure', data, http_code);
}
