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

// Create a request object
const request = {
  // The HTTP Method of the request
  method: 'GET',

  // The HTTP Headers of the request
  // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
  headers: {'Content-type': 'application/json; charset=UTF-8'},

};

//==============================================================================
// Summerhall
//==============================================================================

// Store the URL we're sending the request to
var url = 'https://us-central1-festivar-802dc.cloudfunctions.net/getEvents?venue=Summerhall';
// Send the request to the url
Networking.fetch(url, request).then(function(result) {
    return result.json()

}).then(function(json) {
    const stitle1 = Scene.root.find('stitle1');
    stitle1.text = json[0].title == null? "Unknown": json[0].title;
    const stitle2 = Scene.root.find('stitle2');
    stitle2.text = json[1].title == null? "Unknown": json[1].title;
    const stitle3 = Scene.root.find('stitle3');
    stitle3.text = json[2].title == null? "Unknown": json[2].title;

    const sname1 = Scene.root.find('sname1');
    sname1.text = json[0].artist == null? "Unknown": json[0].artist;
    const sname2 = Scene.root.find('sname2');
    sname2.text = json[1].artist == null? "Unknown": json[1].artist;
    const sname3 = Scene.root.find('sname3');
    sname3.text = json[2].artist == null? "Unknown": json[2].artist;

    const sdta1 = Scene.root.find('sdta1');
    sdta1.text = json[0].next_performance.start == null? "Unknown": json[0].next_performance.start;
    const sdta2 = Scene.root.find('sdta2');
    sdta2.text = json[1].next_performance.start == null? "Unknown": json[1].next_performance.start;
    const sdta3 = Scene.root.find('sdta3');
    sdta3.text = json[2].next_performance.start == null? "Unknown": json[2].next_performance.start;

}).catch(function(error) {
  // Log any errors that may have happened with the request
    Diagnostics.log('Error - ' + error); 
});

//==============================================================================
// Pleasance
//==============================================================================

url = 'https://us-central1-festivar-802dc.cloudfunctions.net/getEvents?venue=Pleasance';
// Send the request to the url
Networking.fetch(url, request).then(function(result) {
    return result.json()

}).then(function(json) {
    const ptitle1 = Scene.root.find('ptitle1');
    ptitle1.text = json[0].title == null? "Unknown": json[0].title;
    const ptitle2 = Scene.root.find('ptitle2');
    ptitle2.text = json[1].title == null? "Unknown": json[1].title;
    const ptitle3 = Scene.root.find('ptitle3');
    ptitle3.text = json[2].title == null? "Unknown": json[2].title;

    const pname1 = Scene.root.find('pname1');
    pname1.text = json[0].artist == null? "Unknown": json[0].artist;
    const pname2 = Scene.root.find('pname2');
    pname2.text = json[1].artist == null? "Unknown": json[1].artist;
    const pname3 = Scene.root.find('pname3');
    pname3.text = json[2].artist == null? "Unknown": json[2].artist;

    const pdta1 = Scene.root.find('pdta1');
    pdta1.text = json[0].next_performance.start == null? "Unknown": json[0].next_performance.start;
    const pdta2 = Scene.root.find('pdta2');
    pdta2.text = json[1].next_performance.start == null? "Unknown": json[1].next_performance.start;
    const pdta3 = Scene.root.find('pdta3');
    pdta3.text = json[2].next_performance.start == null? "Unknown": json[2].next_performance.start;

}).catch(function(error) {
  // Log any errors that may have happened with the request
    Diagnostics.log('Error - ' + error); 
});

//==============================================================================
// National Museum of Scotland
//==============================================================================

