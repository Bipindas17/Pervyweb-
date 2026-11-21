PERVYWEB — IDIOT ♡ PREKSHUUUUU
================================

FILES
-----
index.html   Main website structure
style.css    Dreamy pink design and responsive layout
script.js    Interactions, relationship timer and YouTube music

HOW TO OPEN ON YOUR PHONE
-------------------------
1. Create a folder named: pervyweb
2. Put index.html, style.css and script.js inside it.
3. Open index.html in your phone browser or local HTML editor preview.
4. Internet is needed for Google Fonts and YouTube music.

HOW TO ADD YOUR PHOTOS
----------------------
1. Create a folder inside pervyweb named: assets
2. Copy your photos into it, for example:
   assets/photo1.jpg
   assets/photo2.jpg
   assets/photo3.jpg
3. Open index.html and find the three blocks containing:
   <div class="photo-placeholder">
4. Replace each placeholder div with an image, for example:
   <img class="gallery-photo" src="assets/photo1.jpg" alt="Bipin and Prekshya">
5. Add this CSS rule to the bottom of style.css:
   .gallery-photo { width:100%; height:245px; object-fit:cover; display:block; }

YOUTUBE MUSIC
--------------
The website uses your YouTube video ID: LUgpPmj6nR8.
Music starts after the visitor taps "Open my surprise", because mobile
browsers generally block autoplay with sound before a user gesture.
Some YouTube videos do not allow embedding. If this video blocks embedding,
open the video on YouTube and check whether embedding is enabled.

RELATIONSHIP DATE
-----------------
The counter is set to July 22, 2026.
To change it, edit RELATIONSHIP_START near the top of script.js.

PUBLISH ON VERCEL FROM ANDROID
------------------------------
1. Sign in to GitHub and create a new repository named pervyweb.
2. Upload index.html, style.css, script.js and the assets folder (if you add photos).
3. Sign in to Vercel using GitHub.
4. Choose Add New -> Project and import the pervyweb repository.
5. Keep Framework Preset as Other. No build command and no output directory are needed.
6. Deploy. Vercel will give you a website link.

PRIVACY NOTE
------------
This is a static website. Do not put passwords, private chat screenshots,
or intimate photos/details in it if it is publicly accessible. A password
screen made only with front-end JavaScript is not real security. Share
personal photos only when both people are comfortable with that.
\n\nPHOTO ADDED:\n- assets/photo1.jpg is the cute selfie supplied for the first gallery card.\n- Add more photos to assets and update the matching img src in index.html.\n

PHOTOS CURRENTLY INCLUDED
-------------------------
- assets/photo1.jpg — playful flower-sticker selfie.
- assets/photo2.jpg — affectionate neck-kiss photo, included with both partners’ consent.
The third gallery card remains a placeholder for a future memory.
