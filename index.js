const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// const PORT = 3080;

app.use(cors()); app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World, this is the backend!');
});


app.post('/utente', (req, res) => {
    console.log(req.body);
    const datiUtente  = req.body;
    console.log(datiUtente);
     if (!datiUtente) { res.status(400).json({
         message: "Mancato inserimento di alcuni dati" 
        });
     } 
      res.json(datiUtente); 
    }) 

// app.listen(PORT, () => { console.log("Server is running")})

module.exports = app;
