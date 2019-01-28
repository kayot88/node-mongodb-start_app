const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', (err) => {
  console.log(`oh no 💩 ${err}`);
});

const app = require('./app');
app.set('port', 7777 || process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log(`server is running on 🚀${server.address().port}`);
})