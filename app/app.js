const express = require("express")
const app = express()
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const port = 3001

var swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Trello remake",
      description: "Custumer API Information",
      contact: {
        name: "Trello remake"
      },
      servers: ["http://localhost:3001"]
    }
  },
  apis: ["app.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routers
const exempleCardsRoute = require('./routes/exempleCards.route')
const testConectionRoute = require('./routes/testConection.route')

/**
 * @swagger
 * /exempleCards:
 *  get:
 *    description: A sample test
 *    tags:
 *    - Cards
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.use(exempleCardsRoute)

/**
 * @swagger
 * /testConection:
 *  get:
 *    description: A sample test
 *    tags:
 *    - Debug
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.use(testConectionRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
