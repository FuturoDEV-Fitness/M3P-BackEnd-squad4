const { Router } = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('../config/docs/swagger')

const routes = new Router()

const usuariosRoutes = require('./usuarios.routes')
const loginRoutes = require('./login.routes')
const localRoutes = require('./locais.routes')
const atividadeRoutes = require('./atividades.routes')
const dasboardRoutes = require('./dashboard.routes')
const validaToken = require('../middlewares/validaToken')


// Rotas
// Publicas
routes.use('/usuarios', usuariosRoutes)
routes.use('/login', loginRoutes)
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
routes.use('/dashboard/', dasboardRoutes)

// Privadas
routes.use(validaToken)
routes.use('/locais', localRoutes)
routes.use('/atividades', atividadeRoutes)

module.exports = routes