const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

console.log('Server First hit')

app.get('/get', (req, res) => {
   res.send('Hello World from Node.js API');
});

app.post('/hello',(req,res)=>{
   res.send('Post req')
})

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});