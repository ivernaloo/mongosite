var express = require('express'), // express middleware
    config = require('./server/configure'), // load configure
    app = express();

app.set('port', process.env.PORT || 3300); // set the port
app.set('views', __dirname + '/views'); // set the views folder

app = config(app); // excute logic from configure file

var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

