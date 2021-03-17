const express = require("express");
require("dotenv/config");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = 5000 || process.exit.PORT
const teacherRoutes = require("./routes/teacher");
const courseRoutes = require("./routes/course");


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// app.use(cors());

//Routes
app.use('/teacher', teacherRoutes);
app.use('/course', courseRoutes);


app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
})

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
})


module.exports = app

