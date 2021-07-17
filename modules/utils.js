const btn = document.querySelector('.btn-toggle');
const currentTheme = localStorage.getItem("theme") ?? "dark";

if(currentTheme == "dark")
    document.body.classList.add("dark-theme");

btn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if(document.body.classList.contains("dark-theme"))
        theme = "dark"
    localStorage.setItem("theme", theme);
});

/* document.querySelectorAll('a[href^="#]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
}); */