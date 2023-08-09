const hamburger = document.querySelector('.hamburger');
const up = document.querySelector('.top');
const mid = document.querySelector('.mid');
const bottom = document.querySelector('.bottom');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', function() {
    if (up.classList.contains('turn-down')) {
        up.classList.remove('turn-down');
        mid.classList.remove('mid-off');
        bottom.classList.remove('bottom-up');
        overlay.style.width = "0%"
    } else {
        up.classList.add('turn-down');
        mid.classList.add('mid-off');
        bottom.classList.add('bottom-up');
        overlay.style.width = "100%"
    }
});
