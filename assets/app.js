// ne concerne unquiquement UX de lecture de video 
// de la section "mes artistes" pour les versions
// tablette et desktop

// SELECTION DES ELEMENTS HTML SUR LESQUELS JE VAIS AGIR

//SELECTION DES CARDS
const toneStithCard = document.querySelector(".toneStithCard");
const kianaLedeCard = document.querySelector(".kianaLedeCard");
const michaelJacksonCard = document.querySelector(".michaelJacksonCard");
const usherCard = document.querySelector(".usherCard");

//SELECTION DES IMAGES DANS LES CARDS
const toneStithImg = document.querySelector(".ts");
const kianaLedeImg = document.querySelector(".kL");
const michaelJacksonImg = document.querySelector(".mj");
const usherImg = document.querySelector(".ush");

//SELECTION DES VIDEOS "iframe" 
const toneStithVideo = document.querySelector(".toneStithVideo");
const kianaLedeVideo = document.querySelector(".kianaLedeVideo");
const michaelJacksonVideo = document.querySelector(".michaelJacksonVideo");
const usherVideo = document.querySelector(".usherVideo");


//ECOUTEUR D'EVENEMENT AU "CLICK" SUR CHAQUES CARDS

// -1- ajout d'une classe aux images qui ajoute une bordure a la card cliqué
//     et retrait de cette meme classe aux cards non cliqué.
// -2- ajout d'une classe aux video/iframe pour rendre la video associé
//     a la card cliqué visible et les autres en "display: none"

toneStithCard.addEventListener("click", () => {
//.........-1-..........
    toneStithImg.classList.add("cardClicked");
    kianaLedeImg.classList.remove("cardClicked");
    michaelJacksonImg.classList.remove("cardClicked");
    usherImg.classList.remove("cardClicked");
//.........-2-..........
    kianaLedeVideo.classList.remove('active');
    usherVideo.classList.remove('active');
    michaelJacksonVideo.classList.remove('active');
    toneStithVideo.classList.add("active");
})


kianaLedeCard.addEventListener("click", () => {
//.........-1-..........
    toneStithImg.classList.remove("cardClicked");
    kianaLedeImg.classList.add("cardClicked");
    michaelJacksonImg.classList.remove("cardClicked");
    usherImg.classList.remove("cardClicked");
//.........-2-..........
    kianaLedeVideo.classList.add('active');
    usherVideo.classList.remove('active');
    michaelJacksonVideo.classList.remove('active');
    toneStithVideo.classList.remove("active");
})


michaelJacksonCard.addEventListener("click", () => {
//.........-1-..........
    toneStithImg.classList.remove("cardClicked");
    kianaLedeImg.classList.remove("cardClicked");
    michaelJacksonImg.classList.add("cardClicked");
    usherImg.classList.remove("cardClicked");
//.........-2-..........
    kianaLedeVideo.classList.remove('active');
    usherVideo.classList.remove('active');
    michaelJacksonVideo.classList.add('active');
    toneStithVideo.classList.remove("active");
})


usherCard.addEventListener("click", () => {
//.........-1-..........
    toneStithImg.classList.remove("cardClicked");
    kianaLedeImg.classList.remove("cardClicked");
    michaelJacksonImg.classList.remove("cardClicked");
    usherImg.classList.add("cardClicked");
//.........-2-..........
    kianaLedeVideo.classList.remove('active');
    usherVideo.classList.add('active');
    michaelJacksonVideo.classList.remove('active');
    toneStithVideo.classList.remove("active");
})