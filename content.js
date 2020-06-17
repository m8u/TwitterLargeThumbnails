function getAllElementsWithAttribute(attribute) {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute) !== null)
        {
            matchingElements.push(allElements[i]);
        }
    }
    return matchingElements;
}

var style = document.getElementsByTagName("style")[0];
style.innerHTML += "@keyframes paddingBottomToHundred { from { padding-bottom: 56.25%; } to { padding-bottom: 100%; } }"

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
	    if (!mutation.addedNodes) return

	    var elementsWithSrc = getAllElementsWithAttribute("src");
		for (var i = 0; i<elementsWithSrc.length; i++) {
			if (elementsWithSrc[i].src.includes("/media/") 
				&& elementsWithSrc[i].getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop)
												> (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientHeight/2) {

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
				var newPadding = 507 / imgSizeRatio;

				if (thatNode.getAttribute("style") == "padding-bottom: 56.25%;") {
					thatNode.setAttribute("style", "padding-bottom: "+newPadding+"px; animation: paddingBottomToHundred; animation-duration: .3s;");
				}
			}
		}
    })
})

observer.observe(document.body, {
    childList: true
    , subtree: true
    , attributes: false
    , characterData: false
})
