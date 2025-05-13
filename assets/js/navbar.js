//sidebar handling
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
    }
})

//darkmode
function viewMode() {
    const body = document.body;
    if (!localStorage.getItem("darkmode"))
        localStorage.setItem("darkmode","false");
    else if (localStorage.getItem("darkmode") == "true") {
        body.classList.add("darkmode");
        toggleLightDark();
    }
}
function changeLight() {
    const body = document.body;
    if (body.classList.toggle("darkmode")) 
        localStorage.setItem("darkmode", "true");
    else localStorage.setItem("darkmode", "false")
    toggleLightDark();
}
function toggleLightDark() {
    document.querySelectorAll(".color-light, .color-dark").forEach(element => {
        element.classList.toggle("color-light");
        element.classList.toggle("color-dark");
    }); 
}