var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home'),
    image = require('../controllers/image');

module.exports = function(app) {
    router.get('/', home.index); // route to home controllers index
    router.get('/images/:image_id', image.index); // image controllers index
    router.post('/images', image.create); // image conroller
    router.post('/images/:image_id/like', image.like); // image controller like like
    router.post('/images/:image_id/comment', image.comment);  // image controller comment
    app.use(router); // excute the router
};

