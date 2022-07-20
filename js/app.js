// function printOne() {
//   console.log("1");
// }
// let startTimeoutId = null;

// function startTimeout() {
//   console.log("start function");

//   //   startTimeoutId = setTimeout(printOne, 5000);
//   startTimeoutId = setTimeout(() => {
//     console.log("time out");
//   }, 3000);

//   console.log("end function");
// }
// startTimeout();

// function stopTimeout() {
//   clearTimeout(startTimeoutId);
// }
// stopTimeout();

// let intervalId = null;

// function startInterval() {
//   console.log("start function");

//   intervalId = setInterval(() => {
//     let d = new Date().getSeconds();
//     console.log("interval", d);
//   }, 500);

//   console.log("end function");
// }

// startInterval();
// function stopInterval() {
//   clearInterval(intervalId);
// }
// stopInterval();

setInterval(fun, 1000);
function fun() {
  let d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}

const nextBtn = document.querySelector("#next"),
  prevBtn = document.querySelector("#prev"),
  sliders = document.querySelectorAll(".slider-item"),
  startAutoSliding = document.querySelector("#start-auto"),
  stopAutoSliding = document.querySelector("#stop-auto");

// საწყისი activeIndex
let activeIndex = 0;

console.log("sliders", sliders);

function initSlider() {
  // next prev ღილაკებზე ლისენერის დამატება
  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);

  // ერთ-ერთ სლაიდზე active კლასის დამატება activeIndex-ის მიხედვით
  renderSlides();

  // კლავიატურის ღილაკებზე მოსმენა
  document.addEventListener("keyup", (e) => {
    console.log(e);
    // e.code გვიბრუნდებს შესაბამისი ღილაკის შესახებ ინფორმაციას
    if (e.code === "ArrowLeft") {
      showNextSlide();
    }
  });
}

// activeIndex (0, 1, ან 2) ინდექსის მქონე სლაიდზე ამატებს active კლასს, დანარჩენებზე შლის
function renderSlides() {
  console.log("activeIndex", activeIndex);
  sliders.forEach((slide, i) => {
    if (i === activeIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

//
function showNextSlide() {
  // console.log("next");
  // activeIndex ის მნიშვნელობის გაზრდა და ვამოწმებთ ეს ინდექსი (სლაიდების რაოდენობას - 1)-ზე მეტი ხომ არაა
  if (activeIndex === sliders.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  //  active კლასის ხელახლა დამატება შესაბამის ელემენტზე
  renderSlides();
}

function showPrevSlide() {
  // console.log("prevBtn");
  // activeIndex ის მნიშვნელობის შემცირება და ვამოწმებთ ეს ინდექსი 0-ზე ნაკლები ხომ არაა
  if (activeIndex === 0) {
    activeIndex = sliders.length - 1;
  } else {
    activeIndex--;
  }
  //  active კლასის ხელახლა დამატება შესაბამის ელემენტზე
  renderSlides();
}

// COMMENT autosliding
// id სლაიდერის ინტერვალისთვის
let autoSlidingId = null;

function startIntervalFnSlider() {
  // ეს კოდი შესრულდება ყოველ 3 წამში (3000 მილიწამში)
  autoSlidingId = setInterval(showNextSlide, 3000);
}

// autosliding -ის შეჩერება
function stopIntervalFnSlider() {
  clearInterval(autoSlidingId);
}
function startIntervalFnSlider() {
  clearInterval(autoSlidingId);
}

// autosliding-ის დამატება შესაბამის ღილაკებზე
startAutoSliding.addEventListener("click", startIntervalFnSlider);
stopAutoSliding.addEventListener("click", stopIntervalFnSlider);

// სლაიდერის დარენდერება საიტის ჩატვირთვისას
initSlider();

//2.
function stopIntervalFnSlider() {
  if (autoSlidingId) {
    clearInterval(autoSlidingId);
    autoSlidingId = null;
  }
}

slidesWrapper.addEventListener("mouseenter", (e) => {
  if (autoSlidingId) {
    console.log("enter");
    stopIntervalFnSlider();
  }
});

slidesWrapper.addEventListener("mouseleave", (e) => {
  if (autoSlidingId) {
    console.log("enter");
    startIntervalFnSlider();
  }
});
