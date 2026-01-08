document.addEventListener('DOMContentLoaded', () => {
    // Navigasi Mobile (KODE ASLI ANDA)
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

    // Logika Slider Produk Tengah (KODE ASLI ANDA)
    const slides = document.querySelectorAll('.slide');
    const titleEl = document.querySelector('#product-title');
    const descEl = document.querySelector('#product-description');
    const waLinkEl = document.querySelector('#whatsapp-link');

    const products = [
        { name: "Kalsium Original", desc: "Rasa gurih klasik yang autentik, cemilan sehat kaya kalsium.", msg: "Halo, saya ingin memesan Kerupuk Kalsium Original" },
        { name: "Pedas Daun Jeruk", desc: "Sensasi pedas nendang dengan aroma daun jeruk yang segar.", msg: "Halo, saya ingin memesan Kerupuk Pedas Daun Jeruk" }
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
        if(waLinkEl) waLinkEl.href = `https://wa.me/+6282229504003?text=${encodeURIComponent(products[currentIndex].msg)}`;
    }

    window.changeSlide = (n) => renderSlide(currentIndex + n);
    renderSlide(0);

    // LOGIKA DRAG & INDIKATOR SCROLL BAHAN (FITUR TAMBAHAN)
    const slider = document.querySelector('.ing-slider');
    const scrollBar = document.querySelector('#scroll-bar');
    let isDown = false; let startX; let scrollLeft;

    if(slider && scrollBar) {
        // Update posisi garis penanda saat scroll
        const updateIndicator = () => {
            const scrollPercentage = (slider.scrollLeft / (slider.scrollWidth - slider.clientWidth)) * 70;
            scrollBar.style.left = scrollPercentage + '%';
        };

        slider.addEventListener('scroll', updateIndicator);

        // Fitur Drag (Klik & Geser)
        slider.addEventListener('mousedown', (e) => {
            isDown = true; slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => { isDown = false; slider.style.cursor = 'grab'; });
        slider.addEventListener('mouseup', () => { isDown = false; slider.style.cursor = 'grab'; });

        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; 
            slider.scrollLeft = scrollLeft - walk;
        });
    }
});