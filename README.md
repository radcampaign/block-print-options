# Block Print Options

This WordPress plugin provides print options for Gutenberg blocks. The plugin provides toggles in the Advanced panel of a block's settings to:

- **Hide from print** — hide the block when printing (`hide-from-print`)
- **Show only on print** — hide the block on screen and show it when printing (`show-only-on-print`)

The two options are mutually exclusive.

## Requirements

- [PHP](https://secure.php.net/manual/en/install.php) >= 7.4

## Installation

You can install via composer `composer require radcampaign/block-print-options` or download the latest .zip in the Releases and extract it to your plugins folder.

## Usage

When you toggle a print setting in the advanced panel, the plugin adds or removes the corresponding class on the block. The styles included with this plugin are not intended to be greedy, so if your theme styles set a display property on blocks, you may need to declare your own styles for `hide-from-print` / `show-only-on-print` to ensure they override other display properties.

In the editor, blocks with `show-only-on-print` get a dashed orange outline so authors can see them while editing (they remain visible in the editor; the screen hide only applies on the frontend).

## Bug Reports

If you discover a bug, please [open an issue](https://github.com/radcampaign/block-print-options/issues).

## Contributing

Contributing whether it be through PRs, reporting an issue, or suggesting an idea is encouraged and appreciated.

## License

Block Print Options is provided under the [GNU General Public License v2.0](https://github.com/radcampaign/block-print-options/blob/master/LICENSE.md).
