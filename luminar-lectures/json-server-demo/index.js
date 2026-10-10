// importing server libraries from node_modules

const jsonServer = require('json-server');

// creating server instance
const server = jsonServer.create();

// (1) Routing json resource to server:-(Connecting with created Server)
const router = jsonServer.router('db.json');

// (2) Middlewares for server:-(Adding default middlewares to server)
const middlewares = jsonServer.defaults();

// (3) defining port for server:-(Defining port for server to run)
const PORT = process.env.PORT || 3000;

// Configuring router, middleware andd PORT into server instance
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
