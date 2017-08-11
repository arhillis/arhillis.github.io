

var nameEl = document.getElementById("nameBox");
var emailEl = document.getElementById("emailBox");
var nameDisplay = document.getElementById("nameDisplay");
var emailDisplay = document.getElementById("emailDisplay");
var sendBtn = document.getElementById("sendBtn");
var clearBtn = document.getElementById("clearBtn");

function init(){
    displayInfo();
    sendBtn.addEventListener("click", saveInfo, false);
    clearBtn.addEventListener("click", clearAll, false);
}

function saveInfo(){
    saveEmail();
    saveName();
    alert("Name: " + localStorage.getItem("name") + "\nEmail: " + localStorage.getItem("email"));
    displayInfo();
}
function displayInfo(){   
    if(localStorage.getItem("email") == null){
        emailDisplay.textContent = "Please enter an email address: ";
    }else{
        emailDisplay.innerHTML = (localStorage.getItem("email").length == 0)
            ?      "Please enter an email address:"
            :      "Current Email Address: \n" + localStorage.getItem("email");
    }
    
    if(localStorage.getItem("name") == null){
        nameDisplay.innerHTML = "Welcome back, User!";
    }else{
        nameDisplay.innerHTML = (localStorage.getItem("name").length == 0)
            ?       "Welcome back, User!"
            :       "Welcome back, " + localStorage.getItem("name") + "!";
    }
    
}
function saveName(){
    localStorage.setItem("name", nameEl.value);
}

function saveEmail(){
    localStorage.setItem("email", emailEl.value);
}

function clearAll(){
    localStorage.clear();
    nameEl.value = null;
    emailEl.value = null;
    nameDisplay.textContent = "Welcome back, User!";
    emailDisplay.textContent = "Please enter an email address: ";
}

window.addEventListener("load", init(), false);
