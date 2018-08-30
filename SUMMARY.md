#SUMMARY
I didn't use any external resources or third-party libraries. Just vanilla HTML, CSS, and JS. I try to keep my code as logical and DRY (don’t repeat yourself) as possible.

My approach for the deliverables was to keep them as lightweight as possible while sticking to the provided rules. This hypothetical navigation would persist on every page, so the smaller it is the faster the page loads. The markup is fairly standard, just a typical unordered list of links. Everything is wrapped in the `<nav>` element for semantics. 

The icons are inlined SVG due to the fact that they needed to change color on hover and when that tab is active. There are only six of them and they are relatively simple, so it doesn’t hurt load time noticeably. There is definitely a better solution, but for the purpose of this exercise it is sufficient.

Additionally, you will notice that I removed the “hrefs” from the anchors. Admittedly, I could have used any element instead, but I stuck with anchor because it is semantically correct and they have the proper “tabindex” baked in. Users can tab through the navigation properly.

For styling, I just tried to mimic the demo GIF as closely as possible. Nothing fancy there either. I did apply labels to the tabs via CSS to cut down even more on markup; instead of having to hide an entire element at the mobile breakpoint, I simply empty the "content" attribute and keep all markup relevant. To cover accessibility (since screen readers cannot read the labels via the CSS), I made sure to include an "aria-label" on each tab.

Scripting this was fairly straightforward as well: I prioritized readability and simplicity. Again, no jQuery. When a user clicks or taps a tab, it is highlighted and the URL updates accordingly. However, I treated the “Now” tab as “Home”, so upon clicking or tapping “Now” it simply removes the URL parameters. Users can also navigate to tabs via changing the URL. For example, http://127.0.0.1:8080/?tab=settings highlights the settings tab. Users can still navigate to the “Now” tab in this fashion, but clicking on “Now” will still clear parameters from the URL. I commented the code thoroughly to walk you through line by line.

I built everything in Chrome and cross-tested on Firefox, Safari, and Opera. I do not have access to a machine with Internet Explorer at this time, but there’s nothing that will break IE in this exercise. Some new features of ES6 such as arrow functions and template literals will not work in IE, but I refactored those statements and made everything compatible. 

How could it be better? There is no fallback condition if a user types in a bad URL to navigate to a tab. If no match is found, no tab is highlighted. This behavior is expected, but it is not a “graceful” fail. Also, on Firefox the labels aren’t exactly centered under their icon, they are 1 or 2 pixels off to the right. This is not expected behavior, but it seemed moot for the purposes of this exercise. If this were live, I would absolutely align everything to a pixel-perfect grid.

The biggest challenge I encountered during this exercise was manipulating the browser history states, simply because I have never worked with those methods before. It was simple enough to figure out. 

#Other notes
(very minor, but included for the sake of being thorough):

- index.html was missing a `<meta charset>`
- feedback.svg has some extra XML that can be deleted
- I added a favicon to make it look more real
