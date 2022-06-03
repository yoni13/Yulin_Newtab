chrome.storage.sync.get("name_vla", function(items) {
  
    console.log(items);
    var name_vla = items.name_vla;

 



if (name_vla == 1) {
chrome.storage.sync.get("bluekey", function(items) {  
      console.log(items);
      document.getElementById("blueneon").innerText = items.bluekey;
  });
}
if (name_vla == 2) {
chrome.storage.sync.get("redkey", function(items) {  
      console.log(items);
      document.getElementById("redneon").innerText = items.redkey;
  });
}
if (name_vla == 3) {
chrome.storage.sync.get("bluekey", function(items) {  
      console.log(items);
      document.getElementById("blueneon").innerText = items.bluekey;
  });
chrome.storage.sync.get("redkey", function(items) {
      console.log(items);
      document.getElementById("redneon").innerText = items.redkey;
    
  });
}
}
);