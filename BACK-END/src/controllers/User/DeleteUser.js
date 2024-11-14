const { response } = require('express')
const UserModel = require('../../models/UserModel')

module.exports = async (request, response) => {
    try {
        await UserModel.destroy({
        where:{
                id:request.params.id
            }
        })
        response.status(200)
        return response.json({
            message: "Usuario criado com sucesso!"
        })
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao deletar usuario"
        })
    }
}