var addListener = function () {
    alert("insice add listener function");
    $("#change").html("KOKO added listener");
}

    $("#change").html("KOKO added");
var removeListener = function () {
    $("#change").html("KOKO removed listener");
    alert("insice remove listener function");
}


chrome.runtime.onMessage.addListener(function (req, sender, sendRes) {
    if (req.command == "init") {
        alert("listener init");
        addListener();
    } else {
        alert("listener remove");
        removeListener();
    }
    sendRes({ res: "success KOKOKO...................." });
});

window.onload = function () {
    chrome.storage.sync.get("hide", function (data) {
        console.log("========================================================");
        console.log(data);
        console.log($("html"));
        console.log("========================================================");
        if (data.hide) {
            addListener();
        }
        else {
            removeListener();
        }
    });
}