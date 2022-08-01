const ClassRoom = require('../database/models/ClassRoom');
const Student = require('../database/models/Student')

module.exports = {
    list:async (req,res)=>{
        const {limit = 5,offset = 0} = req.query

        const [classRoom,allclassRoom] = await Promise.all([
            ClassRoom.find({active:true}).populate('students')
                .limit(+limit)
                .skip(+offset),
            ClassRoom.countDocuments({active:true})
        ])

        res.status(200).json({
            msg:'Lista de clases',
            cantidad_clases: allclassRoom,
            data:classRoom
        })
    },
    create:async (req,res)=>{
        const {_class, order,active} = req.body
        const classRoom = new ClassRoom({
            _class,
            order,
            active: active ? active : true
        })
        
        await classRoom.save()

        res.status(200).json({
            msg:'Clase creada con éxito!',
            data:classRoom
        })
    },
    update:async (req,res)=>{
        const {id} = req.params
        const {_class,order,student} = req.body

        arrayStudents = []

        await ClassRoom.findById(id)
            .then(clase=>{
                return arrayStudents = [...clase.students,student]
            })

        const classRoom = await ClassRoom.findByIdAndUpdate(id,{
            _class,
            order,
            students: arrayStudents,
            numberOfStudents: arrayStudents.length
        })
        
        res.status(200).json({
            msg:'Clase editada con éxito!',
            data: classRoom
        })
    },
    destroy:async (req,res)=>{
        const {id} = req.params;

        const classRoom = await ClassRoom.findByIdAndUpdate(id,{active:false})

        res.status(200).json({
            msg:'Clase eliminada ok',
            classRoom
        })
    },
    addStudent:async(req,res)=>{
        
    }
}