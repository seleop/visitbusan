const modifyScrollHeader = () => {
    if(window.scrollY > 0   ) {
        document.querySelector('header').classList.add('scroll-active-header');
    } else {
        document.querySelector('header').classList.remove('scroll-active-header');
    }
}

const toggleSearchbox = () => {
    document.querySelector('.searchbar').classList.toggle('searchbar-toggle')
}

window.addEventListener("scroll", modifyScrollHeader);
document.querySelector('#search-icon').addEventListener('click', toggleSearchbox);