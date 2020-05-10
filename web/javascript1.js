var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading'); //this is buttom
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }

//1.	Scroll to top button
//Get the button:
mybutton = document.getElementById("myBtn");
// When the user scrolls the page, execute myFunction
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction(),myFunction(),myFunction1()};

function scrollFunction() {
  //console.log(document.body.scrollTop);
  //console.log(document.documentElement.scrollTop);
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//2. scroll indicator
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // console.log(winScroll);
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // console.log(document.documentElement.scrollHeight);
  // console.log(document.documentElement.clientHeight);
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//3.	Modal Box.
// Get the modal
var modal = document.getElementById("myModal9");


var box = document.getElementById("myBox9");
var modalBox = document.getElementById("modal-content9");

box.onclick = function(){
  modal.style.display = "block";
  modalBox.innerHTML = this.innerHTML //this mean box
  modalBox.style.backgroundColor = "gray";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close9")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


//4.activate
function reset(circle){
  document.getElementById(circle).style.width="6px";
  document.getElementById(circle).style.height="6px";
  document.getElementById("img"+circle).style.backgroundColor="#00A2D5";
  document.getElementById("bt"+circle).style.backgroundColor="#00A2D5";
  // console.log("img"+circle);
}
function activate(circle){
  reset(1);reset(2);reset(3);
  document.getElementById(circle).style.width="10px";
  document.getElementById(circle).style.height="10px";
  document.getElementById("img"+circle).style.background="blue";
  document.getElementById("bt"+circle).style.background="blue";
  
}


//5.	Email Validation with alert
myButton = document.getElementById("e2");

myButton.onclick =  function emailIsValid () {

  var myInput = document.getElementById("e1").value;
  
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(myInput)) {
    return true;
  } else {
    alert("we are very soory your email is not validate");
  }
}

// 6.	Sticky Navbar

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction1(){
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//7.	Collapse Sidebar.
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}




