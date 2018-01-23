const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req,res) =>{
  res.send({hi: 'there'});
});

app.listen(PORT , () =>{
  console.log('server running on port ' + PORT);
} );
