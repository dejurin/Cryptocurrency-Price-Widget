# Cryptocurrency Price Widget

> **1.5.0-rc.1 — development candidate, not deployed.** This development branch documents the accepted local candidate. Links and embed examples below still use the existing production service. An isolated hosted development environment has not been published yet.

Add cryptocurrency prices to your website, choose coins and display currencies, and match the widget to your design. **No registration or API key required.**

![Cryptocurrency Price Widget](./cryptocurrency-price-widget-anim.gif)

## Features

- Cryptocurrency prices with automatic updates where supported.
- Currency tabs, custom backgrounds, striped rows, borders and rounded corners.
- Adaptive text contrast and keyboard controls for tabs and details.
- A Live button that pauses displayed updates for each widget independently.
- A one-shot mode for a single price snapshot.
- Responsive layout and loading indicators that reserve space for prices.
- Multiple widgets and compatibility with existing embed codes.
- Fourteen interface languages in the release candidate.
- Free use under the MIT license; no cryptocurrency mining.

## Installation

Use the [widget builder](https://co-in.io/crypto-price-widget/) to choose settings and copy the code into an HTML block that permits JavaScript. The hosted builder currently serves the existing production version.

See [embed examples](examples.html) or the [WordPress plugin](https://wordpress.org/plugins/cryptocurrency-price-widget/). The plugin has its own release number; 1.5.0-rc.1 here refers to the hosted widget candidate.

### Basic embed example

```html
<!-- Cryptocurrency Price Widget -->
<script>
!function(){
  var scripts = document.getElementsByTagName("script"),
      current = scripts[scripts.length - 1],
      loader = document.createElement("script");

  function render(){
    var widget = crCryptocoinPriceWidget.init({
      base: "USD,EUR,CNY,GBP",
      items: "BTC,ETH,LTC,XMR,DASH",
      backgroundColor: "FFFFFF",
      streaming: "1",
      streamingInterval: "30",
      rounded: "1",
      boxShadow: "1",
      border: "1"
    });

    current.parentNode.insertBefore(widget, current);
  }

  loader.src = "https://co-in.io/widget/pricelist.js?items=BTC%2CETH%2CLTC%2CXMR%2CDASH";
  loader.async = true;
  loader.onload = render;

  current.parentNode.insertBefore(loader, null);
}();
</script>
<!-- /Cryptocurrency Price Widget -->
```

The example continues to use the production URL. Do not change it to an unverified development hostname or path.

## Options

| Setting | Purpose |
| --- | --- |
| Display currencies | Fiat currencies shown in tabs |
| Cryptocurrencies | Coins shown in rows |
| Background color | Widget background and adaptive palette |
| Automatic updates | Enable updates, or disable for one snapshot |
| Striped rows | Alternate row backgrounds |
| Rounded corners | Round the widget edges |
| Shadow and border | Optional frame styling |

## Languages in 1.5.0-rc.1

English (`en`), Ukrainian (`uk`), Russian (`ru`), German (`de`), Spanish (`es`), French (`fr`), Portuguese (`pt`), Polish (`pl`), Italian (`it`), Turkish (`tr`), Dutch (`nl`), Japanese (`ja`), Korean (`ko`) and simplified Chinese (`zh-cn`). English uses the root URL; other languages use their locale prefix. Newly added locale routes are part of the candidate and are pending hosted deployment.

## Data sources and update behavior

- **Kraken:** quotes for verified supported markets.
- **CoinLore:** initial or alternative prices, market capitalization and volume.
- **MoneyConvert:** fiat exchange rates.
- **CryptoCompare:** separate charts in USD.

Kraken streaming prices take priority where supported. If streaming fails, valid CoinLore data is used before Kraken REST. Litecoin uses Kraken because its known incorrect CoinLore mapping is excluded. Quote availability varies by asset; the [asset catalog](https://co-in.io/data/crypto-assets.json) is metadata, not a guarantee of an available price.

Updates depend on provider events and availability, with no fixed trade-update interval. `streaming: "0"` loads one snapshot without starting polling. The Live button pauses display updates; provider connections continue.

In the candidate, a price older than two minutes triggers streaming revalidation without hiding a valid displayed value. Exchange rates refresh separately after 30 minutes. A failed FX refresh retains the last valid snapshot and its original receipt time, shown in a tooltip. Receipt time is not market trade time.

Rows and icons appear while prices are loading. If all price attempts fail, a localized message is shown; unavailable FX affects the corresponding currency tab. Charts remain independent of price and metric availability.

This repository contains documentation and embed examples. Runtime is hosted by CO-IN.IO; existing embeds receive hosted updates subject to browser and CDN caching.

## FAQ

### How can I set the width?

Place the embed inside a container, for example:

```html
<div style="width: 320px; max-width: 100%;">
  <!-- Insert widget script here. -->
</div>
```

Allow enough room for your selected currencies and values. At narrow widths, long prices use smaller text; check the result within your page layout.

### Will the widget affect page performance?

The widget loads JavaScript, images and market data in the visitor's browser. Check page performance with the number of widgets and coins you intend to display.

### Does it mine cryptocurrency?

No. The widget does not use visitors' devices to mine cryptocurrency.

### Do I need an account or API key?

No registration or API key is required to embed the widget.

## Support

Contact [s@co-in.io](mailto:s@co-in.io).

## License

Distributed under the [MIT license](https://choosealicense.com/licenses/mit/). You can use the widget for free on your websites.

Powered by [CO-IN.IO](https://co-in.io/).
