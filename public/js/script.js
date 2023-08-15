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
  return scrollPosition >= element1.offsetTop && scrollPosition < element2.offsetTop;
}

function isVisibleFade(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom < 400;
}

function fadeIn(element) {
  element.classList.remove("hidden");
  element.classList.add("fade-element");
}

function fadeOut(element) {
  element.classList.add("hidden");
  element.classList.remove("fade-element");
}

const nav = document.getElementById("nav-sidebar");
const sidebar = document.getElementById("sidebar-image");
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const detail = document.getElementById("detail");

function handleScroll() {
  const scrollPosition = window.scrollY;
  let bgImg = "me";

  for (let i = 1; i <= 9; i++) {
    const variableName = `section${i}`;
    window[variableName] = document.getElementById(`port${i}`);
    window[variableName].classList.remove("highlighted");
  }

  if (isVisible(scrollPosition, home, section1)) {
    bgImg = "me";
  } else if (isVisible(scrollPosition, section1, section2)) {
    bgImg = "yuubaca";
    section1.classList.add("highlighted");
    // detail.addEventListener("click", () => {
    //   nav.style.width = "0%";
    //   console.log("clicked");
    // });
  } else if (isVisible(scrollPosition, section2, section3)) {
    bgImg = "3food";
    section2.classList.add("highlighted");
  } else if (isVisible(scrollPosition, section3, section4)) {
    bgImg = "speakuy";
    section3.classList.add("highlighted");
  } else if (isVisible(scrollPosition, section4, section5)) {
    bgImg = "storyapp";
    section4.classList.add("highlighted");
  } else if (isVisible(scrollPosition, section5, section6)) {
    bgImg = "githubuser";
    section5.classList.add("highlighted");
  } else if (isVisible(scrollPosition, section6, section7)) {
    bgImg = "telucanteen";
    section6.classList.add("highlighted");
  } else if (isVisible(scrollPosition, section7, section8)) {
    bgImg = "hitungbmi";
    section7.classList.add("highlighted");
  } else if (isVisible(scrollPosition, section8, section9)) {
    bgImg = "mobpro2";
    section8.classList.add("highlighted");
    fadeOut(about);
    fadeOut(contact);
  } else if (isVisible(scrollPosition, section9, about)) {
    bgImg = "gasdect";
    section9.classList.add("highlighted");

    const rect = section9.getBoundingClientRect();
    if (rect.bottom < 400) {
      fadeIn(about);
    }
    if (rect.bottom < 100) {
      fadeIn(contact);
    }
  } else {
    bgImg = "me";
    for (let i = 1; i <= 9; i++) {
      const variableName = `section${i}`;
      window[variableName].classList.remove("highlighted");
    }
  }

  sidebar.style.backgroundImage = `url("./public/img/${bgImg}.jpg")`;
}

window.addEventListener("scroll", handleScroll);
