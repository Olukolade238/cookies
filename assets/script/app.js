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