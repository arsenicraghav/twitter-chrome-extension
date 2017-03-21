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
            chrome.tabs.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText)});
            break;
        case 'link':
            chrome.tabs.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl)});
            break;
        case 'image':
            chrome.tabs.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl)});
            break;
        case 'page':
            chrome.tabs.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)});
            break;
    }
}