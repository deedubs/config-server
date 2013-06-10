var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var configurationSchema = new Schema({
  name: {type: String, required: true}
});

module.exports = mongoose.model('Configuration', configurationSchema);

