var axios = require('axios');
var convertJson = require('./converter');
 
function handle(url) {
    // Make a request for a user with a given ID
    axios.get(url)
        .then(function (response) {
            // handle success
            var result = convertJson(response.data);
            console.log(JSON.stringify(result));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}


var args = process.argv.slice(2);
if (args == undefined || args.length == 0) {
    console.log('Please provide url : node converter-from-url.js google.com/.json');
} else {
    handle(args[0]);
}
