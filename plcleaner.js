
function listen(details)
{
	var replaceURL = details.url.replace(/&[^&]*Filter=[^&]*|&s=(\d+)/ig,'').replace('editor?','editor/?');
	if(replaceURL.indexOf("&segments") > -1)
		replaceURL = replaceURL.replace(/&zoom=(0|1)/, "&zoom=2");
	return {redirectUrl: replaceURL};
}

chrome.webRequest.onBeforeRequest.addListener(
    listen,
	{urls: ["*://www.waze.com/editor*", "*://www.waze.com/*-*/editor*", "*://beta.waze.com/editor*", "*://beta.waze.com/*-*/editor*"]},
    ["blocking"]
);
