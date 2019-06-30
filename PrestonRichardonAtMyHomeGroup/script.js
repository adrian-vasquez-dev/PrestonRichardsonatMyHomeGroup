/*Responsive Nav*/
function myFunction() {
  
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {

    x.className = "topnav";
  }
}

function mySearch() {
	var query = document.getElementById('search-query').value;
	window.open("http://prestonrichardson.agentsquared.com/search-results?Search="+query);
}




