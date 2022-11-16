/*
*process.env is a method natively provided by node.js
*to know what all process are running  in the machine
*/
if(process.env.NODE_ENV!='production'){
require('dotenv').config();
}
module.exports = {
    PORT : process.env.PORT
}