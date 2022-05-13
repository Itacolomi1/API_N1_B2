import * as config from './appSettings.json'


const mongoose = require('mongoose');


const url = process.env.CUSTOMCONNSTR_connectionStringV2 || config.connectionStringV2;
mongoose.connect(url, {useNewUrlParser: true});

module.exports = mongoose;