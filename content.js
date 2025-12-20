/*
2025-09-11 Message for future me

Xitter have slightly changed their crap layout again, and I'm done with maintaining my
MutationObserver solution because it sucks anyway. Observer just can't keep up
with everything that's going on, so we randomly get empty mutations, and some mutations
are skipped whatsoever. I tried to deal with it, waiting a bit with sleep() before processing
each mutation, and it worked reliably enough but obviously led to visible lag, especially when
scrolling very fast or scrolling up.

So this time I wanted to see how far can we go with pure CSS. As of today,
Xitter limits the width of images in single-image posts to 504px,
so we just use all the width there is. As for height, it's controlled by
that padding-bottom: 133.333% node and can't be set correctly any way other than using JS.
That is because the value for padding-bottom is set dynamically by Xitter's main.js
(found by searching "paddingBottom: `", around 90kth line, though I couldn't find the exact
place where it is calculated and capped to 133.333). The logical solution would be to completely
override it, but that's out of scope of a content script. I guess it can be overriden using devtools
local overrides or something like Tapermonkey or Requestly.

For some reason, there is a sibling <div> next to each <img>, with background-image set to the same
url, and it's actually always the <div> that is shown, while <img> has opacity of 0. I kinda remember
noticing this earlier, but didn't pay much attention.

Just for the sake of releasing a new, somewhat working version of TwitterLargeThumbnails, the current solution is:
- for all elements that are limiting width of the image, set their width to 516px
- make <img> visible and leave height as it is, set object-fit: contain, so image is not stretched
- blur the background of sibling <div>
This way, though scaled down a bit, we get to see whole image and to my preference it looks okay.
*/

var isFirefox = typeof InstallTrigger !== "undefined";

