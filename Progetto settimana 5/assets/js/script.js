window.addEventListener('scroll', (scrollY) => {
    const header = document.getElementById("header");
    const headerBtn = document.getElementById("headerBtn");
    if (window.scrollY > 575) {
        header.classList.remove("header");
        headerBtn.classList.remove("blackButton");
        header.classList.add("headerScorrevole");
        headerBtn.classList.add("headerButtonScorrevole");

    } else {
        header.classList.remove("headerScorrevole");
        headerBtn.classList.remove("headerButtonScorrevole");
        header.classList.add("header");
        headerBtn.classList.add("blackButton");
    }
});

