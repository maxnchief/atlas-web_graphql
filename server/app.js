const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB Atlas
// Replace <username>, <password>, and <cluster-url> with your actual MongoDB Atlas credentials
mongoose.connect('mongodb+srv://<username>:<password>@<cluster-url>/graphqldb?retryWrites=true&w=majority');

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
