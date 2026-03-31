function toggleMenu() {
    const menu = document.getElementById('navOverlay');
    menu.classList.toggle('active');
    
    if(menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}
