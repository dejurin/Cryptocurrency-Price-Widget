// Load this script from the page body where the price list should appear.
(function (anchor) {
  var items = "BTC,ETH,LTC";
  var base = "USD,EUR";
  var loader = document.createElement("script");
  loader.src = "https://co-in.io/widget/pricelist.js?items=" + encodeURIComponent(items);
  loader.async = true;
  loader.onload = function () {
    var widget = crCryptocoinPriceWidget.init({
      items: items,
      base: base,
      streaming: "1",
      backgroundColor: "FFFFFF",
      rounded: "1",
      border: "1"
    });
    anchor.parentNode.insertBefore(widget, anchor);
  };
  loader.onerror = function () {
    anchor.insertAdjacentText("beforebegin", "The crypto price widget could not load.");
  };
  anchor.parentNode.insertBefore(loader, anchor);
})(document.currentScript);
