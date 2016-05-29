// show Stack dropdown
var getStack = document.getElementById('chooseStack');
getStack.addEventListener("click", function (){
  document.getElementById("myDropdown").classList.toggle("show");
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
function  countdown(secs, element, func){
  var timer;
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
  timer = setTimeout('countdown('+secs+',"'+element+'", '+func+')', 1000);
  
  if (secs < 0){
    clearTimeout(timer);
    func();
  }
}

//60 Sec Clock
function timerClock(secsTimer, element){
  var timerCountdown;
  var showTimerClock = document.getElementById(element);

  if (secsTimer<61){
    $('#timer').html(secsTimer);
  }
  
  secsTimer--;
  timerCountdown = setTimeout('timerClock('+secsTimer+',"'+element+'")', 1000);

  if (secsTimer < 1){
    clearTimeout(timerCountdown);
    $('#timer').html("Time's Up!");
    gameSummary();
  }
}

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

// pass button
var passEntry = document.getElementById('pass');

// game summary
function gameSummary(){
  $('.pass-correct').removeClass('show');
  alert ("Times Up");
  liveScore = 0;
}

// Maori Myths and Legends - cat1
var playCat1 = document.getElementById('cat1');
playCat1.addEventListener("click", function(){
  countdown(3, "entry", showMythsLegends);
  timerClock(5, "timer")
  addCorrect.addEventListener("click", function(){
    showMythsLegends();
  });
  passEntry.addEventListener("click", function(){
    showMythsLegends();
  });
});

//TV and Film - cat2
var playCat2 = document.getElementById('cat2');
playCat2.addEventListener("click", function(){
  countdown(3, "entry", showTVFilms);
  addCorrect.addEventListener("click", function(){
    showTVFilms();
  });
  passEntry.addEventListener("click", function(){
    showTVFilms();
  });
});

//Play us a G - cat3
var playCat3 = document.getElementById('cat3');
playCat3.addEventListener("click", function(){
  countdown(3, "entry", showSongs);
  addCorrect.addEventListener("click", function(){
    showSongs();
  });
  passEntry.addEventListener("click", function(){
    showSongs();
  });
})

// Choose Stack and Play
function showMythsLegends (){
  var generateIndex = Math.floor(maoriMyth.length * Math.random());

  var grabMythsLegends = maoriMyth[generateIndex];
  $('#entry').html(grabMythsLegends);
}

function showTVFilms (){
  var generateIndex = Math.floor(TVFilm.length * Math.random());

  var grabTVFilm = TVFilm[generateIndex];
  $('#entry').html(grabTVFilm);
}

function showSongs(){
  var generateIndex = Math.floor(songs.length * Math.random());

  var grabSongs = songs[generateIndex];
  $('#entry').html(grabSongs);
}