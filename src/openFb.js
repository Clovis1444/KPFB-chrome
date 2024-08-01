function openNewTab(url, index) {
	chrome.tabs.create({
		url: url,
		index: index,
	});
}

function main() {
	chrome.runtime.onMessage.addListener((message) => {
		if (message.command === "openFb") {
			// Get active tab index
			// chrome.tabs.query({ lastFocusedWindow: true, active: true }),
			// 	(tabs) => {
			// 		// Open new tab
			// 		console.log(tabs[0]);
			// 		openNewTab(message.url, tab.index + 1);
			// 	};
			chrome.tabs.query(
				{ active: true, lastFocusedWindow: true },
				(tabs) => {
					console.log(tabs[0].index);
					openNewTab(message.url, tabs[0].index + 1);
					// use `url` here inside the callback because it's asynchronous!
				}
			);
		}
	});
}

// Call main()
main();
