chrome.contextMenus.create({
    title: "Tweet it!",
    contexts:["selection"],
    onclick: tweetMe
});

function tweetMe(){
    alert('you tweeted me!');
}