const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // путь к вашему db.json
const middlewares = jsonServer.defaults();

server.db = router.db;  // Make the database accessible to json-server-auth

server.use(middlewares);
server.use(auth);  // Enable json-server-auth
server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running on port 8000');
});
