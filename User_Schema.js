var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    uniqueName: {type: String, unique: true, require: true}
}, {collection: 'users'});
exports.userSchema = userSchema;
