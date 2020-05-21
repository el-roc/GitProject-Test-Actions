const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT YAY BUDDY' });
});
////////
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/react-ui/public/index.html'));
});