const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//Connect to port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://parcelsapp.com/api/v3/shipments/tracking?uuid=9274890306531713613125&apiKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwMzQ2YjFiMC1kYjk4LTExZWQtYTI0Ny05MzNiNGM1ODNjOTQiLCJzdWJJZCI6IjY0M2FiMTkxMWE3MGY0N2JiYTAxNGNiMyIsImlhdCI6MTY4MTU2ODE0NX0.ByArH8nDjqzyi56ChkFbxBPCoEsjssWSXIoT5gkSK78',
  headers: { 
    'Accept': 'application/json'
  }
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
