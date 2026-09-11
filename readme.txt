=== Block Print Options ===
Contributors: (this should be a list of wordpress.org userid's)
Donate link: https://example.com/
Tags: print, gutenberg, blocks
Requires at least: 5.0
Tested up to: 6.1.1
Requires PHP: 5.6
Stable tag: 1.1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Provides options to hide blocks from print or show them only when printing.

== Description ==

The plugin adds toggles to the Advanced panel of a block's settings to hide the block when printing, or to show it only when printing.

== Usage ==
When you toggle a print setting in the advanced panel, the plugin adds or removes the corresponding class (`hide-from-print` or `show-only-on-print`) on the block. The styles included with this plugin are not intended to be greedy, so if your theme styles set a display property on blocks, you may need to declare your own styles for these classes to ensure they override other display properties.

The two options are mutually exclusive.

== Screenshots ==

1. A spacer block that will be hidden from print.

== Changelog ==

= 1.1 =
* Add "Show only on print" toggle (`show-only-on-print` class)
* Make hide/show print options mutually exclusive

= 1.0 =
* Initial version
