
// Get popup elements from HTML and save to variables

let popup = document.getElementById("page");

let searchButton = document.getElementById("searchButton");

let searchField = document.getElementById("searchField");

let subURL = "";

let baseURL = "https://duckduckgo.com/?q=site%3Areddit.com/";

popup.onload = function() {
	// Fetch URL of active tab
	browser.tabs.query({'active': true, 'currentWindow': true}, function(tabs){
		let subreddit = /\/(r\/.*?)(?=\/)/;
		let currentSub = subreddit.exec(tabs[0].url);

		if (currentSub) {
			currentSubURL = currentSub[1];
			subURL = currentSubURL;
			searchField.placeholder = "Search " + currentSubURL;
		}
	});
};

searchButton.onclick = function() {
	query = searchField.value;

	if (query){
		// Create query URL and open in new tab.
		URL = baseURL + subURL + "+" + query
		browser.tabs.create({"url": URL})
		// Hacky solution for closing popup
		browser.browserAction.openPopup()
	};
};