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

    const originalOrder = Array.from(portfolioItems);

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");

            const visibleItems = [];
            const hiddenItems = [];

            portfolioItems.forEach((item) => {
                const itemClasses = item.className.split(" ");
                const shouldShowItem = filterValue === "all" || itemClasses.includes(filterValue);

                if (shouldShowItem) {
                    visibleItems.push(item);
                } else {
                    hiddenItems.push(item);
                }

                fadeElement(item, shouldShowItem);
            });

            // Sort and update the container with visible items first, then hidden items
            const container = document.getElementById("portfolio-items");
            container.innerHTML = "";

            visibleItems.sort((a, b) => {
                const orderA = originalOrder.indexOf(a);
                const orderB = originalOrder.indexOf(b);
                return orderA - orderB;
            });

            visibleItems.forEach((item) => {
                container.appendChild(item);
            });

            hiddenItems.forEach((item) => {
                container.appendChild(item);
            });
        });
    });

    function fadeElement(element, shouldShow) {
        let opacity = shouldShow ? 1 : 0;
        let interval;

        // Increase or decrease opacity smoothly
        interval = setInterval(() => {
            element.style.opacity = opacity.toFixed(2);
            opacity = shouldShow ? opacity + 0.1 : opacity - 0.1;

            if ((shouldShow && opacity > 1) || (!shouldShow && opacity < 0)) {
                clearInterval(interval);

                // Set final opacity to avoid rounding issues
                element.style.opacity = shouldShow ? 1 : 0;

                // Set pointer events based on visibility
                element.style.pointerEvents = shouldShow ? "auto" : "none";

                // Toggle the 'hidden' class
                element.classList.toggle("hidden", !shouldShow);
            }
        }, 50); // Adjust the interval based on your preference
    }
});

















