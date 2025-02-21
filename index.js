const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3080;
app.use(cors()); app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/utente', (req, res) => {
    res.send('Ciao utente')
})
app.post('/utente', (req, res) => {
    // console.log(req.body);
    const { nome } = req.body;
     if (!nome) { res.status(400).json({
         message: "Mancato inserimento del nome" 
        });
     } // else res.send(Ciao ${nome});
      res.json({ message: `Ciao ${nome}` }); 
    }) 
    app.listen(PORT, () => { console.log("Server is running")});