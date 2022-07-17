require("dotenv").config();
const express = require ("express") ; 
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors")
const app = express() ; 
app.use(cors());
app.use(bodyParser.json());



const baseUrl = "https://api.kucoin.com"; 
const testTime = "/api/v1/timestamp" ; 
const testService = "/api/v1/status"
const print = baseUrl + testTime ; 
console .log(print,typeof print,process.env.key,process.env.secret);


const request = async () => {
  try {
    const response = await axios.get(baseUrl+testService);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
app.listen(4001
	,async()=>{await request()}
	)