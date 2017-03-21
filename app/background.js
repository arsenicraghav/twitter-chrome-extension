chrome.contextMenus.create({
    title: "Tweet it!",
    contexts:["selection"],
    onclick: tweetMe
});

function tweetMe(selectedText){
    chrome.tabs.create({url:"https://twitter.com/intent/tweet?text="+selectedText.selectionText});
}