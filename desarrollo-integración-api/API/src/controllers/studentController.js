const Student = require('../database/models/Student')

module.exports = {
    list:async (req,res)=>{

        const {limit = 5,offset = 0} = req.query

        const [students,allStudents] = await Promise.all([
            Student.find({active:true})
                .limit(+limit)
                .skip(+offset),
            Student.countDocuments({active:true})
        ])

        res.status(200).json({
            msg:'Lista de estudiantes',
            cantidad_estudiantes: allStudents,
            data:students
        })
    },

    create:async (req,res)=>{
        const {name, age, active} = req.body
        const student = new Student({
            name,
            age,
            active: active ? active : false
        })
        
        await student.save()

        res.status(200).json({
            msg:'Estudiante creado con éxito!',
            data:student
        })
    },

    update: async (req,res)=>{
        const {id} = req.params

        const student = await Student.findByIdAndUpdate(id,{
            name: req.body.name,
            age: req.body.age,
            active: req.body.active 
        })
        
        res.status(200).json({
            msg:'Estudiante editado con éxito!',
            id
        })
    },

    destroy:async (req,res)=>{
        const {id} = req.params;

        const student = await Student.findByIdAndUpdate(id,{active:false})

        res.status(200).json({
            msg:'Estudiante eliminado ok',
            student
        })
    },
}