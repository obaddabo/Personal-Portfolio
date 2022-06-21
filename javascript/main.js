


// disabling right click

document.addEventListener("contextmenu", function (e) {
    alert("right click is not allowed");
    e.preventDefault();

})


// disabling inspect functions


document.onkeydown = function (e) {

    if (event.keyCode == 123) {
        return false
        
    }
    
    if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
        alert('Inspect is not allowed on this site');
        return false;
    
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
        alert('Inspect is not allowed on this site');
        return false;
    
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
        alert('Inspect is not allowed on this site');
        return false;
    
    }
    if(e.ctrlKey &&  e.keyCode == "U".charCodeAt(0)){
        alert('Inspect is not allowed on this site');
        return false;
    }
}



