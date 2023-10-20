const express = require('express');

// GraphQL
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./graphql/schema');
const { queryResolver } = require('./graphql/resolvers')


const cors = require('express-cors'); // Para manejar CORS

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ allowedOrigins: [`http://localhost:${port}`] })); // Configura CORS


// Configurar el endpoint GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: queryResolver,
    graphiql: true, // Habilita GraphiQL para una interfaz web de prueba
  })
);

// Configurar el endpoint REST
app.get('/data', (req, res) => {
  const data = {
    message: 'Hola, esta es una API REST básica sin base de datos.',
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
