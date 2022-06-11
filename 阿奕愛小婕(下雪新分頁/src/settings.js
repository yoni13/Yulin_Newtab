let inputblue= document.getElementById("blue");
let defaultbtn= document.getElementById("sdefault");
let inputred= document.getElementById("red");
let viewbtn= document.getElementById("goview");
let titlew= document.getElementById("title");
let htmltitle= document.getElementById("settingw");
let ifud= document.getElementById("ifu");
let ente= document.getElementById("prenter");
let nameta= document.getElementById("nametab");
let colorta= document.getElementById("colortab");
let goviewco= document.getElementById("goviewcolor");
let sdefaultcol = document.getElementById("sdefaultcolor");
let saveco = document.getElementById("savecolor");
if (window.navigator.language != "zh-TW"){
    nameta.innerHTML = "Name";
    colorta.innerHTML = "Color";
    titlew.innerHTML = "Settings";
    htmltitle.innerHTML = "Settings";
    ifud.innerHTML = "If you want to use the default setting, just close this tab.";
    ente.innerHTML = "Press enter to save.";
    inputblue.placeholder = "Up's Name";
    inputred.placeholder = "Down's name.";
    defaultbtn.innerHTML = "Restore default name";
    viewbtn.innerHTML = "View new tab";
    goviewco.innerHTML = "View new tab";
    sdefaultcol.innerHTML = "Restore default color";
    saveco.innerHTML = "Save color";
}
chrome.storage.sync.get("color_vla", function(items) {
    if (items.color_vla == 1) {
        chrome.storage.sync.get("color_bluehex", function(items) {
            document.getElementById("bluec").value = items.color_bluehex;
        });
        chrome.storage.sync.get("color_redhex", function(items) {
            document.getElementById("redc").value = items.color_redhex;
        });
    }
});
saveco.onclick = function(){
    var bluecolor = document.getElementById("bluec").value;
    var redcolor = document.getElementById("redc").value;
    chrome.storage.sync.set({color_vla:1}, function() {});
    chrome.storage.sync.set({color_bluehex:bluecolor}, function() {});
    chrome.storage.sync.set({color_redhex:redcolor}, function() {});
    if (window.navigator.language != "zh-TW"){
        alert("Save color successfully!");
    }
    else{
        alert("儲存成功!");
    }
}
viewbtn.onclick = function(){
    chrome.tabs.create({url: "chrome://newtab"});
}
goviewco.onclick = function(){
    chrome.tabs.create({url: "chrome://newtab"});
}
sdefaultcol.onclick = function(){
    chrome.storage.sync.set({color_vla:0}, function() {});
    if (window.navigator.language == "zh-TW"){
    alert("已恢復預設值");}
    else{
        alert('Default color restored');}
    location.reload();
}
defaultbtn.onclick = function(){
    chrome.storage.sync.set({name_vla:0}, function() {});
    if (window.navigator.language == "zh-TW"){
    alert("已恢復預設值");}
    else{
        alert('Default name restored');}
    location.reload();
}
chrome.storage.sync.get("name_vla", function(items) {
      console.log(items);
      var name_vla = items.name_vla;

inputblue.onkeyup = function (e) {
    if (e.key === 'Enter') {
    event.preventDefault();
    chrome.storage.sync.set({bluekey: inputblue.value}, function() {
        console.log('Value is set to ' + inputblue.value);
        inputblue.value = "";
        console.log(name_vla)
        if (name_vla == 0) {
            chrome.storage.sync.set({name_vla:1}, function() {})
        };
        if (name_vla == 2) {
            chrome.storage.sync.set({name_vla:3}, function() {})
        }
        if (window.navigator.language == "zh-TW"){
            alert('藍方設定已儲存');
        }
        else{
            alert('Blue name saved');
            }
        location.reload();
        
    });
};
};
inputred.onkeyup = function (e) {
    if (e.key === 'Enter') {
    event.preventDefault();
    chrome.storage.sync.set({redkey: inputred.value}, function() {
        console.log('Value is set to ' + inputred.value);
        inputred.value = "";
        if (name_vla == 0) {
            chrome.storage.sync.set({name_vla:2}, function() {})
        };
        if (name_vla == 1) {
            chrome.storage.sync.set({name_vla:3}, function() {})
        }
        if (window.navigator.language == "zh-TW"){
            alert("紅方設定已儲存");}
        else{
            alert('Red name saved');}
        location.reload();
      });
};
};
}
);