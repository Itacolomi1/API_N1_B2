const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/ESTOQUE_DB?retryWrites=true&w=majority'
mongoose.connect(url, {useNewUrlParser: true});


module.exports = mongoose;