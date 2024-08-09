document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('splash-screen').classList.add('fade-out');
    }, 3000);

    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'flex';
    }, 4000); // Give extra time for the fade-out transition
});

gsap.fromTo('.displacement', {
  r: 0,
}, {
  r: 300,
  repeat: -1,
  duration: 6,
  ease: 'power3.inOut',
  yoyo: true
})









document.querySelector('.select-language').addEventListener('click', function(event) {
    document.querySelector('.languages').classList.toggle('show');
    event.stopPropagation(); // Prevent click event from bubbling up to the document
});

document.addEventListener('click', function(event) {
    if (!document.querySelector('.languages').contains(event.target) && !document.querySelector('.select-language').contains(event.target)) {
        document.querySelector('.languages').classList.remove('show');
    }
});

document.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('.languages').classList.remove('show');
    }
});






document.querySelector('.select-item').addEventListener('click', function(event) {
    const topMenu = document.querySelector('.top-menu');
    const faBars = document.querySelector('.fa-bars');
    const faXmark = document.querySelector('.fa-xmark');

    topMenu.classList.toggle('show');

    if (topMenu.classList.contains('show')) {
        faBars.classList.remove('active');
        faXmark.classList.add('active');
    } else {
        faBars.classList.add('active');
        faXmark.classList.remove('active');
    }

    event.stopPropagation(); // Prevent click event from bubbling up to the document
});

document.addEventListener('click', function(event) {
    const topMenu = document.querySelector('.top-menu');
    const faBars = document.querySelector('.fa-bars');
    const faXmark = document.querySelector('.fa-xmark');

    if (!topMenu.contains(event.target) && !document.querySelector('.select-item').contains(event.target)) {
        topMenu.classList.remove('show');
        faBars.classList.add('active');
        faXmark.classList.remove('active');
    }
});

document.addEventListener('scroll', function() {
    const topMenu = document.querySelector('.top-menu');
    const faBars = document.querySelector('.fa-bars');
    const faXmark = document.querySelector('.fa-xmark');

    if (window.scrollY > 100) {
        topMenu.classList.remove('show');
        faBars.classList.add('active');
        faXmark.classList.remove('active');
    }
});




function copyToClipboard() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const notification = document.getElementById('notification');
                notification.style.display = 'block';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 2000); // Hide notification after 2 seconds
            }).catch(err => {
                console.error('Error copying text: ', err);
            });
        }

        document.getElementById('copyButton').addEventListener('click', copyToClipboard);
    




document.getElementById('shareButton').addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Check this out!',
            text: 'I found this interesting content and thought you might like it.',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(err => {
            console.error('Error sharing:', err);
        });
    } else {
        alert('Web Share API is not supported in this browser.');
    }
});