
var boxLog = document.getElementsByClassName("box-login")[0];
var boxReg = document.getElementsByClassName("box-register")[0];
var toLog = document.getElementById("to-log");
var toReg = document.getElementById("to-reg");
const input = document.getElementsByClassName("ing");



for (var i = 0; i < boxReg.children.length; i++) {
    
    if (i == 0) {
        boxReg.children[i].style.transform = "translateX(-200%)";
    } 
    
    else {
        boxReg.children[i].style.transform = "translateX(200%)";
    }
   
    boxReg.children[i].style.filter = "blur(10px)";
}


for (var i = 0; i < input.length; i++) {
   
    input[i].addEventListener("focus", function() {
        var label = this.nextElementSibling;
        label.style.transform = "translate(10px) translateY(-68px)";
        label.style.color = "whitesmoke";
        var icon = label.getElementsByTagName("i")[0];
        icon.style.color = "rgba(251, 241, 241, 1)";
    });

    
    input[i].addEventListener("blur", function() {
        if (this.value.length == 0) {
            var label = this.nextElementSibling;
            label.style.transform = "translate(10px) translateY(-28px)";
            label.style.color = "rgba(239, 236, 236, 0.5)";
            var icon = label.getElementsByTagName("i")[0];
            icon.style.color = "rgba(17, 34, 51, 0.502)";
        }
    });
}


toReg.onclick = function() {
    moveForm(boxReg, boxLog); 
}

toLog.onclick = function() {
    moveForm(boxLog, boxReg); 
}


function moveForm(boxIn, boxOut) {
   
    boxIn.style.zIndex = "1";
    boxOut.style.zIndex = "0";

    
    for (var i = 0; i < boxIn.children.length; i++) {
       
        boxIn.children[i].style.transition = "all 0.5s"; 
        
       
        boxIn.children[i].style.transform = "translate(0%)";
        
        
        boxIn.children[i].style.filter = "blur(0px)";
    }

    
    for (var i = 0; i < boxOut.children.length; i++) {
        
        boxOut.children[i].style.transition = "all 0.5s"; 
        
        
        if (i == 0) {
            boxOut.children[i].style.transform = "translateX(-200%)"; // يخرج لليسار
        } else {
            boxOut.children[i].style.transform = "translateX(200%)"; // يخرج لليمين
        }
        
        
        boxOut.children[i].style.filter = "blur(10px)";
    }
}
