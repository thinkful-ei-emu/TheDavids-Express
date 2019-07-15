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
});

app.get('/cipher',(req,res)=>{
  if(!req.query.text||!req.query.shift){
    res.statusCode = 403;
    res.send('invalid Args');
  
  }
  let text = req.query.text.toLowerCase();
  let shift = Number(req.query.shift);
  let result = '';
  for(let x=0;x<=text.length;x++){
    let temp = text.charCodeAt(x);
    console.log(text.charCodeAt(0));
    if(text[x] === ' '){
      result+= ' ';
    }
    else if(text.charCodeAt(x)-shift >=90 && text.charCodeAt(x)-shift<=96){
      result += String.fromCharCode((temp - 6) - shift );
      console.log('condiition run');

    }else{
    
      result += String.fromCharCode(temp-shift);
    }
   
  } 
  result.toLowerCase();
  res.send(result);

});

app.listen(8080, () => 
  console.log('The server started!')
);

