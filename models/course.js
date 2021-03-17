

const course = (sequelize, DataTypes) => {
    const Course = sequelize.define(
        'course', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        course_name: DataTypes.STRING,
        course_description: DataTypes.STRING,
        teacherId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    }, {
        tableName: 'Courses',
        timestamps: true,
        sequelize
    }
    );

    Course.sync();
    console.log("Teacher Sync")

    return Course
}
module.exports = course;