const mongoose = require('mongoose');

const url = 'mongodb+srv://userLibras4All:estoque@cluster0.wfd3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url, {useNewUrlParser: true});


module.exports = mongoose;