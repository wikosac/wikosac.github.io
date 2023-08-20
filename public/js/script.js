//  script
// Open and close sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}

function hover(element) {
  element.addEventListener("mouseenter", function () {
    element.style.cursor = "pointer";
    element.classList.add("gradient-text-2");
  });

  element.addEventListener("mouseleave", function () {
    element.style.cursor = "auto";
    element.classList.remove("gradient-text-2");
  });
}

function hoverName(element) {
  element.addEventListener("mouseenter", function () {
    element.classList.remove("animated-text");
    element.classList.add("animated-text-2");
  });

  element.addEventListener("mouseleave", function () {
    element.classList.remove("animated-text-2");
    element.classList.add("animated-text");
  });
}

const resume = document.getElementById("viewResume");
resume.addEventListener("click", function () {
  window.open("https://drive.google.com/file/d/1WBCvyLmUBuSXLa7OuRPSo7HA2-jRJlFj/view?usp=drive_link", "_blank");
});

const email = document.getElementById("email");
email.addEventListener("click", function () {
  const confirmation = confirm("Do you want to send an email?");

  if (confirmation) {
    const recipient = "dwiko.indrawansyah@gmail.com";
    const mailtoLink = `mailto:${recipient}`;
    window.location.href = mailtoLink;
  }
});
hover(email);

const phone = document.getElementById("phone");
phone.addEventListener("click", function () {
  const confirmation = confirm("Do you want to send a message?");

  if (confirmation) {
    const phoneNumber = "6281717451771";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  }
});
hover(phone);

const github = document.getElementById("github");
hover(github);

const linkedin = document.getElementById("linkedin");
hover(linkedin);

function isVisible(scrollPosition, element1, element2) {
  return scrollPosition > element1.offsetTop && scrollPosition < element2.offsetTop;
}

function highlight(topElement, target) {
  const rect = topElement.getBoundingClientRect();
  if (rect.bottom < 200) {
    target.classList.add("highlighted");
    if (isHighlighted(target)) {
      topElement.classList.remove("highlighted");
    }
  }
}

function isHighlighted(element) {
  return element.classList.contains("highlighted");
}

function isVisibleFade(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom < 400;
}

function show(element) {
  element.classList.remove("hidden");
  element.classList.add("visible");
}

function hide(element) {
  element.classList.add("hidden");
  element.classList.remove("visible");
}

function fadeIn(element) {
  element.classList.remove("hidden");
  element.classList.add("fade-element");
}

function fadeOut(element) {
  element.classList.add("hidden");
  element.classList.remove("fade-element");
}

let isAnimationInProgress = false;

function startAnimation() {
  if (!isAnimationInProgress && sidebar.classList.contains("slide-in-animation-2")) {
    sidebar.classList.remove("slide-in-animation-2");
    sidebar.classList.add("slide-in-animation");
    isAnimationInProgress = true;
  }
  if (!isAnimationInProgress && sidebar.classList.contains("slide-in-animation")) {
    sidebar.classList.remove("slide-in-animation");
    sidebar.classList.add("slide-in-animation-2");
    isAnimationInProgress = true;
  }
  if (!sidebar.classList.contains("slide-in-animation") && !sidebar.classList.contains("slide-in-animation-2")) {
    sidebar.classList.add("slide-in-animation");
  }
}

function endAnimation(before) {
  if (!isHighlighted(before)) {
    sidebar.classList.remove("slide-in-animation");
  }
}

function addStyleWithDelay() {
  setTimeout(function () {
    targetElement.style.backgroundColor = "orange";
  }, 2000); // Delay in milliseconds (2 seconds in this example)
}

function addElement() {
  const detailHover = `<div id="divToDelete" class="w3-display-middle w3-display-hover">
  <button id="detail" type="button" class="w3-blue w3-animate-opacity w3-btn w3-round" onclick="addDetailClick()">Close</button>
  </div>`;
  sidebar.innerHTML = detailHover;
}

function addDetailClick() {
  const detail = document.getElementById("detail");
  detail.addEventListener("click", function () {
    // window.scrollTo({
    //   top: 7470,
    //   behavior: 'smooth'
    // });
    nav.style.width = "0%";
    content.style.marginLeft = "0%";
  });
}

