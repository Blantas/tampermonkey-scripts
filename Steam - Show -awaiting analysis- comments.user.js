// ==UserScript==
// @name         Steam - Show "awaiting analysis" comments
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ignores "This comment is awaiting analysis" and makes all comments visible by default.
// @author       Karoll
// @match        https://steamcommunity.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    if(typeof g_rgForumTopicCommentThreads === 'undefined')
        return;

    let checkComments = () => {
        console.log("Checking for hidden comments...");
        let topic = Object.keys(g_rgForumTopicCommentThreads)[0];
        document.querySelectorAll('.commentthread_comment').forEach(i => {
            if(i.querySelector('.needs_content_check')){
                i.querySelector('.needs_content_check').outerHTML = g_rgForumTopicCommentThreads[topic].GetRawComment(i.id.substr(8)).text.replace(/\n/g, "<br />");
            }
        });
    }

    (new MutationObserver(checkComments)).observe(document.querySelector('.forum_paging_summary'), {characterDataOldValue: true, subtree: true, childList: true, characterData: true});

    checkComments();
})();