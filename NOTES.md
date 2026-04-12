# 2025-09-11 Message for future me

Xitter have slightly changed their crap layout again, and I'm done with maintaining my
MutationObserver solution because it sucks anyway. Observer just can't keep up
with everything that's going on, so we randomly get empty mutations, and some mutations
are skipped whatsoever. I tried to deal with it, waiting a bit with sleep() before processing
each mutation, and it worked reliably enough but obviously led to visible lag, especially when
scrolling very fast or scrolling up.

So this time I wanted to see how far can we go with pure CSS. As of today,
Xitter limits the width of images in single-image posts to 504px,
so we just use all the width there is. As for height, it's controlled by
that `padding-bottom: 133.333%` node and can't be set correctly any way other than using JS.
That is because the value for padding-bottom is set dynamically by Xitter's main.js
(found by searching "paddingBottom: `", around 90kth line, though I couldn't find the exact
place where it is calculated and capped to 133.333%). The logical solution would be to completely
override it, but that's out of scope of a content script. I guess it can be overriden using devtools
local overrides or something like Tapermonkey or Requestly.

For some reason, there is a sibling `<div>` next to each `<img>`, with background-image set to the same
url, and it's actually always the `<div>` that is shown, while `<img>` has opacity of 0. I kinda remember
noticing this earlier, but didn't pay much attention.

Just for the sake of releasing a new, somewhat working version of TwitterLargeThumbnails, the current solution is:
- for all elements that are limiting width of the image, set their width to 516px
- make `<img>` visible and leave height as it is, set `object-fit: contain`, so image is not stretched
- blur the background of sibling `<div>`
This way, though scaled down a bit, we get to see whole image and to my preference it looks okay.


# 2026-04-10 there we go again

- to get a full selector starting from `#react-root`, delete ids of ancestors up to `#react-root`
- to acquire sane selectors for firefox, copy the whole `#react-root`, save it as html file, and open via chromium
No more blurred background for long images I guess, since xitter doesn't clamp that padding-bottom to 133.333% anymore,
so they now can easily exceed display height, which is fine by me. But I'll leave the blur just in case.

I have saved html for both chromium and firefox to 'html-snapshots' dir.

In theory, these updates can be automated, say, we could run a daily job that would scrap a specific post's html
and check diff between yesterdays and todays html, and if there's a difference, then get new selectors and
notify me via a chatbot so I can test it and rollout a new release. I believe this can be done with Selenium, to some extent at least.
