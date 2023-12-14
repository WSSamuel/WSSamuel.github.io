/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
    // Add modal code here
    const icons = document.querySelectorAll('.icon');

    icons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            const modalId = `#portfolioModal${index + 1}`;
            $(modalId).modal('show');
        });
    });

});
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");

            portfolioItems.forEach((item) => {
                const itemClasses = item.className.split(" ");
                const shouldShowItem = filterValue === "all" || itemClasses.includes(filterValue);

                if (shouldShowItem) {
                    item.style.opacity = 0; // Set initial opacity to 0 for fade-in effect

                    // Set a timeout to update the opacity and display property
                    setTimeout(() => {
                        item.style.display = "block";
                        item.style.opacity = 1; // Fade-in by setting opacity to 1
                    }, 10); // Adjust the delay based on your preference
                } else {
                    // For items that should be hidden, apply fade-out effect
                    item.style.opacity = 0;

                    // Set a timeout to update the display property after the fade-out effect
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 300); // Adjust the duration for fade-out (in milliseconds)
                }
            });
        });
    });
});



