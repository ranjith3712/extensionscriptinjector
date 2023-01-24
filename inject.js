(function () {
    document.querySelectorAll('.uqexcls').forEach(e => {
        e.remove();
        console.log("--- pre rem ----");
    });
    var scr = document.createElement('script');
    scr.className = "uqexcls";
    // scr.type="text/javascript";
    scr.async = true;
    scr.innerHTML = "" + (
        window.onkeyup = function (e) {
            var isCtrlPressed = e.ctrlKey;
            var isAltPressed = e.altKey;
            if (isCtrlPressed || isAltPressed) {
                // yts = isNaN(yts) ? parseFloat(yts).toFixed(2) : 1;
                let yts = parseFloat(localStorage.hasOwnProperty("yts") ? localStorage.getItem("yts") : 1).toFixed(2);
                console.log("----- start yts is::" + yts + " isNaN::" + (isNaN(yts)) + "  type is::" + (typeof yts) + "  " + localStorage.hasOwnProperty("yts"));
                let pyts = yts;
                let kc = e.keyCode;
                if (kc === 188 || kc === 190 || kc === 191) {
                    if (kc === 188 && yts > 0) {
                        yts -= 0.05;
                    } else if (kc === 190 && yts < 5) {
                        yts = parseFloat(yts) + 0.05;
                    }
                    else if (kc === 191) {
                        yts = 1;
                    }

                    try {
                        document.getElementsByTagName('video')[0].playbackRate = yts;
                        localStorage.setItem("yts", parseFloat(yts).toFixed(2));
                        console.log("----- yts is ::" + yts + " and pyts::" + pyts);
                    } catch (ex) {
                        localStorage.setItem("yts", parseFloat(pyts).toFixed(2));
                        console.log("=== custome exception::"+yts+"  "+pyts+" "+ ex);
                    }
                }
            }
        });
    document.head.appendChild(scr);
    alert('inserted script via cus extension');

})();

