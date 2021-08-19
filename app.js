const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
const menuHome = document.querySelector('#menuHome');
const menuAbout = document.querySelector('#menuAbout');
const menuProjects = document.querySelector('#menuProjects');
const menuContact = document.querySelector('#menuContact');

btnHamburger.addEventListener('click',function(){

    if(header.classList.contains('open')){ // Close Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }
    else{ //Open Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
});

menuHome.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
        })
    }
});

menuAbout.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
        })
    }
});

menuProjects.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
        })
    }
});


menuContact.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
        })
    }
});