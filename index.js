// this is a single line javascipt

// define a variable and the http  package 
let myhttp = require("http");

//create server takes some arguments 
//function (block of code that will be runed whenever the server recives http requests)
let theserver = thehttp.createServer(
  // createServer() uses our function to run when a request comes in 
  function( therequest, theresponse ) {
   console.log( therequest.url );



   let thetext;
   if ( therequest.url === "/hello" ) {
    thetext = "Darkness, my old friend...";
   } else {
     thetext = "I've come to talk with you again...";
   }

   thetext = thetext + "Because a vision softly creeping... Left its seeds while I was sleeping... And the vision that was planted in my brain... Still remains... Within the sound of silence.";
   
// creates an http response header, including status code and content type
   theresponse.writeHead( 200, { "Content-Type": "text/plain"} );

   // end() returns data and closes the response (sends it)
   theresponse.end( thetext );
  }

);

// ask http to start listening  on tcp port for incoming http requests 
// listen() takes 2 arguments: 1: tcp prt #, string of the ip address to listen (0.0.0.0)
theserver.listen(8080, "0.0.0.0");
console.log("the server has started");

