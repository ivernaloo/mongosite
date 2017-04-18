var path = require('path'),
    routes = require('./routes'),
    exphbs = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    moment = require('moment'),
    multer = require('multer');


/*
* configure module defined the middleware quotation
* */
module.exports = function(app) {
    // define the app template engine
    // what's difference between layoutsDir/partialsDir
    app.engine('handlebars', exphbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials'],
        helpers : {
            timeago: function(timestamp){
                return moment(timestamp).startOf('minute').fromNow();
            }
        }
    }).engine);
    app.set('view engine', 'handlebars'); // define template

    app.use(morgan('dev')); // log
    app.use(multer({ dest: path.join(__dirname, 'public/upload/temp')})); // handling multipart/form-data

    app.use(methodOverride()); // fix REST
    app.use(cookieParser('some-secret-value-here')); // fix parser
    routes(app);
    
    app.use('/public/', express.static(path.join(__dirname, '../public'))); // static

    if ('development' === app.get('env')) {
       app.use(errorHandler()); // 404 page
    }

    return app;
};