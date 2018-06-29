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

        var results = response.data;
        

        for (let i = 0; i < 10; i++) {
            console.log("response", response);
            console.log("queryURL");
        

            //div to hold gifs
            var gifDiv = $("<div class = 'gifs'>");

            //storing rating data
            var rating = results[i].rating;
            //storing gif URL data;
            // var gifURL = results[i].embed_url; 
            //creates a <p> tag to hold the rating display
            var prating = $("<p>").text("Rated: " + rating);
            //append thegif div with the rating
            gifDiv.append(prating);
            //create an element to hold image
            $("#rating-view").append(gifDiv)
            var gifDisplay = $("<img>").attr("src", results[i].images.fixed_height.url);

            
            gifDisplay.attr({
                "data-animate": results[i].images.fixed_height.url,
                "data-still": results[i].images.fixed_height_still.url,
                "class": "gif",
                
            })
            
            
            //Take image and append to the gif div we created.
            gifDisplay.append(gifDiv);
            //Take both of these in gif-display and send it to the pre-defined "gif-view"
            
            $("#gif-view").append(gifDisplay);

            
            
            
        }
        $(".gif").on("click", function() {

            var state = $(this).attr("data-state");

            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
        });

        
    })
    
}
function makeButtons() {

    //To delete any exntires before adding more
    
    $("#buttons-view").empty();

    //This for-loop takes the strings in the topics array and turns them into buttons
    for (var i = 0; i < topics.length; i++) {

        var btn = $("<button>");
        btn.addClass("gifbtn");
        btn.attr("data-name", topics[i]);
        btn.text(topics[i]);
        $("#buttons-view").append(btn);
        
        
    }
    
}
//To add new buttons and gifs
$("#search-gif").on("click", function(event){
    event.preventDefault();
    $("#gif-view").empty()
    //grab input from the search form
    var gifSearch = $("#search-input").val().trim();
    //add topic from search bar into the topics array, the loop will make the buttons.
    topics.push(gifSearch);
    $("#gif-view").empty();

    makeButtons();
})

//Search through document for ".gifbtn class"
$(document).on("click", ".gifbtn", displayGifs);
    var state = $(this).attr("data-state");
    //Check to see if gif is in animate or still state.
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

makeButtons();