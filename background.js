// let color = "#3aa757";
// let yspeed = parseFloat(1).toFixed(2);

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set({ hide: true }, function () {

//         console.log("######  hide:");
//     });
//     chrome.storage.sync.set({ "color": color }, function () {
//         console.log("######  color:" + color);
//     });
//     chrome.storage.sync.set({ "yspeed": yspeed }, function () {
//         console.log("##### yspeed:" + yspeed);
//     });
//     console.log(`Default color changes to %c green color::${color} speed is ${yspeed}`);
// });

// chrome.declarativeContent.onPageChanged.removeRules(undefined,function(){
//     chrome.declarativeContent.onPageChanged.addRules({
// conditions
//     });
// });

chrome.browserAction.onClicked.addListener(function(tab){
chrome.tabs.executeScript(tab.id,{
file:'inject.js'
});
});