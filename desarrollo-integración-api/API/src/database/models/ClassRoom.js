const {Schema,model} = require('mongoose');

const ClassRoomSchema = Schema({
    _class:{
        type:String,
        require:true
    },
    order:{
        type:Number,
        require:true
    },
    numberOfStudents:{
        type:Number,
        require:true
    },
    active:{
        type:Boolean,
        default:true
    },
    students:[{
        type:Schema.Types.ObjectId,
        ref:'Student'
    }]
})

module.exports = model('ClassRoom',ClassRoomSchema)