// arguments to the program
var args = process.argv.slice(2);
// command is the first argument, 
// and rest of the argument is parameter to the command.

var command = args[0];
var parameters = args.slice(1);

const imdb = require('imdb-api');
const spotify-this-song= require ('spotify-api')

//console.log("Command for Liri is" + command);
//console.log("Command paramter is" + parameters); 



function spotifyinfo(spotifySearchString){
  console.log("reached spotifyinfo");
  spotify.getReq({name:""+spotifySearchString+"'"},  (err,things)=>){
    var spotify = songs;
    //find song
    var artists = songs["artists"];
    var album = songs["album"];
    var previewLink = songs["previewLink"];
  }
};


function movieinfo(movieSearchString) {
  console.log("reached movieInfo");
   imdb.getReq({ name: "'" + movieSearchString + "'" }, (err, things) => {
    var movie = things;
    // find title
    var title = things["title"];
    var year = things["year"];
    var rating = things["rating"];
    var languages = things["languages"];
    var plot = things["plot"];
    var actors = things["actors"];
    var rottonTomatoesValue = ["rottonTomatoesValue"]
    var rottonTomatoesUrl = ["rottonTomatoesUrl"]
    var

    console.log(things);
    console.log("Title of the movie: " + title);
    console.log("Year the movie was released " + year);
    console.log("IMDB rating of the movie: " + rating);
    //console.log("Language of the movie: " + languages;
    console.log("Plot of the movie: " + plot);
    console.log("Actors in the movie: " + actors);
    console.log("Rotton tomatoes value" + value)
    console.log("Rotton Tomatoes url"+ url)
   });

}




// main program -- to dispatch to various functions
switch (command) {
  case 'spotify-this-song':
   console.log("User Requested " + command);
   console.log("Parameter: " + parameters); 
  break;
  case 'my-tweets':
   console.log("User Requested " + command);
   console.log("Parameter: " + parameters);
  break;
  case 'movie-this':
   console.log("User Requested " + command);
   console.log("Parameter: " + parameters);
   //imdb.getReq({ name: "'" + parameters + "'" }).then(console.log);
   movieinfo(parameters);
  break;
  case 'do-what-it-says':
   console.log("User Requested " + command);
   console.log("Parameter: " + parameters);
  break;
  default:
   console.log("Command " + command + " is not recognized");
   console.log("Usage: liri.js my-tweets ");
   console.log("Usage: liri.js spotify-this-song 'song-name'  ");
   console.log("Usage: liri.js movie-this 'movie-name'  ");
   console.log("Usage: liri.js do-waht-it-says ");
}
