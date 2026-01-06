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

    document.querySelectorAll('.navbar a').forEach(link => {
        link.onclick = () => {
            navbar.classList.remove('active');
            menuBtn.classList.remove('fa-times');
        }
    });

    // Slider Produk
    const titleEl = document.querySelector('#product-title');
    const descEl = document.querySelector('#product-description');
    const waLinkEl = document.querySelector('#whatsapp-link');
    const slides = document.querySelectorAll('.slide');

    const products = [
        { 
            name: "Kerupuk Kalsium Original", 
            desc: "Rasa gurih klasik yang autentik, cemilan sehat kaya kalsium.", 
            msg: "Halo, saya ingin memesan Kerupuk Kalsium Original" 
        },
        { 
            name: "Pedas Daun Jeruk", 
            desc: "Sensasi pedas nendang dengan aroma daun jeruk yang segar.", 
            msg: "Halo, saya ingin memesan Kerupuk Pedas Daun Jeruk" 
        }
    ];

    let currentIndex = 0;

    function renderSlide(index) {
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        // Update Slide Visual
        slides.forEach(s => s.classList.remove('active-slide'));
        slides[currentIndex].classList.add('active-slide');

        // Update Text Content
        if(titleEl) titleEl.textContent = products[currentIndex].name;
        if(descEl) descEl.textContent = products[currentIndex].desc;

        // Update WA Link dengan Pesan Khusus
        if(waLinkEl) {
            const phoneNumber = "+6287754104332";
            const message = encodeURIComponent(products[currentIndex].msg);
            waLinkEl.href = `https://wa.me/${phoneNumber}?text=${message}`;
        }
    }

    window.changeSlide = (n) => renderSlide(currentIndex + n);
    renderSlide(0); 
});