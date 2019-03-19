// Greg Chu [1:13 PM]
// $("#searchButton").on("click", function() {
//    var userInput = $("#id").val();

// // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + "&api-key=wqP3qmXOHZmoORbtddzi93TrBy4GQtvE";
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + "U.S." + "&api-key=wqP3qmXOHZmoORbtddzi93TrBy4GQtvE";

// //AJAX FUNCTION FOR ARTICLE CALL
// $.ajax({
//  url: queryURL,
//  method: "GET",
// }).then(function(response){
//    console.log(response);
// })
// //FUNCTION
// });

// Jeremy Chen (Mon 2:02)

$("#searchButton").on("click", function() {
  //     var userInput = $("#id").val();
  var startYear = $("#id").val();
  var endYear = $("#id").val();

  //Actual URL that with userInput that we will use: // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + "&api-key=wqP3qmXOHZmoORbtddzi93TrBy4GQtvE";
  //  Test URLs:

  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&facet_fields=pub_year&facet=true&api-key=wqP3qmXOHZmoORbtddzi93TrBy4GQtvE";
  // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&api-key=wqP3qmXOHZmoORbtddzi93TrBy4GQtvE";
  //AJAX FUNCTION FOR ARTICLE CALL

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
});
