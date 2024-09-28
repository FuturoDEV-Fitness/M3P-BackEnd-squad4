const Local = require('../models/Local')

class DashboardController {

    async listarLocais(request, response){
        try {
            const locais = await Local.findAll({
                attributes: [
                    'id',
                    'nome',
                    'cep',
                    'logradouro',
                    'municipio',
                    'uf',
                    'latitude',
                    'longitude',
                    'linkmap',
                    'usuarioId'
                ],
            })
            response.status(200).json(locais)
        } catch (error) {
            console.log(error)
            response
            .status(500)
            .json({
                mensagem: 'Erro ao listar os locais: ',
                error
            })
        }
    }
}

module.exports = new DashboardController()