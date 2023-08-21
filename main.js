
//change nav style on Scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

//contact button (cicular text button)




function openFullImg(src) {
    var fullImg = document.getElementById('fullImg');
    fullImg.src = src;
    document.getElementById('fullImgBox').style.display = 'flex';

}

function closeFullImg() {
    document.getElementById('fullImgBox').style.display = 'none';

}



const nav = document.querySelector('.nav__links'); // Add a dot before 'nav__links' to select by class
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);


//close nav menu on click of menu link
if (document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    })
}



// Optionally, you can also add an event listener for the close button

const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach((button) => {
    let text = button.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('');
});