document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            sections.forEach(section => section.style.display = "none");
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).style.display = "block";
        });
    });

    // 默认显示第一个部分
    if (sections.length > 0) {
        sections[0].style.display = "block";
    }
});
