const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors()); app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World, this is the backend!');
});


app.post('/utente', (req, res) => {
    // console.log(req.body);
    const { datiUtente } = req.body;
     if (!nome) { res.status(400).json({
         message: "Mancato inserimento del nome" 
        });
     } 
      res.json(datiUtente); 
    }) 

module.exports = app;
