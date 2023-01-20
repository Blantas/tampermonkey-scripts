// ==UserScript==
// @name         Remove owned game listings on DIG
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Karoll
// @match        *://www.dailyindiegame.com/*
// @match        *://dailyindiegame.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dailyindiegame.com
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';
    GM_registerMenuCommand("Hide owned games", function(){
        document.querySelectorAll('#TableKeys tr').forEach(function(i, e){
            if(i.innerHTML.includes('✔'))
                i.remove();
        });
    });
})();
