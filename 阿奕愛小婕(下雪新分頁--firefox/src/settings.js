let inputblue= document.getElementById("blue");
let defaultbtn= document.getElementById("sdefault");
let inputred= document.getElementById("red");
let viewbtn= document.getElementById("goview");
viewbtn.onclick = function(){
    chrome.tabs.create({url: "chrome://newtab"});
}
defaultbtn.onclick = function(){
    chrome.storage.sync.set({name_vla:0}, function() {});
    alert("已恢復預設值");
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
        alert('藍方設定已儲存');
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
        alert('紅方設定已儲存');
        location.reload();
      });
};
};
}
);