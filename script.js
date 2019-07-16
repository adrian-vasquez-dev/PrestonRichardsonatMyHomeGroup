/* Contact Form */
var firebaseConfig = {
	apiKey: "xxx-omitted-xxx",
	authDomain: "xxx-omitted-xxx",
	databaseURL: "xxx-omitted-xxx",
	projectId: "xxx-omitted-xxx",
	storageBucket: "",
	messagingSenderId: "xxx-omitted-xxx",
	appId: "xxx-omitted-xxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var firstname = getInputVal('first-name');
  var lastname = getInputVal('last-name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(firstname, lastname, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contact-form').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname:firstname,
    lastname:lastname,
    email:email,
    message:message
  });
}

/*Responsive Nav*/
function myFunction() {
  
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {

    x.className = "topnav";
  }
}

/*Listings Search*/
function mySearch() {
	var query = document.getElementById('search-query').value;
	window.open("http://prestonrichardson.agentsquared.com/search-results?Search="+query);
}










