document.addEventListener('DOMContentLoaded', function () {
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    window.addEventListener('scroll', function () {
        var stickyNavbar = document.querySelector('.sticky-top');
        if (window.scrollY > 300) {
            stickyNavbar.style.top = '0px';
        } else {
            stickyNavbar.style.top = '-100px';
        }
    });

    // Dropdown on mouse hover
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        var dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        var dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdown.addEventListener('mouseenter', function () {
            dropdown.classList.add('show');
            dropdownToggle.setAttribute('aria-expanded', 'true');
            dropdownMenu.classList.add('show');
        });
        dropdown.addEventListener('mouseleave', function () {
            dropdown.classList.remove('show');
            dropdownToggle.setAttribute('aria-expanded', 'false');
            dropdownMenu.classList.remove('show');
        });
    });

    // Back to top button
    window.addEventListener('scroll', function () {
        var backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    document.querySelector('.back-to-top').addEventListener('click', function () {
        document.documentElement.animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    });

    // Facts counter
    var counterUpElements = document.querySelectorAll('[data-toggle="counter-up"]');
    counterUpElements.forEach(function (element) {
        var delay = element.getAttribute('data-delay') || 10;
        var time = element.getAttribute('data-time') || 2000;
        new Waypoint({
            element: element,
            handler: function () {
                counterUp(element, {
                    delay: delay,
                    time: time
                });
                this.destroy();
            },
            offset: 'bottom-in-view'
        });
    });

    // Your other code...

    // Add the functions showOptions, filterOptions, and other code related to car and track selection here.

    // End of your other code...
});
