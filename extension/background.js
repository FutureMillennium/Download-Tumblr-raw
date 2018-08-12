'use strict';

function DownloadTumblrRaw(e, tab) {
	var url = e.srcUrl;

	url = url.replace(/_(\d+)\./, '_1280.');

	/*var i = url.indexOf('.tumblr.com/');

	if (i !== -1) {
		url = 'http://data' + url.substr(i);
	}*/

	chrome.downloads.download({
		url: url
	});
}

chrome.contextMenus.create({
	title: "Download raw image",
	contexts: ['image'],
	onclick: DownloadTumblrRaw,
	targetUrlPatterns: ['*://*.tumblr.com/*'],
});
