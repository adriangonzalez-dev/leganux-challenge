const {Schema,model} = require('mongoose');

const StudentSchema = Schema({
    name:{
        type:String,
        require:true,
    },
    age:{
        type:String,
        require:true
    },
    active:{
        type:Boolean,
        default:false
    }
})

module.exports = model('Student',StudentSchema)