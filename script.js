let visitor = localStorage.getItem("visitorName") || "";



function enterWebsite() {

    const nameInput = document.getElementById("visitorName");
    const errorMessage = document.getElementById("errorMessage");

    if (!nameInput) {
        return;
    }

    visitor = nameInput.value.trim();

    
    if (visitor === "") {

        errorMessage.textContent =
            "Please enter your name first. 🥹💗";

        nameInput.focus();

        return;
    }

    
    localStorage.setItem("visitorName", visitor);

    
    window.location.href = "welcome.html";
}



function goToPage(page) {

    window.location.href = page;
}



document.addEventListener("DOMContentLoaded", function () {

    const name = localStorage.getItem("visitorName") || "";

    const welcomeTitle = document.getElementById("welcomeTitle");
    const pictureGreeting = document.getElementById("pictureGreeting");
    const wishGreeting = document.getElementById("wishGreeting");
    const nameInput = document.getElementById("visitorName");

    if (welcomeTitle && name) {
        welcomeTitle.textContent = "Hello, " + name + "! 💗";
    }

    if (pictureGreeting && name) {
        pictureGreeting.textContent =
            "Look what Junior has for you, " + name + "! 💕";
    }

    if (wishGreeting && name) {
        wishGreeting.textContent =
            "This final surprise is specially for you, " +
            name + ". Enjoy every moment! 💙";
    }

    
    if (nameInput && name) {
        nameInput.value = name;
    }

    
    if (nameInput) {

        nameInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                enterWebsite();
            }

        });

    }

    startFloatingHearts();

});



function startFloatingHearts() {

    const heartSymbols = ["💗", "💙", "💕", "🩵", "✨"];

    setInterval(function () {

        const heart = document.createElement("span");

        heart.className = "heart";

        heart.textContent =
            heartSymbols[
                Math.floor(Math.random() * heartSymbols.length)
            ];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        
        setTimeout(function () {
            heart.remove();
        }, 10000);

    }, 700);

}