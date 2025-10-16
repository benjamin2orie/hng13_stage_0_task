
# Overview
This project is a Nodejs/express ApI:
 MongoDB integration via Mongoose
 API documentation using Swagger (swagger-jsdoc + swagger-ui-express)
 Rate limiting with express-rate-limit
 Example endpoint <http://domain/me> that returns user profile data and a fun fact, timeStamps



## Dependencies
# Core:
 express – Web framework
 mongoose – MongoDB ODM

# Api Documentation:
 swagger-ui-express – Swagger UI middleware
 swagger-jsdoc – Generate OpenAPI spec from JSDoc comments
 swagger_url = <https://hng13stage0task-production.up.railway.app//api-docs>

# Security & Stability:
  express-rate-limit – Protect endpoints from abuse

# Dev tools:
 nodemon – Auto-restart server during development
 typescript – If using TypeScript
 ts-node – Run TS files directly

# Environment variable:
 PORT= 4000
 MONGO_DB = <"Your mongo db url">
 FACT_URL: <https://catfact.ninja/fact>


# Setp Installation Guide:
 git clone <https://github.com/benjamin2orie/hng13_stage_0_task>
 cd <hng13_stage_0_task>
 npm install
 npm run dev


# sample Response:
{
  "status": "success",
  "user": {
    "email": "johndoe@gmail.com",
    "name": "john doe",
    "stack": "Node.js/Express"
  },
  "timeStamps": "2025-10-16T12:34:56.789Z",
  "fact": "Cats sleep for 70% of their lives."
}

# Rich Link:
["https://medium.com/post]


   