var express = require('express'), // express middleware
    config = require('./server/configure'), // load configure
    app = express();

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views'); // conjunction

app = config(app);

var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

