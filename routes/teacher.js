const express = require('express')
var router = express.Router();

const teacher = require("../controllers/teacher.controller");

// router.route("/").get(teachers_controller.get_all_teachers)
// router.route("/").post(teachers_controller.create_teacher)

router.route('/').get(teacher.getTeachers);
router.route('/').post(teacher.createTeacher);


module.exports = router
// Routes for Schedule