function hoverOver(element) {
  element.addEventListener("mouseenter", function () {
    element.classList.add("hovered");
  });
  element.addEventListener("mouseleave", function () {
    element.classList.remove("hovered");
  });
}

let bgImg = "me";

const myName = document.getElementById("name");
hoverName(myName);
const nav = document.getElementById("nav-sidebar");
const sidebar = document.getElementById("sidebar-image");
const content = document.getElementById("page-content");
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

for (let i = 1; i <= 9; i++) {
  const variableName = `section${i}`;
  window[variableName] = document.getElementById(`port${i}`);
  window[variableName].style.padding = "16px";

  // if (window[variableName].classList.contains("highlighted")) {
  // }
}
function hoverHigh() {
  for (let i = 1; i <= 4; i++) {
    const imgY = `y${i}`;
    window[imgY] = document.getElementById(`y${i}`);
    hoverOver(window[imgY]);
    window[imgY].addEventListener("mouseenter", () => {
      if (window[imgY].classList.contains("hovered")) {
        bgImg = imgY;
        sidebar.style.backgroundImage = `url("./public/img/${bgImg}.jpg")`;
        window[imgY].addEventListener("click", () => {
          nav.style.width = "35%";
          content.style.marginLeft = "35%";
        });
      }
    });
  }
}

function hoverScale(ele) {
  ele.addEventListener("mouseenter", () => {
    ele.classList.add("highlightedhover");
  });
  ele.addEventListener("mouseleave", () => {
    ele.classList.remove("highlightedhover");
  });
}

function display() {
  highlight(home, section1);
  for (let i = 1; i < 9; i++) {
    const section = `sections${i}`;
    const section2nd = `sections${i + 1}`;
    window[section] = document.getElementById(`port${i}`);
    window[section2nd] = document.getElementById(`port${i + 1}`);
    highlight(window[section], window[section2nd]);
  }
}

function applyScale() {
  for (let i = 1; i < 9; i++) {
    const variableName = `section${i}`;
    window[variableName] = document.getElementById(`port${i}`);
    console.log(i, isHighlighted(window[variableName]));
    if (isHighlighted(window[variableName])) {
      hoverScale(window[variableName]);
    }
  }
}

