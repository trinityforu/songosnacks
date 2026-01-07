document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigasi Mobile
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');

    if(menuBtn) {
        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
            menuBtn.classList.toggle('fa-times');
        }
    }

    // Tutup menu saat klik link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.onclick = () => {
            navbar.classList.remove('active');
            menuBtn.classList.remove('fa-times');
        }
    });

    // 2. Slider Produk Tengah
    const slides = document.querySelectorAll('.slide');
    const titleEl = document.querySelector('#product-title');
    const descEl = document.querySelector('#product-description');
    const waLinkEl = document.querySelector('#whatsapp-link');

    const products = [
        { 
            name: "Kalsium Original", 
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

        // Update Gambar
        slides.forEach(s => s.classList.remove('active-slide'));
        slides[currentIndex].classList.add('active-slide');

        // Update Teks & Link WA
        if(titleEl) titleEl.textContent = products[currentIndex].name;
        if(descEl) descEl.textContent = products[currentIndex].desc;
        if(waLinkEl) {
            const phoneNumber = "+6287754104332";
            waLinkEl.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(products[currentIndex].msg)}`;
        }
    }

    // Fungsi global untuk tombol HTML
    window.changeSlide = (n) => renderSlide(currentIndex + n);
    
    // Inisialisasi slide pertama
    renderSlide(0);
});