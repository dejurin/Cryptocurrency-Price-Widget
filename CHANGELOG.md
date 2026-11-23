# Changelog

## 1.5.0 — Hosted widget core

- Add Crypto Ticker Widget with inline, fixed-top and fixed-bottom placement, adjustable scrolling and theme controls.
- Add compact and detailed price lists, currency tabs and per-widget controls for live updates.
- Provide localized builders and widgets in 14 languages, with previews and ready-to-copy embed codes.
- Document both production builders and add animated previews and a working two-widget HTML example.

## 1.5.0-rc.1 — Development preview

This candidate was deployed to the isolated [dev environment](https://dev.co-in.io/), with all 14 site, builder and widget locales checked. At this stage, production still served the earlier Kraken, PHP parameter-protection and placement fixes. The changes below describe the dev candidate; a development-branch push does not update hosted widgets.

- Retain valid displayed prices during two-minute streaming revalidation; keep one-shot mode free of new polling loops.
- Preserve the last valid FX snapshot and receipt time when a refresh fails.
- Validate CoinLore identity for every requested asset and accepted cache entry; isolate individual Kraken pair failures and keep USD independent of FX loading.
- Expand verified Kraken market coverage while sending only mappings needed by each widget.
- Restore recognized bare embeds parsed into document head and preserve multiple-instance order.
- Add adaptive themes, keyboard-accessible tabs and details, and a per-widget Live display toggle.
- Render rows and icons immediately with waiting dots; reserve price space and fit long values on narrow layouts.
- Keep CryptoCompare USD charts independent of CoinLore metrics, including Litecoin.
- Add localized price/FX failure messages and expand the website and widget to 14 languages.
- Simplify website copy, remove the request to retain the attribution link, and improve mobile configuration controls. Attribution links themselves remain.
- Update examples and distinguish hosted widget versions from WordPress plugin versions.

Physical mobile devices, native Windows contrast themes and screen-reader acceptance are outside the completed local scope. A text equivalent for chart history remains deferred; no full WCAG conformance claim is made.

## 1.4.0 - 2026-06-10

- Switched the public widget runtime to CoinLore as the primary crypto price delivery provider.
- Kept MoneyConvert as the fiat cross-rates provider.
- Expanded supported crypto asset metadata to approximately 14,280 symbol-based crypto assets.
- Updated the public asset list: https://co-in.io/data/crypto-assets.json.
- Updated crypto asset metadata schema to version 3.
- Added `co-in-price-cache-v4` to prevent mixing old cached provider data with the new runtime provider contract.
- Removed browser runtime dependency on CoinDesk Data API.
- Removed CoinGecko client-side fallback to prevent CORS/noisy console errors.
- Removed legacy CoinCap WebSocket and CryptoCompare min-api provider paths from the active browser runtime.
- Improved provider timeout and graceful unavailable-provider handling.
- Fixed empty price data handling to avoid JavaScript runtime errors.
- Fixed market cap rendering so unavailable market cap values are not displayed as zero.
- Improved widget refresh behavior to avoid unnecessary full table/image re-renders where possible.
- Updated crypto icons to use higher-resolution 64px source images and 24px display size for crypto assets.
- Expanded `/api/coinlist/?type=coins` to use the updated CoinLore-backed asset universe.
- Fixed `/api/coinlist` search ranking so exact symbol matches appear first.
- Fixed PHP map generation for CoinLore assets containing `$` in names.
- Updated website technical count to 14,280 crypto assets.
- Updated core widget badge to `v1.4.0`.

## 1.1 - 2018-09-28

- Remove header.
- Minor changes.

## 1.0.1 - 2018-09-20

- Diminished size.
- Minor changes.

## 1.0 - 2018-09-19

- First stable release.
