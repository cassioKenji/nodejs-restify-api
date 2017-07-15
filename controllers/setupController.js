module.exports = function(server, restify, restifyValidator) {

  server.use(restifyValidator);
	/*server.use(restify.acceptParser(server.acceptable));*/
	/*server.use(restify.bodyParser());*/
	/*server.use(restify.queryParser());*/

}
