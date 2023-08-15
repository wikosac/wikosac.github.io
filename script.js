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
  });

  element.addEventListener("mouseleave", function () {
    element.style.cursor = "auto";
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
// github.addEventListener('click', function() {
//   window.open('https://github.com/wikosac', '_blank');
// });
hover(github);

const linkedin = document.getElementById("linkedin");
// linkedin.addEventListener('click', function() {
//   window.open('https://www.linkedin.com/in/wikosac/', '_blank');
// });
hover(linkedin);

const bgimg = document.getElementById("sidebar-image");
const home = document.getElementById("home");
const section1 = document.getElementById("port1");
const section2 = document.getElementById("port2");
const section3 = document.getElementById("port3");
const section4 = document.getElementById("port4");

function handleScroll() {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= section1.offsetTop && scrollPosition < section2.offsetTop) {
    bgimg.style.backgroundImage = 'url("./public/app/storyapp.jpg")';

    section1.classList.add("highlighted");
    section2.classList.remove("highlighted");
    section3.classList.remove("highlighted");
  } else if (scrollPosition >= section2.offsetTop && scrollPosition < section3.offsetTop) {
    bgimg.style.backgroundImage = 'url("./public/app/speakuy.jpg")';

    section1.classList.remove("highlighted");
    section2.classList.add("highlighted");
    section3.classList.remove("highlighted");
  } else if (scrollPosition >= section3.offsetTop && scrollPosition < section4.offsetTop) {
    bgimg.style.backgroundImage = 'url("./public/app/githubuser.jpg")';

    section1.classList.remove("highlighted");
    section2.classList.remove("highlighted");
    section3.classList.add("highlighted");
  } else {
    bgimg.style.backgroundImage = 'url("./public/img/me.jpg")';

    section1.classList.remove("highlighted");
    section2.classList.remove("highlighted");
    section3.classList.remove("highlighted");
  }
}

window.addEventListener("scroll", handleScroll);
