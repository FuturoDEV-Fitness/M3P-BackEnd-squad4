const {Router} = require('express')

const loginController = require('../controllers/LoginController')

const loginRoutes = Router()

loginRoutes.post('/', loginController.login
    /* 
    #swagger.tags = ['Login']
    #swagger.path = '/login'
    #swagger.method = 'post'
    #swagger.description = 'Efetua o login'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informa o email e a senha',
        required: true,
        schema: { 
            $email: 'Email',
            $password: 'Senha',
        }
    }
    #swagger.responses[200] = {
        description: 'Login efetuado com sucesso'
    }
    #swagger.responses[400] = {
        description: 'Bad Request'
    }
    #swagger.responses[404] = {
        description: 'Not Found'            
    }   
    #swagger.responses[500] = {
        description: 'Internal Server Error'
    }                     
    */
)

loginRoutes.put('/:id', loginController.atualizarStatusUsuario
    /* 
    #swagger.tags = ['Login']
    #swagger.path = '/login/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Atualiza o status do usuario'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informa o status do usuario',
        required: true,
        schema: { 
            $isOnline: 'Status do usuario',
        }
    }
    #swagger.responses[200] = {
        description: 'Status atualizado com sucesso'
    }
    #swagger.responses[400] = {
        description: 'Bad Request'
    }
    #swagger.responses[404] = {
        description: 'Not Found'            
    }   
    #swagger.responses[500] = {
        description: 'Internal Server Error'
    }                     
    */
)   

module.exports = loginRoutes