url = 'https://us-central1-festivar-802dc.cloudfunctions.net/getEvents?venue=National%20Museum%20of%20Scotland';
// Send the request to the url
Networking.fetch(url, request).then(function(result) {
    return result.json()

}).then(function(json) {
    const ntitle1 = Scene.root.find('ntitle1');
    ntitle1.text = json[0].title == null? "Unknown": json[0].title;
    const ntitle2 = Scene.root.find('ntitle2');
    ntitle2.text = json[1].title == null? "Unknown": json[1].title;
    const ntitle3 = Scene.root.find('ntitle3');
    ntitle3.text = json[2].title == null? "Unknown": json[2].title;

    const nname1 = Scene.root.find('nname1');
    nname1.text = json[0].artist == null? "Unknown": json[0].artist;
    const nname2 = Scene.root.find('nname2');
    nname2.text = json[1].artist == null? "Unknown": json[1].artist;
    const nname3 = Scene.root.find('nname3');
    nname3.text = json[2].artist == null? "Unknown": json[2].artist;

    const ndta1 = Scene.root.find('ndta1');
    ndta1.text = json[0].next_performance.start == null? "Unknown": json[0].next_performance.start;
    const ndta2 = Scene.root.find('ndta2');
    ndta2.text = json[1].next_performance.start == null? "Unknown": json[1].next_performance.start;
    const ndta3 = Scene.root.find('ndta3');
    ndta3.text = json[2].next_performance.start == null? "Unknown": json[2].next_performance.start;

}).catch(function(error) {
  // Log any errors that may have happened with the request
    Diagnostics.log('Error - ' + error); 
});

//==============================================================================
// City Art Centre
//==============================================================================

url = 'https://us-central1-festivar-802dc.cloudfunctions.net/getEvents?venue=City%20Art%20Centre';
// Send the request to the url
Networking.fetch(url, request).then(function(result) {
    return result.json()

}).then(function(json) {
    const ctitle1 = Scene.root.find('ctitle1');
    ctitle1.text = json[0].title == null? "Unknown": json[0].title;
    const ctitle2 = Scene.root.find('ctitle2');
    ctitle2.text = json[1].title == null? "Unknown": json[1].title;
    const ctitle3 = Scene.root.find('ctitle3');
    ctitle3.text = json[2].title == null? "Unknown": json[2].title;

    const cname1 = Scene.root.find('cname1');
    cname1.text = json[0].artist == null? "Unknown": json[0].artist;
    const cname2 = Scene.root.find('cname2');
    cname2.text = json[1].artist == null? "Unknown": json[1].artist;
    const cname3 = Scene.root.find('cname3');
    cname3.text = json[2].artist == null? "Unknown": json[2].artist;

    const cdta1 = Scene.root.find('cdta1');
    cdta1.text = json[0].next_performance.start == null? "Unknown": json[0].next_performance.start;
    const cdta2 = Scene.root.find('cdta2');
    cdta2.text = json[1].next_performance.start == null? "Unknown": json[1].next_performance.start;
    const cdta3 = Scene.root.find('cdta3');
    cdta3.text = json[2].next_performance.start == null? "Unknown": json[2].next_performance.start;

}).catch(function(error) {
  // Log any errors that may have happened with the request
    Diagnostics.log('Error - ' + error); 
});

//==============================================================================
// The Patrick Geddes Centre
//==============================================================================

url = 'https://us-central1-festivar-802dc.cloudfunctions.net/getEvents?venue=The%20Patrick%20Geddes%20Centre';
// Send the request to the url
Networking.fetch(url, request).then(function(result) {
    return result.json()

}).then(function(json) {
    const ttitle1 = Scene.root.find('ttitle1');
    ttitle1.text = json[0].title == null? "Unknown": json[0].title;
    const ttitle2 = Scene.root.find('ttitle2');
    ttitle2.text = json[1].title == null? "Unknown": json[1].title;
    const ttitle3 = Scene.root.find('ttitle3');
    ttitle3.text = json[2].title == null? "Unknown": json[2].title;

    const tname1 = Scene.root.find('tname1');
    tname1.text = json[0].artist == null? "Unknown": json[0].artist;
    const tname2 = Scene.root.find('tname2');
    tname2.text = json[1].artist == null? "Unknown": json[1].artist;
    const tname3 = Scene.root.find('tname3');
    tname3.text = json[2].artist == null? "Unknown": json[2].artist;

    const tdta1 = Scene.root.find('tdta1');
    tdta1.text = json[0].next_performance.start == null? "Unknown": json[0].next_performance.start;
    const tdta2 = Scene.root.find('tdta2');
    tdta2.text = json[1].next_performance.start == null? "Unknown": json[1].next_performance.start;
    const tdta3 = Scene.root.find('tdta3');
    tdta3.text = json[2].next_performance.start == null? "Unknown": json[2].next_performance.start;

}).catch(function(error) {
  // Log any errors that may have happened with the request
    Diagnostics.log('Error - ' + error.message); 
});
