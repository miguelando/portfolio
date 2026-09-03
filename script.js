document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(13, 13, 13, 0.98)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(to bottom, rgba(13, 13, 13, 0.95), transparent)';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.section-title, .sumario-item, .sobre-text p, .tecnica-card, .habilidades-list li, .contato-item, .processos-text p, .experiencia-card, .video-item');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.4s ease ${(index % 10) * 0.03}s, transform 0.4s ease ${(index % 10) * 0.03}s`;
        observer.observe(el);
    });
    
    document.addEventListener('scroll', function() {
        document.querySelectorAll('.animate-in').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    });
    
    const photoStack = document.querySelector('.photo-stack');
    if (photoStack) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const rotate = -5 + (scrollY * 0.02);
            photoStack.style.transform = `rotate(${Math.min(rotate, 10)}deg)`;
        });
    }
    
    const decorativeStar = document.querySelector('.decorative-star');
    if (decorativeStar) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const rotate = scrollY * 0.1;
            decorativeStar.style.transform = `translateY(-50%) rotate(${rotate}deg)`;
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const tecnicasCards = document.querySelectorAll('.tecnica-card');
    tecnicasCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            tecnicasCards.forEach((c, i) => {
                if (i !== index) {
                    c.style.opacity = '0.5';
                    c.style.transform = 'scale(0.98)';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            tecnicasCards.forEach(c => {
                c.style.opacity = '1';
                c.style.transform = 'scale(1)';
            });
        });
    });
    
    const ferramentaIcons = document.querySelectorAll('.ferramenta-icon');
    ferramentaIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(139, 26, 26, 0.5)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, var(--red-primary), var(--red-accent));
        z-index: 1001;
        transition: width 0.1s;
        width: 0%;
    `;
    document.body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });
    
    const prototipoImgs = document.querySelectorAll('.prototipo-img');
    prototipoImgs.forEach(img => {
        img.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        img.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.1s ease';
        });
    });
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            galleryItems.forEach(gi => {
                if (gi !== this) {
                    gi.style.filter = 'blur(2px) brightness(0.7)';
                    gi.style.transform = 'scale(0.98)';
                }
            });
        });
        
        item.addEventListener('mouseleave', function() {
            galleryItems.forEach(gi => {
                gi.style.filter = 'none';
                gi.style.transform = 'scale(1)';
            });
        });
    });
    
    const sobrePhotos = document.querySelectorAll('.sobre-photo-1, .sobre-photo-2');
    sobrePhotos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });
    
    const videoItems = document.querySelectorAll('.video-item video');
    videoItems.forEach(video => {
        video.addEventListener('play', function() {
            videoItems.forEach(v => {
                if (v !== this) {
                    v.pause();
                }
            });
        });
    });
    
    const lazyImages = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });
    
    lazyImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.98)';
        img.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        imageObserver.observe(img);
    });
});
