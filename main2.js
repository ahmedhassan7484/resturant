var _nav=document.getElementById("nav");

//start navbar of secand page
var _link1=document.createElement("a");
var _link2=document.createElement("a");
var _link3=document.createElement("a");

_link1.setAttribute("href","index.html")
_link2.setAttribute("href","index2.html")
_link3.setAttribute("href","index3.html")

_link1.innerHTML="Home";
_link2.innerHTML="About";
_link3.innerHTML="Contact US";

_nav.appendChild(_link1)
_nav.appendChild(_link2)
_nav.appendChild(_link3)

_link1.classList.add("link1")
_link2.classList.add("link2")
_link3.classList.add("link3")
//start navbar of secand page



function getLoc(){
    navigator.geolocation.getCurrentPosition(showPossition,handelError)
}
function showPossition(e){
    var lat = e.coords.latitude;
    var long = e.coords.longitude;
    location.assign("http://maps.google.com/maps?q=" + lat + ",+" + long);
}
function handelError(x){
    switch (x.code) {
        case 0:
          console.log(x.message);
          break;
        case 1:
          console.log(x.message);
          break;
        case 2:
          console.log(x.message);
          break;
        case 3:
          console.log(x.message);
          break;
      }
}