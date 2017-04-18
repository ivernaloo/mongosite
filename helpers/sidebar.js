var Stats = require('./stats'),
    Images = require('./images'),
    Comments = require("./comments");

module.exports = function(viewModel, callback){
    viewModel.sidebar = {
        stats: Stats(),
        popuplar: Images.popuplar(),
        comments: Comments.newest()
    };
    callback(viewModel);
};