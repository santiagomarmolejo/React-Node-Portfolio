const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    url : String,
    iso : String,
    f : String,
    shutter_speed : String,
    img_name : String
});

const post = mongoose.model('Post', postSchema);

module.exports = post;