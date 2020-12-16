// console.log('hello');
const toneStithCard = document.querySelector(".toneStithCard");
const kianaLedeCard = document.querySelector(".kianaLedeCard");
const michaelJacksonCard = document.querySelector(".michaelJacksonCard");
const usherCard = document.querySelector(".usherCard");
const toneStithVideo = document.querySelector(".toneStithVideo");
const kianaLedeVideo = document.querySelector(".kianaLedeVideo");
const michaelJacksonVideo = document.querySelector(".michaelJacksonVideo");
const usherVideo = document.querySelector(".usherVideo");
// console.log(usherCard);

toneStithCard.addEventListener("click", () => {
    kianaLedeVideo.classList.remove('active');
    usherVideo.classList.remove('active');
    michaelJacksonVideo.classList.remove('active');
    toneStithVideo.classList.add("active");
})
kianaLedeCard.addEventListener("click", () => {
    kianaLedeVideo.classList.add('active');
    usherVideo.classList.remove('active');
    michaelJacksonVideo.classList.remove('active');
    toneStithVideo.classList.remove("active");
})
michaelJacksonCard.addEventListener("click", () => {
    kianaLedeVideo.classList.remove('active');
    usherVideo.classList.remove('active');
    michaelJacksonVideo.classList.add('active');
    toneStithVideo.classList.remove("active");
})
usherCard.addEventListener("click", () => {
    kianaLedeVideo.classList.remove('active');
    usherVideo.classList.add('active');
    michaelJacksonVideo.classList.remove('active');
    toneStithVideo.classList.remove("active");
})