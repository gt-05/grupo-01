const UsersModel =require('../../models/UsersModel');

module.exports = async (request, response) => {
    let {body} = request;
    let user = await UsersModel.create(body);
    response.status(201);
    return response.json(user);
}