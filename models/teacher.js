

const teacher = (sequelize, DataTypes) => {
    const Teacher = sequelize.define(
        'teacher', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: DataTypes.STRING,
        age: DataTypes.INTEGER
    }, {
        tableName: 'Teachers',
        sequelize,
        timestamps: true,
    });
    Teacher.sync();
    return Teacher
}

module.exports = teacher;
