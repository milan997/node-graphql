//node 'use strict';

const express = require('express');
const graphqlHttp = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const [user, pass] = ['milanm', 'root']
const connectionString = `mongodb+srv://${user}:${pass}@milanm-gs0uy.mongodb.net/test?retryWrites=true`

mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

const app = express();
app.use(express.static('public'))
app.use(cors());
app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
});

// promeniti importe
// promeniti resolve, napravi fat arrow
// lodash izbacit
// refaktorisati imena modela na AuthorSchema, BookSchmea
// ima dosta kopiranja , fields u mutacijama, u tipovima itd... treba staviti ta polja na jedno mesto, napisati malu biblioteku koja to radi