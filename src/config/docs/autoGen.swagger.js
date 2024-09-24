const swaggerAutogen = require('swagger-autogen')();

const outputFile = 'src/config/docs/swagger.json';
const endpointsFiles = ['src/routes/routes.js'];

const hostname = 'exerciseopenair-api.onrender.com' || 'localhost';
const port = process.env.APP_PORT || 3000;

const doc = {
    info: {
        title: "API Exercise Open Air",
        description: "API para gerenciamento de locais e atividades",
        version: "1.0.0",
    },
    host: `${hostname}`,
    schemes: ["https"],
    security: [{ apiKeyAuth: [] }],
    securityDefinitions: {
        apiKeyAuth: {
            type: "apiKey",
            in: "header",
            name: "Authorization",
            description: "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        },
    },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
