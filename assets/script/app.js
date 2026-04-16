'use strict';

// QuerySelectors()
const mainModal = document.querySelector('.modal');
const infoBox = document.getElementById('cookieModal');
const optionsBox = document.getElementById('settingsModal');
const acceptAllBtn = document.querySelector('.primary');
const openSettingsBtn = document.querySelector('.outline');
const optBrowser = document.getElementById('browser');
const optOS = document.getElementById('os');
const optWidth = document.getElementById('width');
const optHeight = document.getElementById('height');
const saveSettingsBtn = document.getElementById("saveSettings");

const cookieTime = 20;

// Set and get function 
function setCookie(key, value) {
    document.cookie = key + "=" + value + "; max-age=" + cookieTime + "; path=/";
}

function getCookie(key) {
    const allCookies = document.cookie.split(";");

    for (let part of allCookies) {
        let clean = part.trim(); // remove space
        if (clean.indexOf(key + "=") === 0) {
            return clean.slice(key.length + 1);
        }
    }
    return null;
}

// getBrowser() and getOS() examines the browser’s navigator.userAgent string and returns the name of the web browser the user is using (such as Firefox, Chrome, or Safari, and Windows, MacOS, or Linux), or "Other" if it cannot be identified.
function getBrowser() {
    const agent = navigator.userAgent;

    if (agent.includes("Firefox")) {
        return "Firefox";
    }
    if (agent.includes("Chrome")) {
        return "Chrome";
    }
    if (agent.includes("Safari")) {
        return "Safari";
    }
    return "Other";
}

function getOS() {
    const agent = navigator.userAgent;

    if (agent.includes("Windows")) {
        return "Windows";
    }
    if (agent.includes("Mac")) {
        return "MacOS";
    }
    if (agent.includes("Linux")) {
        return "Linux";
    }
    return "Other";
}

// When the page loads, this code checks if cookies are allowed and shows the cookie popup after a short delay if the user has not chosen yet.
window.addEventListener("load", function () {
    const existing = getCookie("userChoice");

    if (!navigator.cookieEnabled) {
        console.log("Cookies are off");
        return;
    }
    if (!existing) {
        setTimeout(function () {
            mainModal.style.display = "flex";
            infoBox.style.display = "flex";
            optionsBox.style.display = "none";
        }, 3000);
    }
});

// This code runs when the “Accept all” button is clicked, saves the user’s browser, operating system, and screen size as cookies, records that the user accepted all cookies, and then closes the cookie popup.
acceptAllBtn.onclick = function () {
    setCookie("browser", getBrowser());
    setCookie("os", getOS());
    setCookie("width", screen.width);
    setCookie("height", screen.height);

    setCookie("userChoice", "all");

    mainModal.style.display = "none";
};

// open setting
openSettingsBtn.onclick = function () {
    infoBox.style.display = "none";
    optionsBox.style.display = "flex";
};

// Save setting
saveSettingsBtn.onclick = function () {
    let savedSomething = false;

    if (optBrowser.checked) {
        setCookie("browser", getBrowser());
        savedSomething = true;
    }   
    if (optOS.checked) {
        setCookie("os", getOS());
        savedSomething = true;
    }
    if (optWidth.checked) {
        setCookie("width", screen.width);
        savedSomething = true;
    }
    if (optHeight.checked) {
        setCookie("height", screen.height);
        savedSomething = true;
    }
    setCookie("userChoice", savedSomething ? "custom" : "none");

    mainModal.style.display = "none";
};