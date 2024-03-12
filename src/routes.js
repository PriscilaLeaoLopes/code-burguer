const { Router } = require("express")
const { response } = require("./app")

const routes = new Router()

routes.get('/', (request, response) => {

  return response.json({message: "Hello World"})

})