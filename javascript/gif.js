//Create a topic array to create initial buttons, category emotions

var topics = ["happy", "sad", "frustrated", "excited", "jealous"];

function displayGifs() {

    var userSearch = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=DgGchXJ8Kvw8hOC8UEp50xu3hlLb5D5b&limit=10";
    // Creating an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log("response", response);
        console.log("queryURL");

        //div to hold gifs
        var gifDiv = $("<div class = 'gifs'>");

        //storing rating data
        var rating = response.rating;
        //storing gif URL data;
        var gifURL = response.embed_url; 
        //creates a <p> tag to hold the rating display
        var prating = $("<p>").text("Rated: " + rating);
        //append thegif div with the rating
        gifDiv.append(prating);
        //create an element to hold image
        var gifDisplay = $("<img>").attr("src", gifURL);
        
        //Take image and append to the gif div we created.
        gifDisplay.append(gifDiv);
        //Take both of these in gif-display and send it to the pre-defined "gif-view"
        $("#gif-view")
        
    })
    
}
function makeButtons() {

    //To delete any exntires befor adding more
    $("#buttons-view").empty();
    for (var i = 0; i < topics.length; i++) {

        var btn = $("<button>");
        btn.addClass("gifbtn");
        btn.attr("data-name", topics[i]);
        btn.text(topics[i]);
        $("#buttons-view").append(btn);
        
    }
    
}
displayGifs();
makeButtons();