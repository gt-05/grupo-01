const UsersModel = require('../../models/UsersModel')

module.exports = async (request, response) => {
    let users = await UsersModel.findAll();
    return response.json(users);
}