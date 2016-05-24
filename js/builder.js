// show Stack dropdown
var getStack = document.getElementById('chooseStack');
getStack.addEventListener("click", function (){
  document.getElementById("myDropdown").classList.toggle("show");
})

var liveScore = 1;
var addCorrect = document.getElementById('correct');
addCorrect.addEventListener("click", function(){
  $("#score").html(liveScore);
  liveScore += 1;
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#chooseStack')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// 3 2 1 Countdown
var timer;
function  countdown(secs, element){

  var showSec = document.getElementById(element);
  
  if(secs === 3){
    showSec.innerHTML = "On Your Marks";
  }
  if(secs === 2){
    showSec.innerHTML = "Get Set";
  }
  if(secs === 1){
    showSec.innerHTML = "GO!";
  }
  secs--;
  console.log(secs);
  timer = setTimeout('countdown('+secs+',"'+element+'")', 1200);
  
  if (secs < 1){
    clearTimeout(timer);
  }
}

var startGame = document.getElementById('start');
startGame.addEventListener("click", function(){
  countdown(3, "entry")
});

// Choose Stack and Play
