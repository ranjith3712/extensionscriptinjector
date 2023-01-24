let changeColor = document.getElementById("changeColor");
let copt = document.getElementById("copt");
// chrome.storage.sync.get("color", ({ color }) => {
//     changeColor.style.backgroundColor = color;
// });
// chrome.storage.sync.get("hide", function (data) {
//     copt.checked = data.hide;
// });

// chrome.storage.sync.get("color", function (data) {
//     console.log(data);
//     console.log("popup js color:" + data.color);
// });

// chrome.storage.sync.get("yspeed", function (data) {
//     console.log("popup js yspeed:" + data.yspeed);
// });

copt.onchange = function (e) {
    let value = this.checked;

    chrome.storage.sync.set({ "hide": value }, function () {
        console.log("updated hide value is " + value);
    });

    if (value) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { command: "init", hide: value }, function (res) {
                console.log(res);
            });
        });
    }
    else{

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { command: "remove", hide: value }, function (res) {
                console.log(res);
            });
        });
    }
}

changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor()
    });
});

function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        console.log(document.body);
        document.body.style.backgroundColor = color;
    });
}