//Create a topic array to create initial buttons, category emotions

var topics = ["happy", "sad", "frustrated", "excited", "jealous"];

function displayGifs() {

    var userSearch = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=DgGchXJ8Kvw8hOC8UEp50xu3hlLb5D5b&limit=10";
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log("response", response);
        console.log("queryURL");

        var gifDiv = $("<div class = 'gifs'>");
        var rating = response.rating
        
    })
}
displayGifs();