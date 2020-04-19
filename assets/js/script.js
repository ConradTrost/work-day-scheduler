var events = {};
var btn = "Save Task";
// Add current day/time to jumbotron
var currentDay = moment().format('MMMM Do, YYYY');
var currentTime = parseInt(moment().format('H'));
$('#currentDay').append(currentDay);

// Timeblocks
for (var i = 9; i < 23; i++) {
        $('.container').append('<div class="row border-top border-dark">'
        + '<div class="col">'+i+':00</div>'
        + '<div id="'+i+'" class="text-form col-10"></div>'
        + '<div type="button" class="btn btn-dark col">Save Task!</div>'
      + '</div>');
      if (currentTime > i) {
        $('#'+i).addClass("past");
      } else if (currentTime == i) {
        $('#'+i).addClass("present");
      } else {
        $('#'+i).addClass("future");
      }
};

// Text Input
$(".container").on("click", ".text-form", function() {
    var text = $(this)
      .text()
      .trim();
      
    var textInput = $("<textarea>")
    .addClass("form-contro col-10")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  });
