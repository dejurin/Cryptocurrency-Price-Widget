! function() {
    var e = document.getElementsByTagName("script"),
        t = e[e.length - 1],
        n = document.createElement("script");

    function r() {
        var e = crCryptocoinPriceWidget.init({
            base: "USD,EUR,CNY,GBP",
            items: "BTC,ETH,LTC,XMR,DASH",
            backgroundColor: "FFFFFF",
            streaming: "1",
            rounded: "1",
            boxShadow: "1",
            border: "1"
        });
        t.parentNode.insertBefore(e, t)
    }
    n.src = "https://co-in.io/widget/pricelist.js?items=BTC%2CETH%2CLTC%2CXMR%2CDASH", n.async = !0, n.readyState ? n.onreadystatechange = function() {
        "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null, r())
    } : n.onload = function() {
        r()
    }, t.parentNode.insertBefore(n, null)
}();
