const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const usuariosRoutes = new Router();

usuariosRoutes.post(
    "/",
    UsuarioController.cadastrarUsuario
    /* 
    #swagger.tags = ['Usuário']
    #swagger.path = '/usuarios'
    #swagger.method = 'post'
    #swagger.description = 'Cadastra um novo usuário'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informa os dados do usuário',
        required: true,
        schema: { 
            $nome: 'Nome do Usuário',
            $cpf: 'CPF padrão 00000000000',
            $dataNascimento: 'Data de Nascimento padração YYYY-MM-DD',
            $email: 'Email',
            $password: 'Senha',
            $cep: 'CEP',
            $logradouro: 'Logradouro',
            $municipio: 'Município',
            $uf: 'UF',
            $complemento: 'Complemento',
            $numero: 'Numero'
        }
    }
    #swagger.responses[201] = {
        description: 'Usuário criado com sucesso'
    }
    #swagger.responses[400] = {
        description: 'Bad Request'
    }
    #swagger.responses[401] = {
        description: 'Unauthorized'
    }
    #swagger.responses[409] = {
        description: 'Conflict'
    }        
    #swagger.responses[500] = {
        description: 'Internal Server Error'
    }                                
    */
);
usuariosRoutes.get(
    "/",
    UsuarioController.listarUsuarios
    /* 
    #swagger.tags = ['Usuário']
    #swagger.path = '/usuarios'
    #swagger.method = 'get'
    #swagger.description = 'Lista todos os usuários'
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
);

usuariosRoutes.delete(
    "/:id",
    UsuarioController.deletarUsuarios
    /* 
    #swagger.tags = ['Usuário']
    #swagger.path = '/usuarios'
    #swagger.method = 'delete'
    #swagger.description = 'Deleta o usuário quando passado o id como params'
    #swagger.parameters['userID'] = {
        in: 'path',
        description: 'ID do usuario',
        required: true,
        type: 'integer'
    }
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
);

usuariosRoutes.put(
    "/:id",
    UsuarioController.atualizarUsuarios
    /* 
    #swagger.tags = ['Usuário']
    #swagger.path = '/usuarios'
    #swagger.method = 'put'
    #swagger.description = 'Atualiza o usuário quando passado o id como params'
     #swagger.parameters['userID'] = {
        in: 'path',
        description: 'ID do usuario',
        required: true,
        type: 'integer'
    }
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
);

module.exports = usuariosRoutes;
