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

    let animationFrame;
    let isAnimating = false;

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (isAnimating) return; // Do nothing if an animation is already in progress

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
        isAnimating = true; // Set the flag to indicate that an animation is in progress

        let opacity = shouldShow ? 0 : 1;

        function animate() {
            element.style.opacity = opacity.toFixed(2);
            opacity = shouldShow ? opacity + 0.05 : opacity - 0.05;

            if ((shouldShow && opacity >= 1) || (!shouldShow && opacity <= 0)) {
                element.style.opacity = shouldShow ? 1 : 0;
                element.style.pointerEvents = shouldShow ? "auto" : "none";
                element.classList.toggle("hidden", !shouldShow);

                if (shouldShow) {
                    element.style.height = "auto";
                } else {
                    setTimeout(() => {
                        element.style.height = "0";
                    }, 300);
                }

                isAnimating = false; // Reset the flag after the animation completes
                return;
            }

            animationFrame = requestAnimationFrame(animate);
        }

        animate();
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide-item');
hiddenElements.forEach((el) => observer.observe(el));

$(window).on('load', function () {
    $('.loader-wrapper').delay(500).fadeOut(1000);
});


















