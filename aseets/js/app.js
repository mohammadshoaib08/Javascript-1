
// =================================
// 1. DARK / LIGHT MODE
// =================================

const themeToggle = document.getElementById("themeToggle");

const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";

root.dataset.theme = savedTheme;

if (themeToggle) {
    themeToggle.textContent =
        savedTheme === "dark" ? "☀" : "☾";
}

themeToggle?.addEventListener("click", () => {

    const currentTheme = root.dataset.theme;

    const newTheme =
        currentTheme === "dark" ? "light" : "dark";

    root.dataset.theme = newTheme;

    localStorage.setItem("theme", newTheme);

    themeToggle.textContent =
        newTheme === "dark" ? "☀" : "☾";

});


// =================================
// 2. MULTIPLE COLOR OPTIONS
// =================================

const colorTheme = document.getElementById("colorTheme");

const savedColor = localStorage.getItem("color") || "blue";

root.dataset.color = savedColor;

if (colorTheme) {
    colorTheme.value = savedColor;
}

colorTheme?.addEventListener("change", () => {

    const selectedColor = colorTheme.value;

    root.dataset.color = selectedColor;

    localStorage.setItem("color", selectedColor);

});


// =================================
// 3. SIDEBAR OPEN / CLOSE
// =================================

const sidebar = document.getElementById("sidebar");

const menuToggle = document.getElementById("menuToggle");

const closeSidebar = document.getElementById("closeSidebar");

const overlay = document.getElementById("sidebarOverlay");

function openSidebar() {

    sidebar?.classList.add("open");

    overlay?.classList.add("show");

}

function hideSidebar() {

    sidebar?.classList.remove("open");

    overlay?.classList.remove("show");

}

menuToggle?.addEventListener("click", openSidebar);

closeSidebar?.addEventListener("click", hideSidebar);

overlay?.addEventListener("click", hideSidebar);


// Close sidebar after clicking a link

document.querySelectorAll(".sidebar a").forEach(link => {

    link.addEventListener("click", hideSidebar);

});


// =================================
// 4. FAQ ACCORDION
// =================================

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const faqItem = question.closest(".faq-item");

        // Close other FAQ items
        document.querySelectorAll(".faq-item").forEach(item => {

            if (item !== faqItem) {
                item.classList.remove("open");
            }

        });

        // Toggle selected FAQ
        faqItem.classList.toggle("open");

    });

});


// =================================
// 5. SCROLL TO TOP BUTTON
// =================================

const scrollTop =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTop?.classList.add("show");

    } else {

        scrollTop?.classList.remove("show");

    }

});

scrollTop?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// =================================
// 6. STICKY NAVBAR EFFECT
// =================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar?.classList.add("scrolled");

    } else {

        navbar?.classList.remove("scrolled");

    }

});


// =================================
// 7. DYNAMIC TYPING ANIMATION
// =================================

const typingText =
    document.getElementById("typingText");

if (typingText) {

    const words = [

        "Web Developer",

        "Creative Learner",

        "Problem Solver",

        "Technology Enthusiast"

    ];

    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        typingText.textContent =
            currentWord.substring(0, letterIndex);

        if (!deleting && letterIndex < currentWord.length) {

            letterIndex++;

            setTimeout(typeEffect, 100);

        }

        else if (deleting && letterIndex > 0) {

            letterIndex--;

            setTimeout(typeEffect, 50);

        }

        else {

            deleting = !deleting;

            if (!deleting) {

                wordIndex =
                    (wordIndex + 1) % words.length;

            }

            setTimeout(typeEffect, 700);

        }

    }

    typeEffect();

}


// =================================
// 8. CURRENT YEAR
// =================================

const yearElements =
    document.querySelectorAll("#year");

yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});
