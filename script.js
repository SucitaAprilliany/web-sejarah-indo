var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const floatingElements = document.querySelectorAll('.floating-element');

    floatingElements.forEach(element => {
        // Animasi bergoyang perlahan
        setInterval(() => {
            const smallRandomX = (Math.random() - 0.5) * 10;
            const smallRandomY = (Math.random() - 0.5) * 10;
            const smallRandomRotate = (Math.random() - 0.5) * 5;
            element.style.transform = `translate(${smallRandomX}px, ${smallRandomY}px) rotate(${smallRandomRotate}deg)`;
        }, 3000);

        // Efek hover
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'transform 0.3s ease';
            element.style.transform = 'scale(1.1) rotate(5deg)';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transition = 'transform 0.3s ease';
            element.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});
