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