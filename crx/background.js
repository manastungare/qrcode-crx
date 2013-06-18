
function getCurrentURL(callback) {
  chrome.tabs.getSelected(null, function(tab) {
    callback(tab.url);
  });
}
