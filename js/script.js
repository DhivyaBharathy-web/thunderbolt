document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentImage = 0;

    function updateCarousel() {
        // Calculate the translateX value based on the current image
        const translateXValue = -currentImage * 100; // Change to 100% since each image takes full width
        carouselWrapper.style.transform = `translateX(${translateXValue}%)`;
    }

    function showPrevious() {
        currentImage = (currentImage - 1 + images.length) % images.length;
        updateCarousel();
    }

    function showNext() {
        currentImage = (currentImage + 1) % images.length;
        updateCarousel();
    }

    prevButton.addEventListener('click', showPrevious);
    nextButton.addEventListener('click', showNext);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.slider-section');
    const navButtons = document.querySelectorAll('.nav-btn');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentSection = 0;
    let currentSlide = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.toggle('active', i === index);
        });
        currentSection = index;
        currentSlide = 0;
        updateSlides();
    }

    function updateSlides() {
        const activeSection = sections[currentSection];
        const slides = activeSection.querySelectorAll('.slider-item');
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
    }

    function nextSlide() {
        const activeSection = sections[currentSection];
        const slides = activeSection.querySelectorAll('.slider-item');
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        const activeSection = sections[currentSection];
        const slides = activeSection.querySelectorAll('.slider-item');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => showSection(index));
    });

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Initialize the first section and slide
    showSection(0);
});
