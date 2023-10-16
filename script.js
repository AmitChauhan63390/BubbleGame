var clutter="";
for(var i = 0;i<=135;i++){
    var rn = Math.round(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
    
}

document.querySelector("#pbtm").innerHTML=clutter;