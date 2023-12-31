/*===== MENU TOGGLE =====*/
const navList = document.querySelector('.nav-list');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

// Open Menu
openMenu.addEventListener('click', () => {
    // navList.classList.toggle('open-menu');
    // toggleMenu.classList.toggle('open-menu');
    navList.style.top = "0";
});

// Close Menu
closeMenu.addEventListener('click', () => {
    // navList.classList.toggle('open-menu');
    // toggleMenu.classList.toggle('open-menu');
    navList.style.top = "-1000%";
});


/*===== UPDATE THE ELEMENT TO CURRENT YEAR =====*/
// Update the element to the current year //
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()));

/*===== SERVICE DROPDOWN =====*/
const serviceLink = document.querySelector('.service a');
const serviceList = document.querySelector('.service div');
const serviceIcon = document.querySelector('.service .chevron-up');
const nav = document.querySelector('nav');

serviceLink.addEventListener('click', () => {
    serviceList.classList.toggle('drop');
    serviceIcon.classList.toggle('rotate');

    // Hide the dropdown if you click outside the div
    window.addEventListener('click', function(e){
        if (!serviceList.contains(e.target) && !serviceLink.contains(e.target)) {
        serviceList.classList.remove('drop');
      } 
    });
});


/*===== MORE ABOUT SERVICE =====*/
const moreHeading = document.querySelector('.more h5');
const morePara = document.querySelector('.more p');
const arrowUp = document.querySelector('.chevron-up');

moreHeading.addEventListener('click', () => {
    morePara.classList.toggle('show');
    arrowUp.classList.toggle('show');
});


/*===== ADD CHATBOT =====*/
// const container = document.querySelector('.container');

// function showChatBot() {
//     let output = "";
//     output =`   <a href="#!" class="chat-bot" title="WhatsApp">
//                     <img src="/logistics/img/svg/bxl-whatsapp.svg">
//                 </a> `

//     container.innerHTML = output;
// }
// document.addEventListener('DOMContentLoaded', showChatBot);

