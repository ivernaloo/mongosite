var sidebar = require('../helpers/sidebar');

module.exports = {
    // index controller handler
    index  : function (req, res) {

        var viewModel = {
            image: {
                uniqueId:       1,
                title:          'Sample Image 1',
                description:    'This is a sample.',
                filename:       'sample1.jpg',
                views:          0,
                likes:          0,
                timestamp:      Date.now
            },
            comments: [
                {
                    image_id:   1,
                    email:      'test@testing.com',
                    name:       'Test Tester',
                    gravatar:   'http://www.gravatar.com/avatar/9a99fac7b524fa443560ec7b5ece5ca1?d=monsterid&s=45',
                    comment:    'This is a test comment...',
                    timestamp:  Date.now()
                },{
                    image_id:   1,
                    email:      'test@testing.com',
                    name:       'Test Tester',
                    gravatar:   'http://www.gravatar.com/avatar/9a99fac7b524fa443560ec7b5ece5ca1?d=monsterid&s=45',
                    comment:    'Another followup comment!',
                    timestamp:  Date.now()
                }
            ]
        };


        // res.send('The image:index controller ' + req.params.image_id);
        sidebar(viewModel, function(viewModel){
            res.render('image', viewModel);
        });
    },
    popular: function() {
        var images = [
            {
                uniqueId: 1,
                title: 'Sample Image 1',
                description: '',
                filename: 'sample1.jpg',
                views: 0,
                likes: 0,
                timestamp: Date.now()
            }, {
                uniqueId: 2,
                title: 'Sample Image 2',
                description: '',
                filename: 'sample2.jpg',
                views: 0,
                likes: 0,
                timestamp: Date.now()
            }, {
                uniqueId: 3,
                title: 'Sample Image 3',
                description: '',
                filename: 'sample3.jpg',
                views: 0,
                likes: 0,
                timestamp: Date.now()
            }, {
                uniqueId: 4,
                title: 'Sample Image 4',
                description: '',
                filename: 'sample4.jpg',
                views: 0,
                likes: 0,
                timestamp: Date.now()
            }
        ];
        return images;
    },
    // create controller handler
    create : function (req, res) {
        res.send('The image:create POST controller');
        res.redirect('/images/1');
    },
    // like controller handler
    like   : function (req, res) {
        res.send('The image:like POST controller');
    },
    // comment controller handler
    comment: function (req, res) {
        res.send('The image:comment POST controller');
    }
};


function saveImage(){
    var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
        imgUrl = '';

    for(var i =0; i < 6; i+= 1){
        imgUrl += possible.charAt(Math.floor(Math.random() * possible.length)); // random file
    }

    var tempPath = req.files.file.path, // path
        ext = path.extname(req.files.file.name).toLowerCase(), // get the file ext name
        targetPath = path.resolve('./public/upload/' + imgUrl + ext); // save the file use a random file

    // proceed the extname
    if(ext === ".png" || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
        // why rename in this place
        fs.rename(tempPath, targetPath, function(err){
            if (err) throw err;

            res.redirect('/images/' + imgUrl);
        });
    } else {
        fs.unlink(tempPath, function(){
           if (err) throw err
        });
    }
}
