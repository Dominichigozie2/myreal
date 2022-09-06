let side = document.querySelector(".side-bar");
let bar = document.querySelector("#bar")

bar.onclick =()=> {
    bar.classList.toggle("fa-times");
    side.classList.toggle("down");
}
window.onscroll = () => {
    bar.classList.remove("fa-times");
    side.classList.remove("down");
}

// the client page

let userTexts = document.getElementsByClassName("user-test");
let userPics = document.getElementsByClassName("user-pic");

function showReview() {
    for (userPic of userPics) {
        userPic.classList.remove("active-pic");
    }
    for (userText of userTexts) {
        userText.classList.remove("active-text")
    }
    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic")
    userTexts[i].classList.add("active-text")
}



// the nave show and fade codes

const sectionOne = document.querySelector(".home");
const remove = document.querySelector("nav");
const change = document.querySelector(".bar")
const add = document.querySelector(".add")

const option = {
    root: null,
    threshold: 0,
    rootMargin: "-300px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            remove.classList.add("remove");
            change.classList.add("change");
            add.classList.add("dislay");
        } else {
            remove.classList.remove("remove");
            change.classList.remove("change");
            add.classList.remove("dislay");
      }
    });
}, option);

observer.observe(sectionOne)



// the media icon
let but = document.querySelector("#adds");
let btn = document.querySelector(".buttons");

but.onclick = () => {
    but.classList.toggle("fa-times");
    btn.classList.toggle("sho")
}
