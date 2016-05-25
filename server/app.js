var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var person = require('./routes/person');

app.set('port', 5000);

app.use(bodyParser.urlencoded({extended: true}));

app.use('/person', person);

app.get('/*', function(req, res) {
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, './public', file))
});

app.listen(app.get('port'), function() {
    console.log('Server is ready on port:' + app.get('port'));
});