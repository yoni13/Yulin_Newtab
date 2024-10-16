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
let weatherta = document.getElementById("weathertab");
let goviewco= document.getElementById("goviewcolor");
let sdefaultcol = document.getElementById("sdefaultcolor");
let saveco = document.getElementById("savecolor");
let middle = document.getElementById("middle");
let weather = document.getElementById("weatherinput");
let weatherbtn = document.getElementById("weatherbtn");
let ente2 = document.getElementById("prenter2");
let ente3 = document.getElementById("prenter3");
let showprovide = document.getElementById("showprovider");
let search = document.getElementById("searchtab");
let searchinput = document.getElementById("searchinput");
ente3.innerHTML = chrome.i18n.getMessage('ente');
search.innerHTML = chrome.i18n.getMessage('searchtab');
weatherbtn.innerHTML = chrome.i18n.getMessage('weatherbtn');
nameta.innerHTML = chrome.i18n.getMessage('nametab');
colorta.innerHTML = chrome.i18n.getMessage('colortab');
weatherta.innerHTML = chrome.i18n.getMessage('weathertab');
titlew.innerHTML = chrome.i18n.getMessage("setting");
htmltitle.innerHTML = chrome.i18n.getMessage('setting');
ifud.innerHTML = chrome.i18n.getMessage('ifud');
ente.innerHTML = chrome.i18n.getMessage('ente');
inputblue.placeholder = chrome.i18n.getMessage('inputblue');
inputred.placeholder = chrome.i18n.getMessage('inputred');
weather.placeholder = chrome.i18n.getMessage('location');
defaultbtn.innerHTML = chrome.i18n.getMessage('defaultbtn');
viewbtn.innerHTML = chrome.i18n.getMessage('viewbtn');
goviewco.innerHTML = chrome.i18n.getMessage('goviewbtn');
sdefaultcol.innerHTML = chrome.i18n.getMessage('sdefaultcol');
saveco.innerHTML = chrome.i18n.getMessage('saveco');
middle.placeholder = chrome.i18n.getMessage('middle');
middle.value = chrome.i18n.getMessage('love');
ente2.innerHTML = chrome.i18n.getMessage('ente');
showprovide.innerHTML = chrome.i18n.getMessage('showprovider');
if (window.location.href.endsWith("?name")) {
    openCity(event,'name')
}
if (window.location.href.endsWith("?color")) {
    openCity(event,'color')
}
if (window.location.href.endsWith("?weather")) {
    openCity(event,'weather')
}
if (window.location.href.endsWith("?search")) {
    openCity(event,'search')
}

function reloadurl(hashtag) {
    var target = chrome.runtime.getURL("public/setting.html") + hashtag;
    location.href = target;
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
    var yellowcolor = document.getElementById("yellowc").value;
    chrome.storage.sync.set({color_vla:1}, function() {});
    chrome.storage.sync.set({color_bluehex:bluecolor}, function() {});
    chrome.storage.sync.set({color_yellowhex:yellowcolor}, function() {});
    chrome.storage.sync.set({color_redhex:redcolor}, function() {});
    alert(chrome.i18n.getMessage('savecook'));
    reloadurl('?color');
}
viewbtn.onclick = function(){
    chrome.tabs.create({url: chrome.runtime.getURL("public/index.html")});
}
goviewco.onclick = function(){
    chrome.tabs.create({url: chrome.runtime.getURL("public/index.html")});
}
sdefaultcol.onclick = function(){
    chrome.storage.sync.set({color_vla:0}, function() {});
    alert(chrome.i18n.getMessage('savecodefault'));
    reloadurl('?color');
}
defaultbtn.onclick = function(){
    chrome.storage.sync.set({love_vla:0}, function() {});
    chrome.storage.sync.set({name_vla:0}, function() {});
    alert(chrome.i18n.getMessage('savecodefault'));
    reloadurl('?name');
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
        alert(chrome.i18n.getMessage('bluenamesaved'));  
        reloadurl('?name');
        
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
        alert(chrome.i18n.getMessage('rednamesaved'));
        reloadurl('?name');
      });
};
};
}
);

middle.onkeyup = function (e) {
    if (e.key === 'Enter') {


    if (middle.value != "") {
    event.preventDefault();
    chrome.storage.sync.set({middlekey: middle.value}, function() {
        console.log('Value is set to ' + middle.value);
        middle.value = "";
        alert(chrome.i18n.getMessage('middlenamesaved'));
        reloadurl('?name');
      });
      chrome.storage.sync.set({love_vla: 1}, function() {})
    }
};
};

weather.onkeyup = function (e) {
    if (e.key === 'Enter') {
    event.preventDefault();
    var inputweather = weather.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputweather}&appid=1dfbbb073a087c7dd3a5f086202ba946&units=metric`).then(function(response) {
    if (response.status != 200) {
        alert(chrome.i18n.getMessage('weathererror'));
    }
    else{
    chrome.storage.sync.set({weather_city: inputweather}, function() {
        chrome.storage.sync.set({weather_vla: 1}, function() {})
        console.log('Value is set to ' + inputweather);
        weather.value = "";
        alert(chrome.i18n.getMessage('weathersaved'));
        reloadurl('?weather');
      });
    }
})
    }
 }


weatherbtn.onclick = function(){
    chrome.storage.sync.set({weather_vla: 0}, function() {})
    alert(chrome.i18n.getMessage('weatherdeleted'));
}

searchinput.onkeyup = function (e) {
    if (e.key === 'Enter') {
    event.preventDefault();
    chrome.storage.sync.set({searchkey: searchinput.value}, function() {
        console.log('Value is set to ' + searchinput.value);
        searchinput.value = "";
        alert(chrome.i18n.getMessage('searchsaved'));
        reloadurl('?search');
      });
};
}

document.getElementsByClassName("version")[0].innerHTML = chrome.i18n.getMessage('version') + chrome.runtime.getManifest().version;