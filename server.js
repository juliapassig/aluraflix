const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Usar CORS
server.use(cors());

// Usar os middlewares padrão
server.use(middlewares);

// Usar a base de dados
server.use(router);

// Iniciar o servidor na porta 5000
server.listen(5000, () => {
  console.log('JSON Server is running');
});
