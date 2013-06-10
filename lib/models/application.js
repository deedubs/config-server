var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var applicationSchema = new Schema({
  name: {type: String, required: true}
});

module.exports = mongoose.model('Application', applicationSchema);

