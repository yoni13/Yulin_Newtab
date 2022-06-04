let inputblue= document.getElementById("blue");
let defaultbtn= document.getElementById("sdefault");
let inputred= document.getElementById("red");
let viewbtn= document.getElementById("goview");
let titlew= document.getElementById("title");
let htmltitle= document.getElementById("settingw");
let ifud= document.getElementById("ifu");
let ente= document.getElementById("prenter");
if (window.navigator.language != "zh-TW"){
    titlew.innerHTML = "Settings";
    htmltitle.innerHTML = "Settings";
    ifud.innerHTML = "If you want to use the default name, just close this tab.";
    ente.innerHTML = "Press enter to save.";
    inputblue.placeholder = "Blue Name";
    inputred.placeholder = "Red name.";
    defaultbtn.innerHTML = "Restore default name";
    viewbtn.innerHTML = "View new tab";
}
viewbtn.onclick = function(){
    let url = chrome.runtime.getURL("public/index.html");
    chrome.tabs.create({url:url});
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