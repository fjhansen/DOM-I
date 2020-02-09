const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//Updates CTA Image source by ID

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent["cta"]["img-src"];

// Updates Middle Image source by ID
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Nav items

let nav1 = document.getElementsByTagName('a')[0];
nav1.textContent = siteContent['nav']['nav-item-1'];

let nav2 = document.getElementsByTagName('a')[1];
nav2.textContent = siteContent['nav']['nav-item-2'];

let nav3 = document.getElementsByTagName('a')[2];
nav3.textContent = siteContent['nav']['nav-item-3'];

let nav4 = document.getElementsByTagName('a')[3];
nav4.textContent = siteContent['nav']['nav-item-4'];

let nav5 = document.getElementsByTagName('a')[4];
nav5.textContent = siteContent['nav']['nav-item-5'];

let nav6 = document.getElementsByTagName('a')[5];
nav6.textContent = siteContent['nav']['nav-item-6'];



// CTA

let ctaText = document.getElementsByTagName('h1')[0];
ctaText.textContent = siteContent['cta']['h1'];

let ctaButton = document.getElementsByTagName('button')[0];
ctaButton.textContent = siteContent['cta']['button'];


// Main Content Headers

let mainHeader1 = document.getElementsByTagName('h4')[0];
mainHeader1.textContent = siteContent['main-content']['features-h4']

let mainHeader2 = document.getElementsByTagName('h4')[1];
mainHeader2.textContent = siteContent['main-content']['about-h4'];

let mainHeader3 = document.getElementsByTagName('h4')[2];
mainHeader3.textContent = siteContent['main-content']['services-h4'];

let mainHeader4 = document.getElementsByTagName('h4')[3];
mainHeader4.textContent = siteContent['main-content']['product-h4'];

let mainHeader5 = document.getElementsByTagName('h4')[4];
mainHeader5.textContent = siteContent['main-content']['vision-h4'];

// Main Content Text Content

let mainText1 = document.getElementsByTagName('p')[0];
mainText1.textContent = siteContent['main-content']['features-content'];

let mainText2 = document.getElementsByTagName('p')[1];
mainText2.textContent = siteContent['main-content']['about-content'];

let mainText3 = document.getElementsByTagName('p')[2];
mainText3.textContent = siteContent['main-content']['services-content'];

let mainText4 = document.getElementsByTagName('p')[3];
mainText4.textContent = siteContent['main-content']['product-content'];

let mainText5 = document.getElementsByTagName('p')[4];
mainText5.textContent = siteContent['main-content']['vision-content'];

// Contact

let contactHeader = document.getElementsByTagName('h4')[5];
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactAddress = document.getElementsByTagName('p')[5];
contactAddress.textContent = siteContent['contact']['address'];

let contactPhone = document.getElementsByTagName('p')[6];
contactPhone.textContent = siteContent['contact']['phone'];

let contactEmail = document.getElementsByTagName('p')[7];
contactEmail.textContent = siteContent['contact']['email'];

// Footer

let footerCopy = document.getElementsByTagName('p')[8];
footerCopy.textContent = siteContent['footer']['copyright']


// nav colors

let navStyle = document.getElementsByTagName('a');
Array.from(navStyle).forEach(a => {
  a.style.color = "green";
  a.style.fontWeight = "bolder";
});

// nav append





