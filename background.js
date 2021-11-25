// chrome.tabs.update({
//   url: promotionUrl,
// });

// chrome.runtime.onMessage.addListener(navigateURL);

// function navigateURL(message, sender, sendResponse) {
//   console.log(message);
// }

chrome.runtime.onMessage.addListener(function (message, sender) {
  console.log(message);
  if (message.type == "NAVIGATE") {
    chrome.tabs.update(sender.tab.id, { url: message.redirect });
  } else if (message.type == "RELOAD") {
    chrome.tabs.reload(sender.tab.id);
  }
});
