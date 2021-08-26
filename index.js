// this is a single line javascipt

// define a variable and the http  package 
let myhttp = require("http");

//create server takes some arguments 
//function (block of code that will be runed whenever the server recives http requests)
let myserver = myhttp.createServer(
  // createServer() uses our function to run when a request comes in 
  function( myrequest, myresponse ) {
   console.log( myrequest.url );



   let mytext;
   if ( myrequest.url === "/hey" ) {
    mytext = "Well hello there...";
   } else {
     mytext = "I don't know you!";

   }
// creates an http response header, including status code and content type
   myresponse.writeHead( 200, { "Content-Type": "text/plain"} );

   // end() returns data and closes the response (sends it)
   myresponse.end( mytext + "\n" );
  }

);

// ask http to start listening  on tcp port for incoming http requests 
// listen() takes 2 arguments: 1: tcp prt #, string of the ip address to listen (0.0.0.0)
myserver.listen(8080, "0.0.0.0");
console.log("server has started");

