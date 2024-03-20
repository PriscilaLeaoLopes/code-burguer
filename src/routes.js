const  { Router } = require("express")
const { v4} = require("uuid")
const { User} = require("./app/models/user")



const routes = new Router()


routes.get('/', async (request, response) => {
  const user = await User.create({
     id: v4(),
     name: 'Priscila',
     email: 'priscila@email.com',
     password_hash: '125469854',
  })

  return response.json(user)

})

module.exports = routes