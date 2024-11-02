const Sequelize = require('sequelize')
const database = require('../db')

const Usuario = database.define('usuarios',{
    idUsuarios:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nome:{
        type:Sequelize.TEXT
    },
    email:{
        type:Sequelize.TEXT
    },
    senha:{
        type:Sequelize.TEXT
    }
}, {
    freezeTableName: true,
    timestamps:false
});

module.exports = Usuario;

