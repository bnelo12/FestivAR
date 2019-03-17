/*
Welcome to scripting in Spark AR Studio!
From making things move to triggering audio clips,
reactive programming can help you achieve your scripting goals.

Helpful links:

Scripting Basics - https://fb.me/spark-scripting-basics
Reactive Programming - https://fb.me/spark-reactive-programming
Changelogs - https://fb.me/spark-changelog

Note: Feel free to delete the contents of this script and start from scratch.
*/

// How to load in modules, complete list - https://fb.me/spark-scripting-reference
const Diagnostics = require('Diagnostics');
const Networking = require('Networking');
const Scene = require('Scene');
// How to log values to the console
Diagnostics.log('I am a console message logged from the script');

// Store the URL we're sending the request to
const url = 'https://us-central1-festivar-802dc.cloudfunctions.net/getEvents?venue=Summerhall';

// Create a request object
const request = {

  // The HTTP Method of the request
  method: 'GET',

  // The HTTP Headers of the request
  // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
  headers: {'Content-type': 'application/json; charset=UTF-8'},

};

//==============================================================================
// Send the request and log the results
//==============================================================================

// Send the request to the url
Networking.fetch(url, request).then(function(result) {

  // Check the status of the result
  // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
 // if ((result.status >= 200) && (result.status < 300)) {

    // If the request was successful, chain the JSON forward
    return result.json()

//  }

  // If the request was not successful, throw an error
 // throw new Error('HTTP status code - ' + result.status);

}).then(function(json) {

  // Log the JSON obtained by the successful request
    Diagnostics.log('Successfully sent - ' + JSON.stringify(json));
    const stitle1 = Scene.root.find('stitle1');
    stitle1.text = json[0].title;
    const stitle2 = Scene.root.find('stitle2');
    stitle2.text = json[1].title;
    const stitle3 = Scene.root.find('stitle3');
    stitle3.text = json[2].title;

    
    

}).catch(function(error) {

  // Log any errors that may have happened with the request
    Diagnostics.log('Error - ' + error); 

});
