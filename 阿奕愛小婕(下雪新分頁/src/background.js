// name_vla = 0; default
// name_vla = 1 only change blue
// name_vla = 2 only change red
// name_vla = 3 change both

// color_vla = 1 changed
// color_vla = 0 default

// love_vla = 1 changed
// love_vla = 0 default

//weather_vla = 1 changed
//weather_vla = 0 default

//search_vla = 1 changed
//search_vla = 0 default

//love_vla = 1 logined
//love_vla = 0 default
chrome.runtime.onInstalled.addListener(async () => {
  chrome.storage.sync.get("name_vla", function(items) {
      console.log(items.name_vla);
      if (items.name_vla == undefined) {
        chrome.storage.sync.set({name_vla: 0});
      }
  });
  chrome.storage.sync.get("weather_vla", function(items) {
    console.log(items.weather_vla);
    if (items.name_vla == undefined) {
      chrome.storage.sync.set({weather_vla: 0});
    }
});
  chrome.storage.sync.get("color_vla", function(items) {
    console.log(items.name_vla);
    if (items.color_vla == undefined) {
      chrome.storage.sync.set({color_vla: 0});
    }
});
chrome.storage.sync.get("love_vla", function(items) {
  console.log(items.love_vla);
  if (items.love_vla == undefined) {
    chrome.storage.sync.set({love_vla: 0});
  }
});
    let url = chrome.runtime.getURL("public/setting.html");
    let tab = await chrome.tabs.create({ url });
  });
chrome.action.onClicked.addListener(async () => {
    let url = chrome.runtime.getURL("public/setting.html");
    let tabcl = await chrome.tabs.create({ url:url });
});
