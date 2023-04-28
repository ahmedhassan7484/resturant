
var _nav=document.getElementById("nav");
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

function _valText(){
    var text1=document.getElementById("_text").value;
    
    if(text1.length<3){
        document.getElementById("_d1").innerHTML="you must enter numper bigger than 3 character"
    }else{
        document.getElementById("_d1").style.display="none"
    }
}
function _Email(){
    var text2=document.getElementById("_email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(text2.match(validRegex)){
        document.getElementById("_d2").style.display="none"
       
    }else{
        document.getElementById("_d2").innerHTML="you must enter corect email"
    }
}
function _phoneVal(){
    var text3=document.getElementById("_phone").value;
    
    if((text3[0]==0 && text3[1]==1) && (text3[2]==0 || text3[2]==1 || text3[2]==2) && text3.length==8){
       
        document.getElementById("_d3").style.display="none"
        
        }else{
            document.getElementById("_d3").innerHTML="you must start with 010 or 011 or 012 and phone numper must be 8 numpers";
    }
   
}



function validateInput() {
 var text1=document.getElementById("_text").value;
var text2=document.getElementById("_email").value;
var text3=document.getElementById("_phone").value;
    // Validate name
    function _x(){
    if(text1.length<3){
        document.getElementById("_d1").style.display="block"
        document.getElementById("test").style.display="none"
        document.getElementById("_d1").innerHTML="you must enter numper bigger than 3 character"
        return false
    }else{
        document.getElementById("_d1").style.display="none"
        return true;
    }
}
function _y(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(text2.match(validRegex)){
        document.getElementById("_d2").style.display="none"
        return true;
       
    }else{
        document.getElementById("_d2").style.display="block"
        document.getElementById("test").style.display="none"
        document.getElementById("_d2").innerHTML="you must enter corect email"
        return false
    }
}
function _z(){
    // Validate phone number
    if((text3[0]==0 && text3[1]==1) && (text3[2]==0 || text3[2]==1 || text3[2]==2) && text3.length==8){
       
        document.getElementById("_d3").style.display="none"
        return true;
        }else{
            document.getElementById("_d3").style.display="block"
            document.getElementById("test").style.display="none"
            document.getElementById("_d3").innerHTML="you must start with 010 or 011 or 012 and phone numper must be 8 numpers";
            return false
    }
}
if(_x()==true && _y()==true && _z()==true){
    document.getElementById("test").style.display="block"
    
  /*document.getElementById("test").innerHTML="sucssesful"*/
  document.getElementById("test").innerHTML="<img src='./img/44.png'>"
  
  }
}
  
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
  
  
  