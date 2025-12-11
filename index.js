//var olink=document.createElement("a");
//olink.setAttribute("id","origlink");
//olink.setAttribute("href","origin.html");
//document.getElementById("origin").appendChild(olink);
//var obutton=document.createElement("button");
//obutton.setAttribute("id","opagebutton");
//document.getElementById("origlink").innerHTML = document.getElementById("opagebutton");
//document.getElementById("origlink").appendChild(obutton);
//document.getElementById("opagebutton").innerHTML = "Learn more about the Origins!";

// Featured above is an old block of text that I had repeated five times, one for each page.
// However, I ran it through chatgpt to turn it into a function because i didn't want literally 50 lines of the same thing.
// If it matters, I did attempt to turn this into a function on my own, however it failed and I wasn't able to find the reason why.
function createLinkSection(parentId, linkId, href, buttonId, buttonText) {
    var link = document.createElement("a");
    link.setAttribute("id", linkId);
    link.setAttribute("href", href);
    document.getElementById(parentId).appendChild(link);
    var button = document.createElement("button");
    button.setAttribute("id", buttonId);
    link.appendChild(button);
    button.innerHTML = buttonText;
}

createLinkSection("origin","origlink","origin.html","opagebutton","Learn more about the origins!");
createLinkSection("alliances","allylink","alliances.html","apagebutton","Learn more about the alliances!");
createLinkSection("conflict","conflink","conflict.html","cpagebutton","Learn more about the conflicts!");
createLinkSection("technology","techlink","technology.html","tpagebutton","Lean more about the technology!");
createLinkSection("decline","endlink","decline.html","epagebutton","Learn more about the end of the Cold War!");


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}