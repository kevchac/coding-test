const calculateNextPrev=(e,t)=>e>=tabHeader.length-1&&t?0:e<=0&&!t?tabHeader.length-1:t?e+1:e-1,setTabContainerVisible=e=>{const t=document.querySelector(".list__link--active");t.setAttribute("aria-selected","false"),t.classList.remove("list__link--active"),document.querySelector(".list__bar--active").classList.remove("list__bar--active"),tabHeader[e].classList.add("list__link--active"),tabHeader[e].setAttribute("aria-selected","true"),listIndicator[e].classList.add("list__bar--active"),document.querySelector(".container--active").classList.remove("container--active"),sectionContainer[e].classList.add("container--active")};
//# sourceMappingURL=helpers.js.map