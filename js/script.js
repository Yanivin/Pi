let toggle = false;
let scrollToggle = false;
let scrollAmount = false;
document.getElementById('sidebarToggler').addEventListener('click', function () {
    toggle = !toggle;

    if (toggle) {
        document.getElementById('sidebar').style.width = "6.5rem";
        document.getElementById('navbar').classList.add('scrolled');
        document.getElementById('sidebarButton').classList.add('change');
        document.querySelectorAll('.side-item').forEach(item => {
            item.style.fontSize = "1.75rem";
        });
        document.querySelectorAll('.side-link').forEach(item => {
            item.tabIndex = "0";
        });
        return scrollToggle = true;
    } else {
        document.getElementById('sidebar').style.width = "0";
        document.getElementById('sidebarButton').classList.remove('change');
        if (scrollAmount === false) {
            navbar.classList.remove('scrolled');
        }
        document.querySelectorAll('.side-item').forEach(item => {
            item.style.fontSize = "0rem";
        });
        document.querySelectorAll('.side-link').forEach(item => {
            item.tabIndex = "-1";
        });
        return scrollToggle = false;
    }
});


window.addEventListener('scroll', function scrollValue() {
    var scroll = window.scrollY;
    if (scroll < 10) {
        if (scrollToggle) {
            return scrollAmount = false;
        } else {
            navbar.classList.remove('scrolled');
            return scrollAmount = false;
        }
    } else {
        navbar.classList.add('scrolled');
        return scrollAmount = true;
    }
});
