const express = require('express')
var router = express.Router();

const course = require("../controllers/course.controller");


router.route('/').post(course.createCourse);
router.route('/').get(course.getAllCourses);
router.route('/CourseReport').get(course.getAllCoursesWithTeachers);



module.exports = router