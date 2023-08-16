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
    if (target.classList.contains("highlighted")) {
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
  let bgImg = "me";

  for (let i = 1; i < 9; i++) {
    const variableName = `section${i}`;
    window[variableName] = document.getElementById(`port${i}`);
    window[variableName].classList.remove("highlighted");
  }

  highlight(home, section1);
  for (let i = 1; i < 9; i++) {
    const section = `sections${i}`;
    const section2nd = `sections${i + 1}`;
    window[section] = document.getElementById(`port${i}`);
    window[section2nd] = document.getElementById(`port${i + 1}`);
    highlight(window[section], window[section2nd]);
  }

  if (isHighlighted(section1)) {
    bgImg = "yuubaca";
    fadeOut(about);
    fadeOut(contact);
  } else if (isHighlighted(section2)) {
    bgImg = "3food";
    fadeOut(about);
    fadeOut(contact);
  } else if (isHighlighted(section3)) {
    bgImg = "speakuy";
  } else if (isHighlighted(section4)) {
    bgImg = "storyapp";
  } else if (isHighlighted(section5)) {
    bgImg = "githubuser";
  } else if (isHighlighted(section6)) {
    bgImg = "telucanteen";
  } else if (isHighlighted(section7)) {
    bgImg = "hitungbmi";
  } else if (isHighlighted(section8)) {
    bgImg = "mobpro2";
    section9.classList.remove("highlighted");
    fadeOut(about);
    fadeOut(contact);
  } else if (isHighlighted(section9)) {
    bgImg = "gasdect";
    const rect = section9.getBoundingClientRect();
    if (rect.bottom < 400) {
      fadeIn(about);
    }
    if (rect.bottom < 100) {
      fadeIn(contact);
    }
    if (rect.bottom < 30) {
      section9.classList.remove("highlighted");
    }
  } else {
    bgImg = "me";
  }

  sidebar.style.backgroundImage = `url("./public/img/${bgImg}.jpg")`;
}

window.addEventListener("scroll", handleScroll);
