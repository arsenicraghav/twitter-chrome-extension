var contextsList = ["selection", "link", "image", "page"];

for(var i=0; i<contextsList.length; i++){
    var currContext = contextsList[i]
    var contextMenuOption = "Share this " + currContext + " on your twitter profile!";
    chrome.contextMenus.create({
        title: contextMenuOption,
        contexts:[currContext],
        onclick: tweetMe,
        id : currContext
    });
}

function tweetMe(data){
    switch(data.menuItemId){
        case 'selection':
            chrome.tabs.create({url:"https://twitter.com/intent/tweet?text="+data.selectionText});
            break;
        case 'link':
            chrome.tabs.create({url:"https://twitter.com/intent/tweet?url="+data.linkUrl});
            break;
        case 'image':
            chrome.tabs.create({url:"https://twitter.com/intent/tweet?url="+data.srcUrl});
            break;
        case 'page':
            chrome.tabs.create({url:"https://twitter.com/intent/tweet?text=hardcoded_for_now"});
            break;
    }
}