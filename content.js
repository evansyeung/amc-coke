console.log("hello");

var promotionUrl =
  "https://us.coca-cola.com/amoe?promotionId=8417_amc_iw_63987";

if (window.location.href.includes("amoe?promotionId")) {
  setTimeout(function () {
    var useMyEntryBtn = document.querySelector(".amoe__myentry-button");
    useMyEntryBtn.click();
  }, 5000);
}

if (window.location.href.includes("redeem?promotionToken")) {
  setTimeout(function () {
    var redeemBtn = document.querySelector(".details-screen button");
    redeemBtn.click();

    sleep(2000).then(() => {
      console.log("sending message");
      chrome.runtime.sendMessage({
        type: "NAVIGATE",
        redirect: promotionUrl,
      });
    });
  }, 5000);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
