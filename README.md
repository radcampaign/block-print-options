# Block Print Options

This WordPress plugin provides print options for Gutenberg blocks. The plugin provides a toggle in the Advanced panel of a block's settings to hide the block from print.

## Requirements

- [PHP](https://secure.php.net/manual/en/install.php) >= 7.4

## Installation

You can install via composer `composer require radcampaign/block-print-options` or download the latest .zip in the Releases and extract it to your plugins folder.

## Usage

When you toggle the print setting in the advanced panel, the plugin adds or removes a `hide-from-print` class to the block. The styles included with this plugin are not intended to be greedy, so if your theme styles set a display property on blocks, you may need to declare your own styles for the `hide-from-print` class to ensure it overrides other display properties.

## Bug Reports

If you discover a bug, please [open an issue](https://github.com/radcampaign/block-print-options/issues).

## Contributing

Contributing whether it be through PRs, reporting an issue, or suggesting an idea is encouraged and appreciated.

## License

Block Print Options is provided under the [GNU General Public License v2.0](https://github.com/radcampaign/block-print-options/blob/master/LICENSE.md).
