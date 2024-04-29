const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// middle ware
app.use(express.json());
app.use(cors());

// all currency 
app.get("/getAllCurencies",(req, res)=>{

    const nameURL = `https://docs.openechangerates.org/reference/currencies-json?app_id=''`;

    try{

        const nameResponce = await.axios.get(nameURL);
        const nameData = nameResponce.data;
        return res.json(nameData)

    }catch(err){console.error(err)}
})

//get the target Vallue
app.get("/convert",async (req, res)=>{

    const {date,sourCurrency,targetCurrency,amountInSourceCurrency} = req.query;

    try{
        const dataUrl = ``;
        const dataResponce = await axios.get(dataUrl);
        const rates = dataResponce.data.rates;

        const SourceRate = rates[sourCurrency];
        const targetRate = rates[targetCurrency];
        const targetAmo = (targetRate / SourceRate) * amountInSourceCurrency
        return res.json(targetAmo.toFixed(2));
      

    }catch(err){console.error(err)}
})

// listen port
app.listen(5000,()=>{
    console.log("server sarted")
})