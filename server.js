const express = require('express');
const morgan = require ('morgan');

let app = express();

app.use(morgan('common'));

app.get('/', (req, res) => {
//   console.log( `I am the request! ${req}`);
  res.send('Im the responce');
});

app.get('/sum', (req,res) =>{
  let answer;
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  answer = a + b;
  res.send(` The sum of ${a} and ${b} is ${answer} `);
}

);

app.listen(8080, () => 
  console.log('The server started!')
);

