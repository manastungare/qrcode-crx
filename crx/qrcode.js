
var QRCODE_BASE = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=';
chrome.runtime.getBackgroundPage(function(backgroundPage) {
  backgroundPage.getCurrentURL(function(url) {
    document.querySelector('#qrcode').src = QRCODE_BASE + encodeURIComponent(url);
  });
});
