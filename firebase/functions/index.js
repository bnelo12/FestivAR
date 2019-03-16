const functions = require('firebase-functions');
const request = require('request')

exports.helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello from Firebase!");
});

// Get events at this venue
// https://us-central1-festivar-802dc.cloudfunctions.net/getEvents?venue=venueName
exports.getEvents = functions.https.onRequest((req, res) => {
    // Grab the venue parameter.
    const venueName = req.query.venue;

    request('https://api.edinburghfestivalcity.com/events?key=txzPDI2zALPED8Aw&signature=86c392180d6bd46be97e9e108c957f8f2a73b723', { json: true }, (error, response, body) => {
        if (error) { return console.log(error); }
        var events = [];
        for (var event of body) {
            if (event.venue.name === venueName) {
                eventInfo = {
                    "title":event.title,
                    "artist":event.artist,
                    "description_teaser":event.description_teaser,
                    "discounts":event.discounts,
                    "festival":event.festival,
                    "genre_tags":event.genre_tags,
                    "images":event.images,
                    "wheelchair_access":event.performance_space.wheelchair_access,
                    "disabled_description":event.venue.disabled_description,
                    "next_performance":event.performances[0]
                }
                events.push(eventInfo);
            }
        }
        events.sort(function(a, b) {
            var Date1 = new Date(a.next_performance.start);
            var Date2 = new Date(b.next_performance.start);
            return Date1 - Date2;
        });
        res.send(events.slice(0, 3));
    });
});