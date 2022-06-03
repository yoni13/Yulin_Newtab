// name_vla = 0; default
// name_vla = 1 only change blue
// name_vla = 2 only change red
// name_vla = 3 change both




chrome.runtime.onInstalled.addListener(async () => {
  chrome.storage.sync.get("name_vla", function(items) {
      console.log(items.name_vla);
      if (items.name_vla == undefined) {
        chrome.storage.sync.set({name_vla: 0});
      }
  });
    let url = chrome.runtime.getURL("public/setting.html");
    let tab = await chrome.tabs.create({ url });
  });
