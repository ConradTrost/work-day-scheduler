// Add current day/time to jumbotron
var currentDay = moment().format('MMMM Do, YYYY');
var currentTime = parseInt(moment().format('H'));
$('#currentDay').append(currentDay);

// Timeblocks
for (var i = 9; i < 18; i++) {
  var v = i - 9;
  // Adds HTML For Timeblocks to Add to Container
        $('.container').append('<div class="row">'
        + '<div class="col hour">'+i+':00</div>'
        + '<div id="'+i+'" class="text-form col-10"></div>'
        + '<div type="button" class="btn saveBtn col">Save</div>'
      + '</div>');

      // Timeblock Coloration
      if (currentTime > i) {
        $('#'+i).addClass("past");
      } else if (currentTime == i) {
        $('#'+i).addClass("present");
      } else {
        $('#'+i).addClass("future");
      }

      // Local Storage Get Items
      if (localStorage.getItem("text"+v) == null) {

      } else {
        $("#"+i).append(localStorage.getItem("text"+v));
      }
};

// Text Input
$(".container").on("click", ".text-form", function() {
  event.preventDefault();

    var text = $(this)
      .text()
      .trim();
      
    var textInput = $("<textarea>")
    .addClass("form-control text-form col-10")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// Save to Local Storage Button
$('.container').on("click", ".btn", function(event) {
  var eventIndex = $(".btn").index(this);
  var theText = $(".text-form").eq(eventIndex).val();
  localStorage.setItem("text"+eventIndex, theText);
});
