var contextsList = ["selection", "link", "image", "page"];

for(var i=0; i<contextsList.length; i++){
    var currContext = contextsList[i]
    var contextMenuOption = "Share this " + currContext + " on your twitter profile!";
    chrome.contextMenus.create({
        title: contextMenuOption,
        contexts:[currContext],
        onclick: tweetHandler,
        id : currContext
    });
}

function tweetHandler(data,tab){
    switch(data.menuItemId){
        case 'selection':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText), type: "panel" });
            break;
        case 'link':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl), type: "panel" });
            break;
        case 'image':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl), type: "panel" });
            break;
        case 'page':
            chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title), type: "panel" });
            break;
    }
}