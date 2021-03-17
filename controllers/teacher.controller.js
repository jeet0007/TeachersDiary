const db = require('../models');
const Teacher = db.teacher;

const Course = db.course;
//Get all teachers
exports.getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.findAll()
        return res.status(200).send({
            message: "Success",
            data: teachers
        })
    } catch (err) {
        return res.status(400).send({
            message: `No teachers found`
        })
    }
}

//Create Teacher 
exports.createTeacher = async (req, res) => {
    const { first_name, last_name, age } = req.body;
    if (!first_name || !last_name || !age) {
        return res.status(400).send({
            message: "Validation Error"
        });
    }

    try {
        const newTeacher = await Teacher.create({
            first_name,
            last_name,
            age
        });
        return res.status(200).send({
            message: "Success",
            data: newTeacher
        })

    } catch (error) {
        return res.status(500).send({
            message: `Server Error :${error.message}`
        })
    }

}

