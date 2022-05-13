const mongoose = require('mongoose');


const url = process.env.CUSTOMCONNSTR_connectionStringV2 || "string aleatoria";
mongoose.connect(url, {useNewUrlParser: true}).then(()=> {console.log("conectou com sucesso")}).catch((error)=>{console.log(error)});

module.exports = mongoose;