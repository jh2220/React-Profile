const express = require("express")
const app = express()
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const cors = require('cors')

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
app.get('/exempleCards', cors(), (req, res) => {

  var response = [
    {
      title: "Simple Title",
      listItens: [
        { name: "Alpha", isChecked: false, tagColor: "#09f" },
        { name: "Beta", isChecked: true, tagColor: "#f54275" },
      ],
    },
    {
      title: "List 2",
      listItens: [{ name: "Charlie", isChecked: false, tagColor: "#eff542" }],
    },
  ];

  res.send(response);
})

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
app.get('/testConection', cors(), (req, res) => {
  res.send("Sample test");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
