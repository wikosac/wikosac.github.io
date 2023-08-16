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
    element.classList.add("w3-text-blue");
  });

  element.addEventListener("mouseleave", function () {
    element.style.cursor = "auto";
    element.classList.remove("w3-text-blue");
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
  } else {
    topElement.classList.add("highlighted");
  }
  return rect.bottom < 200;
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

function addDetailClick(target) {
  detail.addEventListener("click", () => {
    show(target);
  });
}

const nav = document.getElementById("nav-sidebar");
const sidebar = document.getElementById("sidebar-image");
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const detail = document.getElementById("detail");

for (let i = 1; i <= 9; i++) {
  const variableName = `section${i}`;
  window[variableName] = document.getElementById(`port${i}`);
  window[variableName].style.paddingTop = "8px";
  window[variableName].style.paddingLeft = "8px";
  window[variableName].style.paddingRight = "8px";
  window[variableName].style.paddingBottom = "8px";
}

function handleScroll() {
  const scrollPosition = window.scrollY;
  let bgImg = "me";

  for (let i = 1; i <= 9; i++) {
    const variableName = `section${i}`;
    window[variableName] = document.getElementById(`port${i}`);
    window[variableName].classList.remove("highlighted");
    const detailDiv = `detailport${i}`;
    window[detailDiv] = document.getElementById(`detailport${i}`);
  }

  if (isVisible(scrollPosition, home, section1)) {
    bgImg = "me";
    highlight(home, section1);
    fadeOut(about);
    fadeOut(contact);
  } else if (isVisible(scrollPosition, section1, section2)) {
    bgImg = "yuubaca";
    highlight(section1, section2);
    fadeOut(about);
    fadeOut(contact);
  } else if (isVisible(scrollPosition, section2, section3)) {
    bgImg = "3food";
    highlight(section2, section3);
  } else if (isVisible(scrollPosition, section3, section4)) {
    bgImg = "speakuy";
    highlight(section3, section4);
  } else if (isVisible(scrollPosition, section4, section5)) {
    bgImg = "storyapp";
    highlight(section4, section5);
  } else if (isVisible(scrollPosition, section5, section6)) {
    bgImg = "githubuser";
    highlight(section5, section6);
  } else if (isVisible(scrollPosition, section6, section7)) {
    bgImg = "telucanteen";
    highlight(section6, section7);
  } else if (isVisible(scrollPosition, section7, section8)) {
    bgImg = "hitungbmi";
    highlight(section7, section8);
  } else if (isVisible(scrollPosition, section8, section9)) {
    bgImg = "mobpro2";
    highlight(section8, section9);
    fadeOut(about);
    fadeOut(contact);
  } else if (isVisible(scrollPosition, section9, about)) {
    bgImg = "gasdect";
    const rect = section9.getBoundingClientRect();
    if (rect.bottom < 400) {
      fadeIn(about);
    }
    if (rect.bottom < 100) {
      fadeIn(contact);
    }
  } else {
    bgImg = "me";
    fadeIn(about);
    fadeIn(contact);
    for (let i = 1; i <= 9; i++) {
      const variableName = `section${i}`;
      window[variableName].classList.remove("highlighted");
    }
  }
  sidebar.style.backgroundImage = `url("./public/img/${bgImg}.jpg")`;
}

window.addEventListener("scroll", handleScroll);
