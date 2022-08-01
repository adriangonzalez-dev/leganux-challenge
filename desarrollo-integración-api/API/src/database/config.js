const mongoose = require('mongoose');

const dbConnection = async () =>{
    try{
        mongoose.connect(process.env.DB_CONNECT);
        console.log('DB_ONLINE')
    } catch(error){
        console.log(error);
        throw new Error('Error a la hora de conectar')
    }
}

module.exports = dbConnection