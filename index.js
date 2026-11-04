require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/twitter', (req, res) => {
  res.send('sumitshah01')
});
app.get('/login',(req,res)=>{
  res.send('<h1>plsease login the sumit facebook id </h1>')
});
app.get('/Youtube',(req,res)=>{
  res.send('<h5>Youtube is good learning platform sumit</h5>')
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});