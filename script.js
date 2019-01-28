document.onmousemove = function(){
    var elm = document.createElement("div");
    elm.style.top = event.clientY + "px ";
    elm.style.left = event.clientX + "px";
    elm.style.background = randomColor();
    elm.setAttribute("class" , "circle");
    document.body.appendChild(elm);
    setTimeout(function(){document.body.removeChild(elm);},1000);
}

function randomColor(){
    var s = "0123456789abcdef";
    var color = "#";
    for(i = 0; i < 6; i++){
        color += s[Math.floor(Math.random()*s.length)];
    }
    return color;
}