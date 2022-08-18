
const fadeOut = () => {
    const loaderWrapper = document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);