const express = require('express');
const app = express();
const buzzwords = require('./routes/buzzwords');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/buzzwords', buzzwords);

app.get('/', (req, res) => {
  res.send();
})

app.listen(PORT, (err) => {
if(err){throw err;}
  console.log(`Server up on port:${PORT}`)
});