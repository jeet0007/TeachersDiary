const db = require('../models');
const Course = db.course;
const Teacher = db.teacher;


//Create courses
exports.createCourse = async (req, res) => {
    const { course_name, course_description, teacherId } = req.body;
    if (!course_name || !teacherId) {
        return res.status(400).send({
            message: "Assign a teacher to this course"
        })
    }
    const teacherExists = await Teacher.findOne({
        where: {
            id: teacherId
        }
    })
    if (!teacherExists) {
        return res.status(400).send({
            message: "Teacher does not exist"
        })
    }
    try {
        const newCourse = await Course.create({
            course_name,
            course_description,
            teacherId
        })
        res.status(200).send({
            message: "Success",
            data: newCourse
        })
    } catch (error) {
        return res.status(500).send({
            message: `Server Error ${error}`
        })
    }
}




//Get courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll()
        return res.status(200).send({
            message: "Success",
            data: courses
        })
    } catch (err) {
        return res.status(400).send({
            message: "Failed",
            data: `Server Error ${err}`
        })
    }
}

//Get courses with teacher
exports.getAllCoursesWithTeachers = async (req, res) => {
    try {
        const courses = await Course.findAll({
            include: Teacher
        })
        return res.status(200).send({
            message: "Success",
            data: courses
        })
    } catch (err) {
        return res.status(400).send({
            message: "Failed",
            data: `Server Error ${err}`
        })
    }
}
