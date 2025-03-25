document.addEventListener('DOMContentLoaded', function() {
    // Select the menu icon and sidebar links
    const menuIcon = document.querySelector('.ri-menu-line');
    const sidebarLinks = document.querySelectorAll('.right-sidebar a');

    // Add click event listener to menu icon
    menuIcon.addEventListener('click', function() {
        // Toggle visibility of each sidebar link
        sidebarLinks.forEach(link => {
            if (link.style.visibility === 'visible' || link.style.visibility === '') {
                link.style.visibility = 'hidden';
            } else {
                link.style.visibility = 'visible';
            }
        });

        // Optional: Add a visual effect to the menu icon when menu is open
        menuIcon.classList.toggle('menu-open');
    });
});
