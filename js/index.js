$(document).ready(function() {
  var quote;
  var author;

  function getNewQuote() {
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(response) {
        console.log(response.quoteText);
        quote = response.quoteText;
        author = response.quoteAuthor;
        $("#quotes").text(quote);

        if (author) {
          $("#authors").text("said by " + author);
        } else {
          $("#authors").text("- unknown");
        }
      }
    });
  };
 // getNewQuote();

  $(".getQuote").on("click", function(event) {
    event.preventDefault();
    getNewQuote();
  });
  $('.shareQuote').on('click', function(event) {
	event.preventDefault();
	window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' - ' + author));
});
  
});