var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000;

var routes = require('./api/routes/');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('API server started on: ' + port);
