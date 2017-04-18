module.exports = {
    // index controller handler
    index: function(req, res) {
        res.send('The image:index controller ' + req.params.image_id);
    },
    // create controller handler
    create: function(req, res) {
        res.send('The image:create POST controller');
    },
    // like controller handler
    like: function(req, res) {
        res.send('The image:like POST controller');
    },
    // comment controller handler
    comment: function(req, res) {
        res.send('The image:comment POST controller');
    }
};
