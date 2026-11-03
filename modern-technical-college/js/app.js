document.addEventListener("DOMContentLoaded", () => {

    // เมนูมือถือ
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            const hidden = mobileMenu.classList.toggle("hidden");

            menuButton.setAttribute(
                "aria-expanded",
                String(!hidden)
            );
        });
    }

    // แสดงปี พ.ศ.
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear() + 543;
    }

    // แสดงไอคอน
    if (window.lucide) {
        lucide.createIcons();
    }

});