import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';
import connectDB from './config/db.js';
import router from './route/api.route.js';
import {rateLimit} from 'express-rate-limit';

const app = express();




// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 60 * 15 * 1000, // 1 minute
  max: 5,             // max requests per IP per window
  handler: (req, res) => {
    res.status(429).json({
      status: "error",
      message: "Too many requests, Palease try again later."
    });
  },
  standardHeaders: true,
  legacyHeaders: false
});



const corsOptions = {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};



app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.status(200).send('API is healthy');
});

app.use('/me', router, limiter);

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Handle 404 for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

connectDB()





export default app;
