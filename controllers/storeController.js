const mongoose = require('mongoose');
const Store = mongoose.model('Store');


exports.getStore = (req, res) => {
  const store = new Store;
  store.update({
    name: 'sssss'
  });
  console.log(store);
  res.render('test');
};