function handleScroll() {
  nav.style.width = "25%";
  content.style.marginLeft = "25%";

  for (let i = 1; i < 9; i++) {
    const variableName = `section${i}`;
    window[variableName] = document.getElementById(`port${i}`);
    window[variableName].classList.remove("highlighted");
    console.log(variableName);
    if (isHighlighted(window[variableName])) {
      switch (variableName) {
        case section1:
          bgImg = "y1";
          sidebar.classList.add("w3-round-xlarge");
          nav.style.padding = "32px 40px";
          fadeOut(about);
          fadeOut(contact);
          startAnimation();
          hoverHigh();
          break;
        case section2:
          bgImg = "3food";
          fadeOut(about);
          fadeOut(contact);
          break;
        case section3:
          bgImg = "speakuy";

          break;
        case section4:
          bgImg = "storyapp";

          break;
        case section5:
          bgImg = "githubuser";

          break;
        case section6:
          bgImg = "telucanteen";

          break;
        case section7:
          bgImg = "hitungbmi";

          break;
        case section8:
          bgImg = "mobpro2";
          section9.classList.remove("highlighted");
          fadeOut(about);
          fadeOut(contact);
          break;
        case section9:
          bgImg = "gasdect";
          sidebar.classList.add("w3-round-xlarge");
          nav.style.padding = "32px 40px";
          nav.style.width = "25%";
          content.style.marginLeft = "25%";
          const rect = section9.getBoundingClientRect();
          if (rect.bottom < 400) {
            fadeIn(about);
          }
          if (rect.bottom < 200) {
            bgImg = "me";
            nav.style.padding = "";
            sidebar.classList.remove("w3-round-xlarge");
          }
          const rectA = about.getBoundingClientRect();
          if (rectA.bottom < 400) {
            fadeIn(contact);
          }
          if (rect.bottom < 30) {
            section9.classList.remove("highlighted");
          } else {
            startAnimation();
            sidebar.innerHTML = "";
          }
          if (window.scrollY < 1000) {
            bgImg = "me";
            nav.style.padding = "";
            sidebar.classList.remove("w3-round-xlarge");
          }
          break;
        default:
          bgImg = "me";
          nav.style.padding = "";
          sidebar.classList.remove("w3-round-xlarge");
          fadeOut(about);
          fadeOut(contact);
          break;
      }
    }
  }

  highlight(home, section1);
  for (let i = 1; i < 9; i++) {
    const section = `sections${i}`;
    const section2nd = `sections${i + 1}`;
    window[section] = document.getElementById(`port${i}`);
    window[section2nd] = document.getElementById(`port${i + 1}`);
    highlight(window[section], window[section2nd]);
  }

  // if (isHighlighted(section1)) {
  //   bgImg = "y1";
  //   sidebar.classList.add("w3-round-xlarge");
  //   nav.style.padding = "32px 40px";
  //   fadeOut(about);
  //   fadeOut(contact);
  //   startAnimation();
  //   hoverHigh();

  //   // for (let i = 1; i <= 4; i++) {
  //   //   const imgY = `y${i}`;
  //   //   window[imgY] = document.getElementById(`y${i}`);
  //   //   hoverOver(window[imgY]);
  //   //   if (window[imgY].classList.contains("hovered")) {
  //   //     bgImg = imgY;
  //   //   }
  //   // }
  // } else if (isHighlighted(section2)) {
  //   bgImg = "3food";
  //   fadeOut(about);
  //   fadeOut(contact);
  // } else if (isHighlighted(section3)) {
  //   bgImg = "speakuy";
  // } else if (isHighlighted(section4)) {
  //   bgImg = "storyapp";
  // } else if (isHighlighted(section5)) {
  //   bgImg = "githubuser";
  // } else if (isHighlighted(section6)) {
  //   bgImg = "telucanteen";
  // } else if (isHighlighted(section7)) {
  //   bgImg = "hitungbmi";
  // } else if (isHighlighted(section8)) {
  //   bgImg = "mobpro2";
  //   section9.classList.remove("highlighted");
  //   fadeOut(about);
  //   fadeOut(contact);
  // } else if (isHighlighted(section9)) {
  //   bgImg = "gasdect";
  //   sidebar.classList.add("w3-round-xlarge");
  //   nav.style.padding = "32px 40px";
  //   nav.style.width = "25%";
  //   content.style.marginLeft = "25%";
  //   const rect = section9.getBoundingClientRect();
  //   if (rect.bottom < 400) {
  //     fadeIn(about);
  //   }
  //   if (rect.bottom < 200) {
  //     bgImg = "me";
  //     nav.style.padding = "";
  //     sidebar.classList.remove("w3-round-xlarge");
  //   }
  //   const rectA = about.getBoundingClientRect();
  //   if (rectA.bottom < 400) {
  //     fadeIn(contact);
  //   }
  //   if (rect.bottom < 30) {
  //     section9.classList.remove("highlighted");
  //   } else {
  //     startAnimation();
  //     sidebar.innerHTML = "";
  //   }
  //   if (window.scrollY < 1000) {
  //     bgImg = "me";
  //     nav.style.padding = "";
  //     sidebar.classList.remove("w3-round-xlarge");
  //   }
  // } else {
  //   bgImg = "me";
  //   nav.style.padding = "";
  //   sidebar.classList.remove("w3-round-xlarge");
  //   fadeOut(about);
  //   fadeOut(contact);
  //   // for (let i = 1; i < 9; i++) {
  //   //   const section = `sections${i}`;
  //   //   window[section] = document.getElementById(`port${i}`);
  //   // }
  // }

  sidebar.style.backgroundImage = `url("./public/img/${bgImg}.jpg")`;

  // if (window.scrollY >= 7470) {
  //   addElement();
  // }
}

const rect = section9.getBoundingClientRect();
if (rect.bottom > 400) {
  window.addEventListener("scroll", handleScroll);
}

// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// const gdev = document.getElementById("gdev");
// gdev.addEventListener("click", () => {
//   nav.style.width = "0%";
//   content.style.marginLeft = "0%";
//   gdev.width = "800";
//   gdev.height = "600";
// });

// } else if (isHighlighted(section2)) {
// } else if (isHighlighted(section3)) {
// } else if (isHighlighted(section4)) {
// } else if (isHighlighted(section5)) {
// } else if (isHighlighted(section6)) {
// } else if (isHighlighted(section7)) {
// } else if (isHighlighted(section8)) {
// } else if (isHighlighted(section9)) {
// }
