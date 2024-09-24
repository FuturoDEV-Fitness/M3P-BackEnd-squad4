const  {Router} = require('express')
const LocalController = require('../controllers/LocalController')

const localRoutes = new Router()

localRoutes.post('/', LocalController.cadastrarLocal
    /* 
    #swagger.tags = ['Local']
    #swagger.path = '/locais'
    #swagger.method = 'post'
    #swagger.description = 'Cadastra um novo local'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informa os dados do local',
        required: true,
        schema: { 
            $nome: 'Nome do Local',
            $descricao: 'Descrição do Local',
            $cep: 'CEP padrão 00000000',
            $logradouro: 'Logradouro',
            $numero: 'Numero',
            $complemento: 'Complemento',
            $municipio: 'Município',
            $usuarioId: 'ID do Usuário',
            $uf: 'UF',
            $atividade: [1] 
        }
    }
    #swagger.responses[201] = { 
        description: 'Local criado com sucesso'  
    }
    #swagger.responses[400] = { 
        description: 'Bad Request'  
    }
    #swagger.responses[401] = { 
        description: 'Unauthorized'  
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'
    }              

    */
)

localRoutes.get('/', LocalController.listarLocais
    /* 
    #swagger.tags = ['Local']
    #swagger.path = '/locais'
    #swagger.method = 'get'
    #swagger.description = 'Lista todos os locais'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized'
    }          
    #swagger.responses[404] = {
        description: 'Not Found'
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'        
    }
    */
)

localRoutes.get('/:id', LocalController.listarPorId
    /* 
    #swagger.tags = ['Local']
    #swagger.path = '/locais/{id}'
    #swagger.method = 'get'
    #swagger.description = 'Lista um local'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[400] = {
        description: 'Bad Request'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized'
    }              
    #swagger.responses[404] = {
        description: 'Not Found'
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'        
    }
    */
)

localRoutes.get('/:id/maps', LocalController.pegarUrlMapa
    /*
    #swagger.tags = ['Local']
    #swagger.path = '/locais/{id}/maps'
    #swagger.method = 'get'
    #swagger.description = 'Pegar a url do mapa do local'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[400] = {
        description: 'Bad Request'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized'        
    }
    #swagger.responses[404] = {
        description: 'Not Found'        
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'        
    }
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized'
    }        
    }        
    #swagger.responses[404] = {
        description: 'Not Found'
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'        
    }        
    */
)

localRoutes.delete('/:id', LocalController.deletarLocal
    /* 
    #swagger.tags = ['Local']
    #swagger.path = '/locais/{id}'
    #swagger.method = 'delete'
    #swagger.description = 'Deleta um local'
    #swagger.responses[204] = {
        description: 'No Content'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized'        
    }
    #swagger.responses[403] = {
        description: 'Forbidden'        
    }
    }        
    #swagger.responses[404] = {
        description: 'Not Found'        
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'        
    }
    */
)

localRoutes.put('/:id', LocalController.atualizarLocal
    /* 
    #swagger.tags = ['Local']
    #swagger.path = '/locais/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Atualiza um local'
    #swagger.responses[200] = {
        description: 'OK'        
    }
    #swagger.responses[401] = {
        description: 'Unauthorized'        
    }
    #swagger.responses[404] = {
        description: 'Not Found'        
    }
    #swagger.responses[500] = {
        description: 'Internal Server Error'        
    }    
    */
)


module.exports = localRoutes