const sequelize = require("./sequelize");

const conectDB = async () => {
    try {
        sequelize.authenticate()
        .then(() => {
            console.log('Coneccted');
        })
        .catch(() => {
            console.log('Error to connect')
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectDB;