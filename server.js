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

app.get('/lotto', (req,res) => {
  let userNumbers = req.query.number.map((num) => {
    return Number(num);
  });
  let randNumbers = [];
  let numbersCorrect = 0;
  for( let i=0; i<6; i++){
    randNumbers.push(Math.ceil(Math.random() * 20));
  }
  for( let i=0; i < userNumbers.length; i++){
    if (randNumbers.includes(userNumbers[i])){
      numbersCorrect++;
    }
  }
  if(numbersCorrect < 4){
    res.send(`You suck! You are a failure! Your guess was ${randNumbers}`);
  } else if( numbersCorrect === 4){
    res.send('Congratulations, you win a free ticket but are still a bit of a failure.');
  } else if (numbersCorrect === 5){
    res.send('Congratulations! You win $100');
  } else {
    res.send('Wow! Unbelievable! You could have won the mega millions!');
  }
});




app.listen(8080, () => 
  console.log('The server started!')
);

