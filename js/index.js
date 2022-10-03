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

// let userTexts = document.getElementsByClassName("user-test");
// let userPics = document.getElementsByClassName("user-pic");

// function showReview() {
//     for (userPic of userPics) {
//         userPic.classList.remove("active-pic");
//     }
//     for (userText of userTexts) {
//         userText.classList.remove("active-text")
//     }
//     let i = Array.from(userPics).indexOf(event.target);
//     userPics[i].classList.add("active-pic")
//     userTexts[i].classList.add("active-text")
// }



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









// for the client page

const track = document.querySelector(".card-content");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");
const dotsNav = document.querySelector(".navigator");
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);


// arrange the sides next to one nother
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

// console.log(slide);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide")
    targetSlide.classList.add("current-slide")
}
const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add("is-hidden");
        nextBtn.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove("is-hidden");
        nextBtn.classList.add("is-hidden");
    }
    else {
        prevBtn.classList.remove("is-hidden");
        nextBtn.classList.remove("is-hidden");
    }    
}


const dotUpdates = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
}

// when i clcik left move slide to left
prevBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    dotUpdates(currentDot, prevDot);
    hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
    moveToSlide(track, currentSlide, prevSlide);
})
// when i clcik right move slide to right
nextBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    dotUpdates(currentDot, nextDot);
    hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
    
})
// when i clcik indicator move slide to right
dotsNav.addEventListener("click", e => {
    // what indicator was click on
    const targetDot = e.target.closest("span");
    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
      
     
    moveToSlide(track, currentSlide, targetSlide);
    dotUpdates(currentDot, targetDot);
    hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
});



















