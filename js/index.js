burger = document.querySelector('.burger');
navList = document.querySelector('.v-class');
navRight = document.querySelector('.nav-right');
navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
    navList.classList.toggle('v-class');
    navRight.classList.toggle('v-class');
    navigation.classList.toggle('h-nav');

})
burger.addEventListener('click', () => {
    logo.classList.remove('v-class')
})