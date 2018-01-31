//Express instance

const express = require('express');
const server = express();

const PORT = process.env.PORT || 8080;

server.listen(PORT, (err) => {

  if(err){
    throw err;
  }
  console.log(`Server up on port:${PORT}`)
});