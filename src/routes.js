const { Router } = require("express");
const User = require("./app/models/user");

const routes = new Router();

routes.get('/', async (request, response) => {
try {
const user = await User.create({
name: 'Priscila',
email: 'priscila@email.com',
password_hash: '125469854',
});

return response.json(user);
} catch (error) {
console.error(error);
return response.status(500).json({ error: 'Internal Server Error' });
}
});

module.exports = routes;