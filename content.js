function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function process(mutation) {
    if (!mutation.addedNodes) {
        return;
    }

    const image = mutation.addedNodes[0];
    if (!image) {
        return;
    }
    try {
        if (image.className !== "css-9pa8cd" || !(image.getAttribute("src").includes("/media/"))) {
            return;
        }
    } catch (e) {
        console.log(e)
        return;
    }

    if (image.naturalWidth === 0) {
        setTimeout(() => {
            process(mutation);
        }, 1000);
        return;
    }

    const marginsNode = image
        .parentNode
        .parentNode
        .firstChild;
    marginsNode.style.marginTop = "0";
    marginsNode.style.marginBottom = "0";
    marginsNode.style.marginLeft = "0";
    marginsNode.style.marginRight = "0";

    const thatNode = image.parentNode
        .parentNode
        .parentNode
        .firstChild;
    const thatAnotherNode = image.parentNode
        .parentNode
        .parentNode;

    try {
        if (thatAnotherNode.style.height === "510px") {
            thatAnotherNode.style.height = (504 * (image.naturalHeight / image.naturalWidth)) + "px";
            thatAnotherNode.style.width = "504px";
        }
        if (thatNode.style.paddingBottom === "133.333%") {
            const intrinsicRatio = image.naturalHeight / image.naturalWidth;
            thatNode.style.paddingBottom = (504 * intrinsicRatio) + "px";
        }
    } catch (e) {
        console.log(e);
    }
}

const observer = new MutationObserver(async function (mutations) {
    if (
        window.location.pathname.startsWith("/compose/tweet")
        || window.location.pathname.startsWith("/messages")
    )
        return;

    await sleep(500);

    for (const mutation of mutations) {
        process(mutation);
    }
})

observer.observe(document.body, {
    childList: true,
    subtree: true
})
