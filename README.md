# Calify

## What it does ##

The extension includes:

* a browser action with a popup including HTML, CSS, and JS
* a content script
* 
When the user clicks the browser action button, the popup is shown, enabling the user to choose two options (set & reset)

When it is shown, the popup injects a content script into the current page.

When the user chooses "set", all inputs (type=number) take the same value as first one.

When the user clicks the reset button, all inputs get empty value.

## What it shows ##

* write a browser action with a popup
* how to have different browser_action images based upon the theme
* give the popup style and behavior using CSS and JS
* inject a content script programmatically using `tabs.executeScript()`
* send a message from the main extension to a content script
* use web accessible resources to enable web pages to load packaged content
* reload web pages
