// Below are the global variables that will be referred to within the code.  

var dayDisplayEl = $('#dayDisplay');
var timeDisplayEl = $('#timeDisplay');

// All code that interacts with the DOM is in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

 // The below function allows for the current date to be displayed on the webpage via day js.

  function displayDay() {
    var currentDay = dayjs().format('dddd DD MMMM');
    dayDisplayEl.text(currentDay);
  }

 // The below function allows for the current time to be displayed on the webpage via day js.

  function displayTime() {
    var currentTime = dayjs().format('HH:mm');
    timeDisplayEl.text(currentTime);

 // The below line of code will allow for the current time to update automatically without the need for refreshing the webpage.

  } setInterval(displayTime, 1000);


 // The function below adds an event listener to the save button via the class.
 // Key and value variables are created to gather data. The gathered data will be stored to the local storage under the specified key-value pair.

   function userInput () { 
    $('.saveBtn').on('click', function () {
     var key = $(this).parent().attr('id');
     var value = $(this).siblings('.description').val();
     localStorage.setItem(key,value);

    });
    
    }

 // The below will loop through each of the time blocks and set the input so that it remains on the webpage even if the page is refreshed.

    $('.time-block').each(function() {
      var key = $(this).attr('id');
      var value = localStorage.getItem(key);
      $(this).children('.description').val(value);
    });
  
 // The below lines of code call all of the functions created above.

  displayDay();
  displayTime();
  userInput(); 
 
 }); 