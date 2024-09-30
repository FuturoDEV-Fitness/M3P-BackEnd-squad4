const Local = require('../models/Local')
const Usuario = require('../models/Usuario')
const Atividade = require('../models/Atividade')
const { getLatitudeLongitude, getLinkGoogleMaps } = require('../services/mapaService')
const LocalAtividade = require('../models/LocalAtividade')
const { Op } = require("sequelize");

class LocalController {
    async cadastrarLocal(request, response) {
        try {
            const dados = request.body

            const usuario = await Usuario.findOne({ where: { email: dados.usuario } })

            if(!(dados.nome)){
                return response 
                    .status(400)
                    .json({ mensagem: 'O nome do local é obrigatório' })
            }

            if(!(dados.cep)){
                return response
                    .status(400)
                    .json({ mensagem: 'O CEP é obrigatório' })
            }

            if(!(dados.logradouro)){
                return response
                    .status(400)
                    .json({ mensagem: 'O logradouro é obrigatório' })
            }

            if(!(dados.municipio)){
                return response
                    .status(400)
                    .json({ mensagem: 'O municipio é obrigatório' })
            }

            if(!(dados.uf)){
                return response
                    .status(400)
                    .json({ mensagem: 'O UF é obrigatório' })
            }

            if(!(usuario.id)){
                return response
                    .status(400)
                    .json({ mensagem: 'O ID do usuario é obrigatório' })
            }

           const usuarioExiste = await Usuario.findOne({ where: { id: usuario.id } })

            if (!(usuarioExiste)) {
                return response
                    .status(400)
                    .json({ mensagem: 'O ID do usuario não existe' })
            }

            const { lat, lng } = await getLatitudeLongitude(dados.cep)

            const linkGoogleMaps = await getLinkGoogleMaps({ lat, lng })

            const local = await Local.create({
                ...dados,
                usuarioId: parseInt(usuario.id),
                latitude: lat,
                longitude: lng,
                linkmap: linkGoogleMaps
            })
        
            if (dados.atividades && dados.atividades.length > 0) {
                const idsAtividades = dados.atividades.map(id => parseInt(id, 10))
                const atividadesEncontradas = await Atividade.findAll({ where: {id: {[Op.in]: [...idsAtividades]}} })
          
                await local.addAtividades(atividadesEncontradas);
            }

            return response.status(201).json({
                message: 'Local criado com sucesso',
                nome: local.nome,
                id: local.id,
                linkmap: local.linkmap,
                usuarioId: local.usuarioId
            })

        } catch (error) {
            console.log(error)
            response
            .status(500)
            .json({
                mensagem: 'Erro ao cadastrar o local: ',
                error
            })
        }
    }

    async listarLocais(request, response) {
        try {
            const usuario = await Usuario.findOne({ where: { id: request.usuarioId } })

            if (!(usuario)) {
                return response
                    .status(404)
                    .json({
                        message: 'Usuario não encontrado'
                    })
            }

            const locais = await Local.findAll({ where: { usuarioId: request.usuarioId },             
                include: {
                    model: Atividade,
                    through: { attributes: [] } 
                  }
            })
            return response
                .status(200)
                .json(locais)

        } catch (error) {
            response
            .status(500)
            .json({
                mensagem: 'Erro ao buscar os locais: ',
                error
            })
        }
    }

    async listarPorId(request, response) {
        try {
            const { id } = request.params
            
            if (!(id)) {
                return response
                    .status(400)
                    .json({ mensagem: 'O ID do local é obrigatório' })
            }

            const local = await Local.findOne({ where: { id, usuarioId: request.usuarioId }, 
                 include: {
                    model: Atividade,
                    through: { attributes: [] } 
                  }
            })

            if (!(local)) {
                return response
                    .status(404)
                    .json({
                        message: 'Local não encontrado'
                    })
            }

            return response
                .status(200)
                .json(local)    

        } catch (error) {
            response
            .status(500)
            .json({
                mensagem: 'Erro ao buscar o local: ',
                error
            })
        }
    }

    async pegarUrlMapa(request, response) {
        try {
            const { id } = request.params
            const local = await Local.findOne({ where: { id } })

            if (!(local)) {
                return response
                    .status(404)
                    .json({
                        message: 'Local não encontrado'
                    })
            } 
            
            if(local.linkmap === null || local.linkmap === undefined) {
                return response
                    .status(404)
                    .json({
                        message: 'Local não possui link de mapas'
                    })
            }   
            
            return response
                .status(200)
                .json({urlLocal: local.linkmap })

        } catch (error) {
            response
            .status(500)
            .json({
                mensagem: 'Erro ao buscar o local: ',
                error
            })
        }
    }

    async deletarLocal(request, response) {
        try {
            const { id } = request.params
            
            const local = await Local.findOne({ where: { id } })

            if(local.dataValues.usuarioId !== null || local.dataValues.usuarioId !== undefined) {
                return response
                    .status(403)
                    .json({
                        message: 'Local não pode ser excluído'
                    })
            }
            
            if (!(local)) {
                return response
                    .status(404)
                    .json({
                        message: 'Local não encontrado'
                    })
            }

            await Local.destroy({ where: { id } })

            return response
                .status(204)
                .json({
                    message: 'Local excluído com sucesso'
                })

        } catch (error) {
            response
            .status(500)
            .json({
                mensagem: 'Erro ao excluir o local: ',
                error
            })
        }
    }

    async atualizarLocal(request, response) {
        try {
            const { id } = request.params
            const dados = request.body

            const localAtualizar = await Local.findOne({ where: { id } })

            if (!(localAtualizar)) {
                return response
                    .status(404)
                    .json({
                        message: 'Local não encontrado'
                    })
            }

            const local = await Local.update(dados, { where: { id } })
            return response
                .status(200)
                .json({
                    message: 'Local atualizado com sucesso',
                    local
                })
                
        } catch (error) {
            response
            .status(500)
            .json({
                mensagem: 'Erro ao atualizar o local: ',
                error
            })
        }
    }
}

module.exports = new LocalController()