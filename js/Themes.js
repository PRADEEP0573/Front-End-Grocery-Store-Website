function changeTheme(color) {
    const body = document.body;
    const themeName = document.getElementById("theme-name");

    if (color === "red") {
        body.classList.remove("green-theme");
        body.classList.add("red-theme");
        themeName.textContent = "Red";
    } else if (color === "green") {
        body.classList.remove("red-theme");
        body.classList.add("green-theme");
        themeName.textContent = "Green";
    }
}