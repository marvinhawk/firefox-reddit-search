browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.match("reddit.com/")) {
        browser.browserAction.enable(tabId);
    } else {
        browser.browserAction.disable(tabId);
    }
});