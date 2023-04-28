var _nav=document.getElementById("nav");
var _slid=document.getElementById("slid");
var _images=document.getElementsByClassName("imges");
var count=0;
var count1=0;
var _para=document.getElementById("para1");
var str="Hi Welcom In Food Cort . We Make A Birfict Delisius Meets And See Food In A Middle East And We Are So Happy From Your Visiting Our Website So We Hope To Do Our Best To Make You HappyHi Welcom In Food Cort . We Make A Birfict Delisius Meets And See Food In A Middle East And We Are So Happy From Your Visiting Our Website So We Hope To Do Our Best To Make You Happy Hi Welcom In Food Cort . We Make A Birfict Delisius Meets And See Food In A Middle East And We Are So Happy From Your Visiting Our Website So We Hope To Do Our Best To Make You Happy Hi Welcom In Food Cort . We Make A Birfict Delisius Meets And See Food In A Middle East And We Are So Happy From Your Visiting Our Website So We Hope To Do Our Best To Make You Happy Hi Welcom In Food Cort . We Make A Birfict Delisius Meets And See Food In A Middle East And We Are So Happy From Your Visiting Our Website So We Hope To Do Our Best To Make You Happy Hi Welcom In Food Cort . We Make A Birfict Delisius Meets And See Food In A Middle East And We Are So Happy From Your Visiting Our Website So We Hope To Do Our Best To Make You Happy"
var str1="";
var _cat=document.getElementsByClassName("cat");
var count2=0;
var count3=0;
var _hyp=document.getElementById("hyp");
var _product= document.getElementsByClassName("product");

//start navbar of first page



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
//end navebar of first bage

//start slide bar in first file
/*var _img=document.createElement("img");
var _img1=document.createElement("img");
var _img2=document.createElement("img");
var _img3=document.createElement("img");
var _img4=document.createElement("img");
var _img5=document.createElement("img");

_img.setAttribute("src","1.jpg");
_img1.setAttribute("src","2.jpg");
_img2.setAttribute("src","3.jpg");
_img3.setAttribute("src","4.jpg");
_img4.setAttribute("src","5.jpg");
_img5.setAttribute("src","7.jpg");

_img.classList.add("imges")
_img1.classList.add("imges")
_img2.classList.add("imges")
_img3.classList.add("imges")
_img4.classList.add("imges")
_img5.classList.add("imges")

_slid.appendChild(_img)
_slid.appendChild(_img1)
_slid.appendChild(_img2)
_slid.appendChild(_img3)
_slid.appendChild(_img4)
_slid.appendChild(_img5)
*/

setInterval(function(){
    for(var i=0; i<_images.length; i++){

        // _images[i].style.display="none";
        _images[i].hidden=true;
     }
if(_images[count].hidden==true){
    _images[count].hidden=false;
}
count++;
if(count>=_images.length){
    count=0;
    
}


},4000)

//end slide bar in first file
//start about in first file
setInterval(function(){
  str1+=str[count1]
    if(count1<str.length){
        _para.innerHTML=str1
    }
    else{
        count1=-1;
        str1="";
        _para.innerHTML=str1[count1]
    }
    count1++

},100)

//end about in first file
//start category in first file
function right(){
    count2++;
    for(var i=0; i<_cat.length; i++){

        
        _cat[i].hidden=true;
     }
    if(count2==_cat.length-1){
        document.getElementById("next").hidden=true;
    }else{
        document.getElementById("next").hidden=false;
    }
    
    
    if(count2 != 0){
        document.getElementById("brev").hidden=false;
       
    }
    
   
    if(_cat[count2].hidden==true){
    _cat[count2].hidden=false
   }

}
function left(){
    count2--;
    document.getElementById("next").hidden=false;
    for(var i=0; i<_cat.length; i++){

        // _images[i].style.display="none";
        _cat[i].hidden=true;
     }
     
    if(count2 == 0){
        document.getElementById("brev").hidden=true;
      
    }
  
    
    
    if(_cat[count2].hidden==true){
    _cat[count2].hidden=false;
    
   }

}

//end category in first file
//start prodect in first file

function show1(){
    for(var i=0; i<_product.length; i++){
        _product[i].style.display="none";
    }
    if(_product[0].style.display==="block"){
_product[0].style.display="none";
    }else{
        _product[0].style.display="block";
    }
    
   
}
function show2(){
    for(var i=0; i<_product.length; i++){
        _product[i].style.display="none";
    }
    if(_product[1].style.display==="block"){
_product[1].style.display="none";
    }else{
        _product[1].style.display="block";
    }
    
   
}
function show3(){
    for(var i=0; i<_product.length; i++){
        _product[i].style.display="none";
    }
    if(_product[2].style.display==="block"){
_product[2].style.display="none";
    }else{
        _product[2].style.display="block";
    }
    
   
}
function show4(){
    for(var i=0; i<_product.length; i++){
        _product[i].style.display="none";
    }
    if(_product[3].style.display==="block"){
_product[3].style.display="none";
    }else{
        _product[3].style.display="block";
    }
    
   
}
function show5(){
    for(var i=0; i<_product.length; i++){
        _product[i].style.display="none";
    }
    if(_product[4].style.display==="block"){
_product[4].style.display="none";
    }else{
        _product[4].style.display="block";
    }
    
   
}
  
    function addToCart(){
        count3+=1;
        _hyp.innerHTML=count3
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

//end product in first file