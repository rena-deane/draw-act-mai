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

// Choose Stack and Play
