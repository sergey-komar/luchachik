$(function () {
    $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
     });
    $('.questions-accardion__btn-mobile').on('click', function(){
        $(this).next().slideToggle(500); 
     });


     $('.slider-top__inner').slick({
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // arrows: false,
        // dots: false,
        // autoplay: true,
        // autoplaySpeed: 1000,
        slidesToShow: 1, 
        slidesToScroll: 1,
        arrows: false,
         dots: false, 
        speed: 5000, 
        autoplay: true, 
        autoplaySpeed: 0, 
        cssEase: 'linear', 
        variableWidth: true,
   
      });

      $('.slider-bottom__inner').slick({
        slidesToShow: 1, 
        slidesToScroll: 1,
        arrows: false,
         dots: false, 
        speed: 5000, 
        autoplay: true, 
        autoplaySpeed: 0, 
        cssEase: 'linear', 
        variableWidth: true,
        rtl: true
      });
});




window.addEventListener('DOMContentLoaded', () => {
    const accardeonBtn = document.querySelectorAll('.questions-accardion__img');
    accardeonBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });

    const accardeonBtnMobile = document.querySelectorAll('.questions-accardion__img-mobile');
    accardeonBtnMobile.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });


    const menuLink = document.querySelectorAll('.debts-menu__list-link');
    const debtslist = document.querySelector('.debts-menu__list');
    const debtsMenu = document.querySelector('.debts-menu');

    function hideMenu() {
        menuLink.forEach(item => {
            item.classList.remove('debts-menu__list-link--active');
        })
    }

    function showMenu(i) {
       menuLink[i].classList.add('debts-menu__list-link--active');
    }

  
if(debtsMenu){
    debtslist.addEventListener('click', (e) => {
        const target = e.target;
        if(target && target.classList.contains('debts-menu__list-link')){
            menuLink.forEach((item, i) => {
                if(target == item){
                    hideMenu();
                    showMenu(i);
                }
            })
        }
    })

    hideMenu();
    showMenu(0);

}
   

if(debtsMenu){
    window.addEventListener('scroll', () => {
        if(scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 500){
            debtslist.style.display = 'none';
            debtsMenu.classList.add('debts-menu__hide');
        }else{
            debtslist.style.display = 'flex';
            debtsMenu.classList.remove('debts-menu__hide');
        }
    })
}
   




const tabsItem = document.querySelector('.tabs__item');
const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
const tabsContent = document.querySelectorAll('.tabs__content');

function tabsHide(){
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtn.forEach(btn =>{
        btn.classList.remove('active');
    })
}
function tabsShow(i){
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabsItemBtn[i].classList.add('active');
}



if(tabsItem && tabsItemBtn && tabsContent){
    tabsItem.addEventListener('click', (e)=>{
        const target = e.target;
        
        if(target && target.classList.contains('tabs__item-btn')){
            tabsItemBtn.forEach((item, i)=>{
                if(target == item){
                    tabsHide();
                    tabsShow(i);
                }
               
            })
           
        }
    })
    
    tabsHide();
    tabsShow(0);
      
}

const menu = document.querySelector('.menu');
const mobile = document.querySelector('.nav-icon');


mobile.addEventListener('click', function() {
    this.classList.toggle('nav-icon--active')
    menu.classList.toggle('nav--active');
    document.body.classList.toggle('overflow');

    
});




const tabsItemEducation = document.querySelector('.advocate-education__inner');
const tabsItemBtnEducation = document.querySelectorAll('.advocate-education__item');
const tabsContentEducation = document.querySelectorAll('.advocate-education__content-img');

function tabsHideEducation(){
    tabsContentEducation.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtnEducation.forEach(btn =>{
        btn.classList.remove('advocate-education__item--active');
    })
}
function tabsShowEducation(i){
    tabsContentEducation[i].classList.add('show');
    tabsContentEducation[i].classList.remove('hide');
    tabsItemBtnEducation[i].classList.add('advocate-education__item--active');
}



if(tabsItemEducation && tabsItemBtnEducation && tabsContentEducation){
    tabsItemEducation.addEventListener('click', (e)=>{
        const target = e.target;
       
        if(target && target.classList.contains('advocate-education__item')){
            tabsItemBtnEducation.forEach((item, i)=>{
                if(target == item){
                    tabsHideEducation();
                    tabsShowEducation(i);
                }
            })
           
        }
    })
    
    tabsHideEducation();
    tabsShowEducation(0);
      
}



const tabsItemThanks = document.querySelector('.advocate-thanks__inner');
const tabsItemBtnThanks = document.querySelectorAll('.advocate-thanks__item');
const tabsContentThanks = document.querySelectorAll('.advocate-thanks__content-img');

function tabsHideThanks(){
    tabsContentThanks.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtnThanks.forEach(btn =>{
        btn.classList.remove('advocate-thanks__item--active');
    })
}
function tabsShowThanks(i){
    tabsContentThanks[i].classList.add('show');
    tabsContentThanks[i].classList.remove('hide');
    tabsItemBtnThanks[i].classList.add('advocate-thanks__item--active');
}



if(tabsItemThanks && tabsItemBtnThanks && tabsContentThanks){
    tabsItemThanks.addEventListener('click', (e)=>{
        const target = e.target;
       
        if(target && target.classList.contains('advocate-thanks__item')){
            tabsItemBtnThanks.forEach((item, i)=>{
                if(target == item){
                    tabsHideThanks();
                    tabsShowThanks(i);
                }
            })
           
        }
    })
    
    tabsHideThanks();
    tabsShowThanks(0);
      
}




 
});