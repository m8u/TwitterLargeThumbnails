// check NOTES.md

var isFirefox = typeof InstallTrigger !== "undefined";

const style = document.createElement("style")
style.id = "twitter-large-thumbnails"
if (isFirefox) { // responsive layout works differently in Firefox for whatever reason
    style.innerHTML = `
        div.css-175oi2r.r-9aw3ui.r-a1ub67 > div > div > div {
            max-width: 504px !important;
        }

        div.css-175oi2r.r-9aw3ui.r-a1ub67 > div > div > div > div > div > div > a > div {
            width: 504px !important;
            height: max-content !important;
        }

        div.css-175oi2r.r-9aw3ui.r-a1ub67 > div > div > div > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img {
        opacity: 1 !important;
        object-fit: contain !important;
        }

        div.css-175oi2r.r-9aw3ui.r-a1ub67 > div > div > div > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div {
            filter: blur(2em) brightness(0.7) !important;
        }

        /* hide grok image editing button lol */
        div.css-175oi2r.r-9aw3ui.r-a1ub67 > div > div > div > div > div.css-175oi2r.r-1o9r03r.r-p8ej7j.r-u8s1d.r-c97pre {
            visibility: hidden;
        }
    `
} else {
    style.innerHTML = `
        div.css-175oi2r.r-9aw3ui.r-1s2bzr4 > div > div > div {
            max-width: 504px !important;
        }

        div.css-175oi2r.r-9aw3ui.r-1s2bzr4 > div > div > div > div > div > div > a > div {
            width: 504px !important;
            height: max-content !important;
        }

        div.css-175oi2r.r-9aw3ui.r-1s2bzr4 > div > div > div > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img {
            opacity: 1 !important;
            object-fit: contain !important;
        }

        div.css-175oi2r.r-9aw3ui.r-1s2bzr4 > div > div > div > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div {
            filter: blur(2em) brightness(0.7) !important;
        }

        /* hide grok image editing button */
        div.css-175oi2r.r-9aw3ui.r-1s2bzr4 > div > div > div > div > div.css-175oi2r.r-rki7wi.r-1ba6zt5.r-u8s1d.r-c97pre {
            visibility: hidden;
        }
    `
}
document.head.appendChild(style)
