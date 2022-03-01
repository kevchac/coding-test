//Main variables
const tabHeader = document.querySelectorAll('.list__link');
const listIndicator = document.querySelectorAll('.list__bar');
const sectionContainer = document.querySelectorAll('.container');

//Iterate the different arrays of tab elements
for (let index = 0; index < tabHeader.length; index++) {
    tabHeader[index].addEventListener('click', ()=>setTabContainerVisible(index));

    tabHeader[index].addEventListener('keydown',function(e) {
        let cont;
        if (e.keyCode == 37 || e.keyCode == 38) {
            cont = calculateNextPrev(index,false)
            tabHeader[cont].focus();
            setTabContainerVisible(cont);
            e.preventDefault();
        }
        if (e.keyCode == 39 || e.keyCode == 40) {
            //getNext(tabHeader[index].getAttribute('aria-labelledby'));
            cont = calculateNextPrev(index,true)
            tabHeader[cont].focus()
            setTabContainerVisible(cont);
            e.preventDefault();
        }
        //if press Home 
        if (e.keyCode == 36) {
            tabHeader[tabHeader.length - tabHeader.length].focus()
            setTabContainerVisible(tabHeader.length - tabHeader.length);
            e.preventDefault();
        }
        //if press End
        if (e.keyCode == 35) {
            tabHeader[tabHeader.length-1].focus()
            setTabContainerVisible(tabHeader.length-1);
            e.preventDefault();
        }
    });
}



