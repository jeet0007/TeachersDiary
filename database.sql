CREATE DATABASE dev;

CREATE TABLE Teachers(
    teacher_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    age INT
)
