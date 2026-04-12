// check NOTES.md

var isFirefox = typeof InstallTrigger !== "undefined";

const style = document.createElement("style")
style.id = "twitter-large-thumbnails"
if (isFirefox) { // responsive layout works differently in Firefox for whatever reason
    style.innerHTML = `
        #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > section > div > div > div > div > div > article > div > div > div.css-175oi2r.r-18u37iz.r-136ojw6 > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-1t982j2 > div.css-175oi2r.r-9aw3ui.r-a1ub67 > div > div > div {
            max-width: 504px !important;
        }

        #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > section > div > div > div > div > div > article > div > div > div.css-175oi2r.r-18u37iz.r-136ojw6 > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-1t982j2 > div.css-175oi2r.r-9aw3ui.r-a1ub67 > div > div > div > div > div > div > a > div {
            width: 504px !important;
            height: max-content !important;
        }

        #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > section > div > div > div > div > div > article > div > div > div.css-175oi2r.r-18u37iz.r-136ojw6 > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-1t982j2 > div.css-175oi2r.r-9aw3ui.r-a1ub67 > div > div > div > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img {
        opacity: 1 !important;
        object-fit: contain !important;
        }

        #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > section > div > div > div > div > div > article > div > div > div.css-175oi2r.r-18u37iz.r-136ojw6 > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-1t982j2 > div.css-175oi2r.r-9aw3ui.r-a1ub67 > div > div > div > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div {
            filter: blur(2em) brightness(0.7) !important;
        }
    `
} else {
    style.innerHTML = `
        #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > section > div > div > div > div > div > article > div > div > div.css-175oi2r.r-18u37iz.r-136ojw6 > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div.css-175oi2r.r-9aw3ui.r-1s2bzr4 > div > div > div {
            max-width: 504px !important;
        }

        #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > section > div > div > div > div > div > article > div > div > div.css-175oi2r.r-18u37iz.r-136ojw6 > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div.css-175oi2r.r-9aw3ui.r-1s2bzr4 > div > div > div > div > div > div > a > div {
            width: 504px !important;
            height: max-content !important;
        }

        #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > section > div > div > div > div > div > article > div > div > div.css-175oi2r.r-18u37iz.r-136ojw6 > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div.css-175oi2r.r-9aw3ui.r-1s2bzr4 > div > div > div > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img {
            opacity: 1 !important;
            object-fit: contain !important;
        }

        #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > section > div > div > div > div > div > article > div > div > div.css-175oi2r.r-18u37iz.r-136ojw6 > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div.css-175oi2r.r-9aw3ui.r-1s2bzr4 > div > div > div > div > div > div > a > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div {
            filter: blur(2em) brightness(0.7) !important;
        }
    `
}
document.head.appendChild(style)
