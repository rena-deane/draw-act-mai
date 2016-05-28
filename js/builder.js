// show Stack dropdown
var getStack = document.getElementById('chooseStack');
getStack.addEventListener("click", function (){
  document.getElementById("myDropdown").classList.toggle("show");
})

// add score
var addCorrect = document.getElementById('correct');
addCorrect.addEventListener("click", function(){
  addScore();
});


var liveScore = 0;
function addScore(){
  liveScore += 1;
  $('#score').html(liveScore);
}


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
function  countdown(secs, element, func){
  var showSec = document.getElementById(element);
  if(secs === 3){
    showSec.innerHTML = "On Your Marks";
    $('.pass-correct').addClass('show');
  }
  if(secs === 2){
    showSec.innerHTML = "Get Set";
  }
  if(secs === 1){
    showSec.innerHTML = "GO!";
  }
  secs--;
  console.log(secs);
  timer = setTimeout('countdown('+secs+',"'+element+'", '+func+')', 1200);
  
  if (secs < 0){
    clearTimeout(timer);
    func();
  }
}

var playCat1 = document.getElementById('cat1');
playCat1.addEventListener("click", function(){
  countdown(3, "entry", showMythsLegends);
})

// Choose Stack and Play
function showMythsLegends (){
  var generateIndex = Math.floor(maoriMyth.length * Math.random());

  var grabMythsLegends = maoriMyth[generateIndex];
  $('#entry').html(grabMythsLegends);
}