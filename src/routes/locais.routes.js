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
        description: 'Informe os dados do local',
        required: true,
        schema: { 
            $nome: 'Local teste',
            $descricao: 'descricao local teste',
            $cep: '88047470',
            $logradouro: 'logradouro teste',
            $municipio: 'municipio teste',
            $numeroCasa: '150',
            $complemento: '1',
            $uf: 'SC',
            $atividades: { 
                "surf": false,
                "skate": true, 
                "ciclismo": false,
                "natação": true, 
                "corrida": false,
                "caminhada": true,
                "trilha": false,
                "musculacao": true,
                "futebol": false
            } 
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
    #swagger.description = 'Lista todos os locais do usuario logado'
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
    #swagger.description = 'Lista um local por Id do isuario logado'
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
    #swagger.description = 'Pegar a url do mapa do local pelo id'
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
    #swagger.description = 'Deleta um local pelo id'
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
    #swagger.description = 'Atualiza um local pelo id'
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