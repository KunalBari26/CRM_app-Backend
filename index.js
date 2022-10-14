const express = require('express');
const serverConfigs = require('./configs/server.config');


const app = express();



app.listen(serverConfigs.PORT , ()=>{
    console.log("APPLICATION STARTED ON PORT",serverConfigs.PORT)
})