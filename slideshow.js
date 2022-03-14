var myImages =["https://us.123rf.com/450wm/get4net/get4net1812/get4net181202995/126830625-italic.jpg?ver=6", "https://image.shutterstock.com/image-vector/hope-calligraphic-inscription-smooth-lines-260nw-1760555003.jpg","https://apass.be/wp-content/uploads/2018/01/you.jpg","https://m.media-amazon.com/images/I/51vqeY7SdRL._AC_SY355_.jpg"];


 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);

function autoSlide(){
    if (document.getElementById("auto").checked)
     next(); 
    }
    
    
    setInterval(autoSlide,2000); // Next