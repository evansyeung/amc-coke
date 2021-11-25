// chrome.tabs.update({
//   url: promotionUrl,
// });

// chrome.runtime.onMessage.addListener(navigateURL);

// function navigateURL(message, sender, sendResponse) {
//   console.log(message);
// }

chrome.runtime.onMessage.addListener(function (message, sender) {
  if (message.type == "NAVIGATE") {
    chrome.tabs.update(sender.tab.id, { url: "https://google.com" });
  }
});

chrome.runtime.onMessage.addListener(function (message, sender) {
  if (message.type == "NAVIGATE") {
    chrome.tabs.update(sender.tab.id, { url: message.redirect });
  }
});
