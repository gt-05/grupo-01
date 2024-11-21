const UserModel = require('../../models/UserModel')

module.exports = async (request, response) => {
    let user;
    try {
    user = await UserModel.create(request.body);
    response.status(200);
    return response.json(user);
    } catch (error) {
    response.status(400)
    return response.json({
        message: "Erro ao criar usuario"
    });
    }
}