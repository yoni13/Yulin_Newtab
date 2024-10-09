let searchbar= document.getElementById("searchbar");

searchbar.onkeyup = function (e) {
    if (e.key === 'Enter') {
    event.preventDefault();

    chrome.storage.sync.get("searchkey", function(items) {
        console.log(items.searchkey);
        var searchkey = items.searchkey;
        location.href = searchkey + searchbar.value;
    }
    );
}
}