var sumEl = document.getElementById("summary");

document.getElementById("tribute").addEventListener("mouseover", function() {
    sumEl.innerHTML = "This is my tribute to King George VI that I wrote for the Free Code Camp curriculum.";
});
            
document.getElementById("quotes").addEventListener("mouseover", function() {
    sumEl.innerHTML = "This is the random quote generator that I wrote for the Free Code Camp curriculum.";
});

document.getElementById("monster").addEventListener("mouseover", function() {
    sumEl.innerHTML = "This is a simple program I wrote while studying HTML5 canvas. I am still working on a thumbnail for this project.";
});

var blankEls = document.getElementsByClassName("blank");

for(var i = 0; i < blankEls.length; i++){
    blankEls[i].addEventListener("mouseover", function() {
        document.getElementById("summary").innerHTML = "Another exciting project comming soon.";
    });
}
            
var btnEls = document.getElementsByClassName("project");

for(var i = 0; i < btnEls.length; i++){
    btnEls[i].addEventListener("mouseleave", function() {
        document.getElementById("summary").innerHTML = "Hover over a project to see a description.";
    });
}