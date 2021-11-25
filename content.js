console.log("hello");

var promotionUrl =
  "https://us.coca-cola.com/amoe?promotionId=8417_amc_iw_63987";

if (window.location.href.includes("amoe?promotionId")) {
  setTimeout(function () {
    var useMyEntryBtn = document.querySelector(".amoe__myentry-button");
    useMyEntryBtn.click();
  }, 5000);

  // If still on https://us.coca-cola.com/amoe?promotionId=8417_amc_iw_63987 for greater than 20secs means we got "Opps something went wrong" error, reload and try again
  setTimeout(sendReloadMessage.bind(chrome), 20000);
}

if (window.location.href.includes("redeem?promotionToken")) {
  setTimeout(function () {
    var redeemBtn = document.querySelector(".details-screen button");
    redeemBtn.click();
  }, 6000);

  setTimeout(sendNavigatedMessage.bind(chrome), 10000);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sendReloadMessage() {
  var errorMsg = document.querySelector("#amoe-error-message");
  console.log(errorMsg.innerHTML);

  if (errorMsg.innerHTML.length > 0) {
    console.log("sending reload message");
    chrome.runtime.sendMessage({
      type: "RELOAD",
    });
  }
}

function sendNavigatedMessage() {
  var thankYouMsg = document.querySelector(".thankyou-screen__heading");

  if (thankYouMsg) {
    console.log("sending navigate message");
    chrome.runtime.sendMessage({
      type: "NAVIGATE",
      redirect: promotionUrl,
    });
  }
}
