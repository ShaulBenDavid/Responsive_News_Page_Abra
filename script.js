const BURGER_BTN = document.getElementsByClassName("burger-container")[0];
const NAV = document.getElementsByClassName("nav")[0];



BURGER_BTN.addEventListener('click', () => {
    BURGER_BTN.classList.toggle('close');
    NAV.classList.toggle('active');
});