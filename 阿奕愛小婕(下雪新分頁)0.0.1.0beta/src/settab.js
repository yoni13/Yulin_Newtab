let ntab = document.getElementById("nametab");
let ctab = document.getElementById("colortab");
ntab.onclick = function(){
    openCity(event, 'name')
}
ctab.onclick = function(){
    openCity(event, 'color')
}