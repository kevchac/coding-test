//Main variables
const tabHeader = document.querySelectorAll('.list__link');
const listIndicator = document.querySelectorAll('.list__bar');
const sectionContainer = document.querySelectorAll('.container');


//Iterate the different arrays of tab elements
for (let index = 0; index < tabHeader.length; index++) {
    tabHeader[index].addEventListener('click', function () {
        //Get active elements and delete active class
        document.querySelector('.list__link--active').classList.remove('list__link--active')
        document.querySelector('.list__bar--active').classList.remove('list__bar--active');
        
        //Add new active elements
        tabHeader[index].classList.add('list__link--active');
        listIndicator[index].classList.add('list__bar--active');
        document.querySelector('.container--active').classList.remove('container--active');
        sectionContainer[index].classList.add('container--active');
    })
}
