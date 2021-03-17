CREATE DATABASE dev;
CREATE DATABASE dev


CREATE TABLE Teachers(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    age INT
)

CREATE TABLE Courses(
    id SERIAL PRIMARY KEY,
    course_name VARCHAR(255),
    course_description VARCHAR(255),
    teacherId SERIAL
)
