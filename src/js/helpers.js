// Identify the next or prev tab, it depends of the index and the list length
const calculateNextPrev = (index, x)=>{
    if (index >= tabHeader.length-1 && x) {
       return index = 0;
    }else if(index<=0 &&!x){
        return tabHeader.length -1;
    }
    return x ? index +1 : index -1;

}

// Define the status of the tabs and the containers
const setTabContainerVisible =(index)=>{
    //Get active elements and delete active class
    const activeTabHeader= document.querySelector('.list__link--active');
    activeTabHeader.setAttribute('aria-selected', 'false');
    activeTabHeader.classList.remove('list__link--active')
    document.querySelector('.list__bar--active').classList.remove('list__bar--active');

    //Add new active elements
    tabHeader[index].classList.add('list__link--active');
    tabHeader[index].setAttribute('aria-selected', 'true');
    listIndicator[index].classList.add('list__bar--active');
    document.querySelector('.container--active').classList.remove('container--active');
    sectionContainer[index].classList.add('container--active');
    
};
