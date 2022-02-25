
let tabHeader = document.querySelectorAll('.list__link');
let listIndicator = document.querySelectorAll('.list__bar');

let sectionContainer = document.querySelectorAll('.container');


for (let index = 0; index < tabHeader.length; index++) {
    tabHeader[index].addEventListener('click', function () {
        document.querySelector('.list__link--active').classList.remove('list__link--active')
        document.querySelector('.list__bar--active').classList.remove('list__bar--active');
        tabHeader[index].classList.add('list__link--active');
        listIndicator[index].classList.add('list__bar--active');

        document.querySelector('.container--active').classList.remove('container--active');
        sectionContainer[index].classList.add('container--active');
    })
    
}