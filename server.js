'use strict';

const express = require('express');
const date = require('datejs');
var app = express();
var port = process.env.PORT || 8080;


app.get('/:date', function (req, res) {
//get path and remove leading slash
var path=req.path.slice(1)
//parse as date
if (isNaN(Number(path)))
{
//decode URI to get ready to parse
path=decodeURI(path)
//create date object from natural language date
date = Date.parse(path)

}
// else parse as unix timestamp
else
{
//create a date object based upon the unix timestamp
var date = new Date((Number(path)*1000))
}

//send the json dates back to http pipe
res.send(sendJSONDate(date))
    
})

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});


app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});


//prepare the json to be sent back
function sendJSONDate(date)
{
    //check if date is truthy (vaid date)
 if (date)
{ var jsonDate =  {  
       "unix": (date.getTime() / 1000).toFixed(0),  
       "natural": date.toString('dddd, MMMM d, yyyy')  }}
else
{ var jsonDate =  {  
       "unix": null,  
       "natural": null}}
       
    return JSON.stringify(jsonDate)}