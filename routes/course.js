const express = require('express')
var router = express.Router();

const course = require("../controllers/course.controller");


router.route('/').post(course.createCourse);



module.exports = router