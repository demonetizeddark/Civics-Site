function timedTrap() {setTimeout(function() {
    alert("What? I'm not about to put money into making merch, that stuff's expensive.")
    document.getElementById("navbar").style.display = "flex"
    document.querySelector(".power").style.display = "initial"
    document.querySelector("link[rel*='icon']").href = "/assets/favicon.png"
    console.log("Ignore the 404, it's just the website. Nothing to worry about.")
    executeAccess()
}, 3000)}

function executeAccess() {
    document.querySelector("#ad").onclick = function() {adAccess()}

function adAccess(){
    var s ="";
  
  while (s!= "statera")
  {
  s=prompt("This page is password protected. Please enter the site password.");
  if (s=="statera")
  {
  window.location.href="/video/video.html"; //page to redirect if password entered is correct
  
  }
  else
  {
    if(s == "null" || s == null || s == "" ) {
     return; 
    }
    else{
      alert("This password is incorrect. Please try again.")
    }
  }
  }
  }
}