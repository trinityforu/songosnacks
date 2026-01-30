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

    // LOGIKA DRAG & INDIKATOR SCROLL BAHAN
    const slider = document.querySelector('.ing-slider');
    const scrollBar = document.querySelector('#scroll-bar');
    let isDown = false;
    let startX;
    let scrollLeft;

    if(slider && scrollBar) {
        const updateIndicator = () => {
            const scrollPercentage = (slider.scrollLeft / (slider.scrollWidth - slider.clientWidth)) * 70;
            scrollBar.style.left = scrollPercentage + '%';
        };

        slider.addEventListener('scroll', updateIndicator);

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; 
            slider.scrollLeft = scrollLeft - walk;
        });
    }
});