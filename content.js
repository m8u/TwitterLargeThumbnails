function getAllElementsWithAttribute(attribute) {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute) !== null) {
            matchingElements.push(allElements[i]);
        }
    }
    return matchingElements;
}

// var style = document.getElementsByTagName("style")[0];
// style.innerHTML += "@keyframes paddingBottomToHundred { from { padding-bottom: 56.25%; } to { padding-bottom: 100%; } }"

let classNamesBlacklist = ["css-1dbjc4n r-13awgt0",
                        "css-9pa8cd",
                        "css-1dbjc4n r-1d2f490 r-105ug2t r-u8s1d r-zchlnj r-ipm5af",
                        "css-1dbjc4n r-12vffkv",
                        "css-18t94o4 css-1dbjc4n r-1niwhzg r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-crgep1 r-1vuscfd r-53xb7h r-1ny4l3l r-mk0yit r-o7ynqc r-6416eg r-lrvibr",
                        "css-901oao css-16my406 r-1qd0xha r-n6v787 r-1sf4r6n r-1j6idkz r-utggzx r-u8s1d r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0",
                        "css-18t94o4 css-1dbjc4n r-1niwhzg r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1vuscfd r-53xb7h r-1ny4l3l r-mk0yit r-o7ynqc r-6416eg r-lrvibr",
                        "r-8akbif r-orgf3d r-1udh08x r-u8s1d r-xjis5s r-1wyyakw",
                        "css-1dbjc4n r-1pz39u2 r-16y2uox r-1wbh5a2"]

var observer = new MutationObserver(async function(mutations) {
    if (window.location.href == "https://twitter.com/compose/tweet"
    || window.location.href.includes("https://twitter.com/messages"))
        return;

    for (const mutation of mutations) {
        if (!mutation.addedNodes) continue;
        try {
            if (classNamesBlacklist.includes(mutation.addedNodes[0].className)) continue;
        } catch (e) {
            continue;
        }

        var elementsWithSrc = getAllElementsWithAttribute("src");
        for (var i = 0; i < elementsWithSrc.length; i++) {
            if (elementsWithSrc[i].src.includes("/media/")) {
                //&& elementsWithSrc[i].getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop)
                //                                > (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientHeight/2) {

                if (elementsWithSrc[i].naturalWidth == 0) continue;

                var marginsNode = elementsWithSrc[i].parentNode
                                                .parentNode
                                                .firstChild;
                marginsNode.setAttribute("style", "margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0;");


                var thatNode = elementsWithSrc[i].parentNode
                                            .parentNode
                                            .parentNode
                                            .firstChild;

                //console.log(elementsWithSrc[i].src+"   "+elementsWithSrc[i].naturalWidth+"x"+elementsWithSrc[i].naturalHeight);
                var imgSizeRatio = elementsWithSrc[i].naturalWidth / elementsWithSrc[i].naturalHeight;
                var newPadding = thatNode.getBoundingClientRect().width / imgSizeRatio;

                if (thatNode.getAttribute("style") == "padding-bottom: 56.25%;") {
                    thatNode.setAttribute("style", "padding-bottom: "+newPadding+"px");// animation: paddingBottomToHundred; animation-duration: .3s;");
                }
            }
        }
    }
})

observer.observe(document.body, {
    childList: true, 
    subtree: true, 
    attributes: false, 
    characterData: false
})
