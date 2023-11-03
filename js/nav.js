code stitch logo
magnifying glass
Search for projects or keywords
Alex Webb
arrow down
Profile
Settings
Pricing
Payment Info
Tutorials
Documentation
Logout
Code Stitch
My Stitches
star icon Try Pro
Dashboard
Saved Stitches
STITCH CATALOG
E-Commercecarrot icon
All
(0)
Collections
(0)
Featured Products
(0)
Hero
(0)
Pop Up Modals
(0)
Promotional CTA
(0)
Store Products
(0)
Buttonscarrot icon
All
(10)
Non Standard
(1)
Squared
(9)
Navigationcarrot icon
All
(24)
+ Dropdown
(6)
+ Top Bar
(6)
Standard
(6)
Top Bar + Dropdown
(6)
Hero Sectioncarrot icon
All
(69)
Centered
(9)
Landing + Services
(22)
Left Aligned
(26)
Right Aligned
(12)
Servicescarrot icon
All
(147)
3 Card
(40)
4 Card
(41)
5 Card
(1)
6 Card
(30)
8 Card
(5)
Combo
(4)
Side By Side
(26)
Content Flaircarrot icon
All
(31)
Button Boxes
(4)
Content Groups
(4)
Lists
(16)
Quotes
(2)
Stats
(3)
Toppers
(2)
Side By Sidecarrot icon
All
(271)
Non Standard
(7)
Reverse
(76)
Reverse Pair
(59)
Reverse Triplet
(53)
Standard
(76)
Gallerycarrot icon
All
(34)
5 Images
(1)
6 Images
(9)
8 Images
(5)
Full Width
(3)
Mosaic
(9)
Multi Gallery
(7)
Meet Our Teamcarrot icon
All
(54)
2 Card
(3)
3 Card
(19)
4 Card
(21)
5 Card
(1)
6 Card
(7)
8 Card
(2)
Combo
(1)
Stepscarrot icon
All
(16)
3 Steps
(4)
4 Steps
(11)
5 Steps
(1)
Statscarrot icon
All
(38)
3 Stats
(8)
4 Stats
(25)
Combos
(2)
Timeline
(3)
Pricingcarrot icon
All
(42)
2 Card
(5)
3 Card
(13)
Menu's
(15)
w/ Toggles
(9)
FAQcarrot icon
All
(35)
Multi FAQ's
(1)
Side By Side
(25)
Standard
(9)
Why Choose Uscarrot icon
All
(34)
3 Card
(7)
4 Card
(8)
6 Card
(1)
Side By Side
(18)
Quotescarrot icon
All
(3)
Single Quotes
(3)
MISCcarrot icon
All
(9)
Content
(1)
Logos
(3)
Maps
(1)
Video
(4)
Reviewscarrot icon
All
(72)
2 Card
(22)
3 Card
(20)
4 Card
(2)
Full Width
(3)
Single Review
(25)
Forms & Contactcarrot icon
All
(54)
Contact Forms
(42)
Contact Info
(4)
Subscribe
(8)
Eventscarrot icon
All
(9)
3 Card
(4)
4 Card
(3)
Side By Side
(2)
Blogcarrot icon
All
(15)
Recent Posts
(15)
Eventscarrot icon
All
(4)
3 Card
(3)
4 Card
(1)
Call To Actioncarrot icon
All
(18)
Combos
(1)
Contained
(3)
Full Width
(12)
Subscribe Forms
(2)
Footercarrot icon
All
(41)
2 Column
(2)
3 Column
(7)
4 Column
(13)
5 Column
(6)
Combo
(1)
Simple
(12)
Dark Modecarrot icon
All
(2)
Standard
(2)
Interior Pagescarrot icon
All
(37)
About Page
(4)
Contact Page
(3)
Content Page
(18)
Menus
(2)
Page Banners
(10)
Standard
ico-code
HTML
ico-code
JS
ico-code
CSS
ico-code
Core Styles
Choose your preferred CSS
 CSS Dark  LESS Dark  SCSS Dark
- Dark Mode
copy
Copy to Clipboard
// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
​
CShamburgerMenu.addEventListener('click', function () {
    CShamburgerMenu.classList.toggle('cs-active');
    CSnavbarMenu.classList.toggle('cs-active');
    CSbody.classList.toggle('cs-open');
    // run the function to check the aria-expanded value
    ariaExpanded();
});
​
// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');
​
    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}
​
// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('cs-active');
    };
    item.addEventListener('click', onClick);
}
                                
