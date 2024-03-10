var dayDisplayEl = $('#dayDisplay');
var timeDisplayEl = $('#timeDisplay');




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  function displayDay() {
    var currentDay = dayjs().format('dddd DD MMMM');
    dayDisplayEl.text(currentDay);
  }

  function displayTime() {
    var currentTime = dayjs().format('HH:mm');
    timeDisplayEl.text(currentTime);
  
  } setInterval(displayTime, 1000);


   function userInput () { 
    $('.saveBtn').on('click', function () {
     var key = $(this).parent().attr('id');
     var value = $(this).siblings('.description').val();
     localStorage.setItem(key,value);

    });
    
    }

    $('.time-block').each(function() {
      var key = $(this).attr('id');
      var value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });
  
 
  displayDay();
  displayTime();
  userInput(); 
 
 }); 