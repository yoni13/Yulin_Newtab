if (window.navigator.language != "zh-TW") {
  document.getElementById("loves").innerText = 'LOVES'
  document.getElementById("blueneon").innerText = 'Weley'
  document.getElementById("redneon").innerText = 'Milody'
  document.getElementById("htmltitle").innerText = 'New Tab'
}
chrome.storage.sync.get("color_vla", function(items) {
  console.log(items);
  var color_vla = items.color_vla;
if (color_vla == 1) {
  chrome.storage.sync.get("color_bluehex", function(items) {
  document.getElementById("blueneon").style.textShadow = '0 0 5px ' +  items.color_bluehex +',0 0 10px '+ items.color_bluehex + ',0 0 20px '+  items.color_bluehex + ',0 0 40px' + items.color_bluehex;
  });
  chrome.storage.sync.get("color_redhex", function(items) {
  document.getElementById("redneon").style.textShadow = '0 0 5px ' +  items.color_redhex +',0 0 10px '+ items.color_redhex + ',0 0 20px '+  items.color_redhex + ',0 0 40px' + items.color_redhex;
  });
}
}
);

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