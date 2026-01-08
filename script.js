document.addEventListener('DOMContentLoaded', () => {
    // Navigasi Mobile
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');

    if(menuBtn) {
        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
            menuBtn.classList.toggle('fa-times');
        }
    }

    window.onscroll = () => {
        if(navbar) navbar.classList.remove('active');
        if(menuBtn) menuBtn.classList.remove('fa-times');
    }

    // Logika Slider Produk Tengah
    const slides = document.querySelectorAll('.slide');
    const titleEl = document.querySelector('#product-title');
    const descEl = document.querySelector('#product-description');
    const waLinkEl = document.querySelector('#whatsapp-link');

    const products = [
        { 
            name: "Kalsium Original", 
            desc: "Rasa gurih klasik yang autentik, cemilan sehat kaya kalsium.", 
            msg: "Halo Admin, saya ingin memesan Kerupuk Kalsium Original" 
        },
        { 
            name: "Pedas Daun Jeruk", 
            desc: "Sensasi pedas nendang dengan aroma daun jeruk yang segar.", 
            msg: "Halo Admin, saya ingin memesan Kerupuk Pedas Daun Jeruk" 
        }
    ];

    let currentIndex = 0;

    function renderSlide(index) {
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        slides.forEach(s => s.classList.remove('active-slide'));
        slides[currentIndex].classList.add('active-slide');

        if(titleEl) titleEl.textContent = products[currentIndex].name;
        if(descEl) descEl.textContent = products[currentIndex].desc;
        if(waLinkEl) {
            waLinkEl.href = `https://wa.me/+6287754104332?text=${encodeURIComponent(products[currentIndex].msg)}`;
        }
    }

    window.changeSlide = (n) => renderSlide(currentIndex + n);
    renderSlide(0);
});