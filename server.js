const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const fetch = require('node-fetch');

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.get('/', (req,res) => res.send('this is working'))
app.get('/hi', (req,res) => res.send('this is working'))
app.post('/goal', (req, res)=> {
    
})

app.listen(process.env.PORT || 3001, () => console.log(`app is running on port ${process.env.PORT} or 3001`))
