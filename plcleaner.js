
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: details.url.replace(/&[^&]*Filter=[^&]*|&s=(\d+)/ig,'').replace('editor?','editor/?')};
    },
	{urls: ["*://www.waze.com/editor*", "*://www.waze.com/*-*/editor*", "*://beta.waze.com/editor*", "*://beta.waze.com/*-*/editor*"]},
    ["blocking"]
);
