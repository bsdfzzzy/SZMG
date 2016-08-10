export default (sequelize, DataTypes) => {
    let Biz = sequelize.define("bizs", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        system: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        column: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        playStart: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        playFinish: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        numOfNeeds: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        allReadyTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },{
    });
    return Biz;
}