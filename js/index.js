function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


document.querySelector("li").addEventListener("click",shopnow)
function shopnow(){
  window.location.href="https://www.nnnow.com/";
  
}






let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// document.querySelector("#login").addEventListener("click",loginfun)
// function loginfun(){
  
//   window.location.href="login.html"
// }

var userdetails=JSON.parse(localStorage.getItem("userdetails"))
userdetails.map(function(elem){
  var username=elem.name
  console.log(username)
  document.querySelector("#navbar2>div>a").innerHTML =username
  document.querySelector("#useracces").style.display="inline"
  document.querySelector("#useracces").style.color="rgb(250, 123, 144)"  
})

document.querySelector("#payment").addEventListener("click",paying)
function paying(){
  window.location.href="payment.html"
}