const style = document.createElement("style")
if (isFirefox) { // responsive layout works differently in Firefox for whatever reason
    style.innerHTML = `
        div.css-175oi2r div.css-175oi2r div.css-175oi2r.r-16y2uox div.css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj section.css-175oi2r div.css-175oi2r div div.css-175oi2r div.css-175oi2r.r-1igl3o0.r-qklmqi.r-1adg3ll.r-1ny4l3l div.css-175oi2r article.css-175oi2r.r-18u37iz.r-1udh08x.r-kpt88i.r-19m1me0.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 div.css-175oi2r.r-eqz5dr.r-16y2uox.r-1wbh5a2 div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1ny4l3l div.css-175oi2r.r-18u37iz div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-1t982j2 div.css-175oi2r.r-9aw3ui.r-a1ub67 div.css-175oi2r.r-9aw3ui div.css-175oi2r {
            max-width: 504px !important;
        }

        div.css-175oi2r div.css-175oi2r div.css-175oi2r.r-16y2uox div.css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj section.css-175oi2r div.css-175oi2r div div.css-175oi2r div.css-175oi2r.r-1igl3o0.r-qklmqi.r-1adg3ll.r-1ny4l3l div.css-175oi2r article.css-175oi2r.r-18u37iz.r-1udh08x.r-kpt88i.r-19m1me0.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 div.css-175oi2r.r-eqz5dr.r-16y2uox.r-1wbh5a2 div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1ny4l3l div.css-175oi2r.r-18u37iz div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-1t982j2 div.css-175oi2r.r-9aw3ui.r-a1ub67 div.css-175oi2r.r-9aw3ui div.css-175oi2r div.css-175oi2r.r-k200y div.css-175oi2r.r-1kqtdi0.r-1phboty.r-rs99b7.r-1867qdf.r-1udh08x.r-o7ynqc.r-6416eg.r-1ny4l3l div.css-175oi2r div.css-175oi2r.r-16y2uox.r-1pi2tsx.r-13qz1uu a.css-175oi2r.r-1pi2tsx.r-1ny4l3l.r-1loqt21 div.css-175oi2r.r-1adg3ll.r-1udh08x {
            width: 504px !important;
            height: max-content !important;
        }

        div.css-175oi2r div.css-175oi2r.r-16y2uox div.css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj section.css-175oi2r div.css-175oi2r div div.css-175oi2r div.css-175oi2r.r-1igl3o0.r-qklmqi.r-1adg3ll.r-1ny4l3l div.css-175oi2r article.css-175oi2r.r-18u37iz.r-1udh08x.r-kpt88i.r-19m1me0.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 div.css-175oi2r.r-eqz5dr.r-16y2uox.r-1wbh5a2 div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1ny4l3l div.css-175oi2r.r-18u37iz div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-1t982j2 div.css-175oi2r.r-9aw3ui.r-a1ub67 div.css-175oi2r.r-9aw3ui div.css-175oi2r div.css-175oi2r div.css-175oi2r.r-1kqtdi0.r-1phboty.r-rs99b7.r-1867qdf.r-1udh08x.r-o7ynqc.r-6416eg.r-1ny4l3l div.css-175oi2r div.css-175oi2r.r-16y2uox.r-1pi2tsx.r-13qz1uu a.css-175oi2r.r-1pi2tsx.r-1ny4l3l.r-1loqt21 div.css-175oi2r.r-1adg3ll.r-1udh08x div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu div.css-175oi2r.r-1mlwlqe.r-1udh08x.r-417010.r-aqfbo4.r-agouwx.r-1p0dtai.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af img.css-9pa8cd {
            opacity: 1 !important;
            object-fit: contain !important;
        }

        div.css-175oi2r div.css-175oi2r div.css-175oi2r.r-16y2uox div.css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj section.css-175oi2r div.css-175oi2r div div.css-175oi2r div.css-175oi2r.r-1igl3o0.r-qklmqi.r-1adg3ll.r-1ny4l3l div.css-175oi2r article.css-175oi2r.r-18u37iz.r-1udh08x.r-kpt88i.r-19m1me0.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 div.css-175oi2r.r-eqz5dr.r-16y2uox.r-1wbh5a2 div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1ny4l3l div.css-175oi2r.r-18u37iz div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-1t982j2 div.css-175oi2r.r-9aw3ui.r-a1ub67 div.css-175oi2r.r-9aw3ui div.css-175oi2r div.css-175oi2r div.css-175oi2r.r-1kqtdi0.r-1phboty.r-rs99b7.r-1867qdf.r-1udh08x.r-o7ynqc.r-6416eg.r-1ny4l3l div.css-175oi2r div.css-175oi2r.r-16y2uox.r-1pi2tsx.r-13qz1uu a.css-175oi2r.r-1pi2tsx.r-1ny4l3l.r-1loqt21 div.css-175oi2r.r-1adg3ll.r-1udh08x div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu div.css-175oi2r.r-1mlwlqe.r-1udh08x.r-417010.r-aqfbo4.r-agouwx.r-1p0dtai.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af div.css-175oi2r.r-1niwhzg.r-vvn4in.r-u6sd8q.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af.r-13qz1uu.r-1wyyakw.r-4gszlv {
            filter: blur(2em) brightness(0.7) !important;
        }
    `
} else {
    style.innerHTML = `
        div.css-175oi2r.r-18u37iz > div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div.css-175oi2r.r-9aw3ui.r-1s2bzr4 > div.css-175oi2r.r-9aw3ui > div {
            max-width: 516px !important;
        }

        div.css-175oi2r.r-9aw3ui > div.css-175oi2r > div.css-175oi2r.r-k200y > div.css-175oi2r.r-1kqtdi0.r-1phboty.r-rs99b7.r-1867qdf.r-1udh08x.r-o7ynqc.r-6416eg.r-1ny4l3l > div.css-175oi2r > div.css-175oi2r.r-16y2uox.r-1pi2tsx.r-13qz1uu > a.css-175oi2r.r-1pi2tsx.r-1ny4l3l.r-1loqt21 > div {
            width: 516px !important;
            height: max-content !important;
        }

        div.css-175oi2r.r-9aw3ui > div.css-175oi2r > div.css-175oi2r.r-k200y > div.css-175oi2r.r-1kqtdi0.r-1phboty.r-rs99b7.r-1867qdf.r-1udh08x.r-o7ynqc.r-6416eg.r-1ny4l3l > div.css-175oi2r > div.css-175oi2r.r-16y2uox.r-1pi2tsx.r-13qz1uu > a.css-175oi2r.r-1pi2tsx.r-1ny4l3l.r-1loqt21 > div.css-175oi2r.r-1adg3ll.r-1udh08x > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div.css-175oi2r.r-1mlwlqe.r-1udh08x.r-417010.r-aqfbo4.r-agouwx.r-1p0dtai.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af > img {
            opacity: 1 !important;
            object-fit: contain !important;
        }

        div.css-175oi2r.r-9aw3ui > div.css-175oi2r > div.css-175oi2r.r-k200y > div.css-175oi2r.r-1kqtdi0.r-1phboty.r-rs99b7.r-1867qdf.r-1udh08x.r-o7ynqc.r-6416eg.r-1ny4l3l > div.css-175oi2r > div.css-175oi2r.r-16y2uox.r-1pi2tsx.r-13qz1uu > a.css-175oi2r.r-1pi2tsx.r-1ny4l3l.r-1loqt21 > div.css-175oi2r.r-1adg3ll.r-1udh08x > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div.css-175oi2r.r-1mlwlqe.r-1udh08x.r-417010.r-aqfbo4.r-agouwx.r-1p0dtai.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af > div {
            filter: blur(2em) brightness(0.7) !important;
        }
    `
}
document.head.appendChild(style)
