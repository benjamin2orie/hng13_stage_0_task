import swaggerJSDoc from 'swagger-jsdoc';

const options ={
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'HNG13 stage 0 API',
            version: '1.0.0',
            description: 'API documentation for HNG13 Stage 0 Task',
        },
        servers: [
            {
                url: 'http://localhost:4000',
                description: 'Development server',
            },
            {
                url: 'https://hng13stage0task-production.up.railway.app',
                description: 'Production server',
            }
        ],
    },
    apis: ['./src/route/*.ts', './src/model/*.ts'], // Path to the API docs
}
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
