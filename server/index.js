const express = require('express');
const path = require('path');
const app = express();


app.use('/', express.static(path.join(__dirname,'/../client/dist')));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Financial Advisor App running...`);
});