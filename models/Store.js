const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('Store', storeSchema);