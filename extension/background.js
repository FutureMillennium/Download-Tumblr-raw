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

function Download(e, tab) {
	var url;

	if (e.hasOwnProperty('srcUrl'))
		url = e.srcUrl;
	else if (e.hasOwnProperty('linkUrl'))
		url = e.linkUrl;
	else
		return;

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

chrome.contextMenus.create({
	title: "Download image",
	contexts: ['image'],
	onclick: Download,
});

chrome.contextMenus.create({
	title: "Download link",
	contexts: ['link'],
	onclick: Download,
	//targetUrlPatterns: ['*://*/*.png', '*://*/*.jpg', '*://*/*.jpeg' , '*://*/*.jpe'],
});
