let ntab = document.getElementById("nametab");
let ctab = document.getElementById("colortab");
let wtab = document.getElementById("weathertab");
let stab = document.getElementById("searchtab");
ntab.onclick = function(){
    openCity(event, 'name')
}
ctab.onclick = function(){
    openCity(event, 'color')
}
wtab.onclick = function(){
    openCity(event, 'weather')
}
stab.onclick = function(){
    openCity(event, 'search')
}