
function listen(requestDetails) {
		if(/.*((editor\?)+|(&s=(\d+))+).*/.test(requestDetails.url))
         return {redirectUrl: requestDetails.url.replace(/&[^&]*Filter=[^&]*|&s=(\d+)/ig,'').replace('editor?','editor/?')};
}
browser.webRequest.onBeforeRequest.addListener(
    listen,
	{urls: ["*://www.waze.com/editor*", "*://www.waze.com/*-*/editor*", "*://beta.waze.com/editor*", "*://beta.waze.com/*-*/editor*"]},
    ["blocking"]
);