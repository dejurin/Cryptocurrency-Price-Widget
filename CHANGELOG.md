# Changelog

All notable changes to this project will be documented in this file.

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
