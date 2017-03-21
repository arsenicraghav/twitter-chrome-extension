var contextsList = ["selection", "link", "image", "page"];
var _API_URL = "https://twitter.com/intent/tweet"

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
            query_param = "?text="+encodeURIComponent(data.selectionText);
            openSharingPopup(query_param);
            break;
        case 'link':
            query_param = "?url="+encodeURIComponent(data.linkUrl);
            openSharingPopup(query_param);
            break;
        case 'image':
            query_param = "?url="+encodeURIComponent(data.srcUrl);
            openSharingPopup(query_param);
            break;
        case 'page':
            query_param = "?text="+encodeURIComponent(tab.title)+"&url="+(data.pageUrl);
            openSharingPopup(query_param);
            break;
    }
}

function openSharingPopup(query_param){
    chrome.windows.create({url: _API_URL + query_param, type: "panel" });
}