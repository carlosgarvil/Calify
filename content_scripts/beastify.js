(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  

  /**
   * Given a URL to a beast image, remove all existing beasts, then
   * create and style an IMG node pointing to
   * that image, then insert the node into the document.
   */

  /**
   * Remove every beast from the page.
   */
  
  /**
   * Listen for messages from the background script.
   * Call "beastify()" or "reset()".
   */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "beastify") {
      var inputsNumber = document.querySelectorAll('.contenido_informacion_sistema input[type="number"]');
      var firstValue = inputsNumber[0].value;
      for (var i = 1; i < inputsNumber.length; i++) {
        inputsNumber[i].value = firstValue;
      }
    } else if (message.command === "reset") {
      var inputsNumber = document.querySelectorAll('.contenido_informacion_sistema input[type="number"]');
      for (var i = 0; i < inputsNumber.length; i++) {
        inputsNumber[i].value = "";
      }
    }
  });

})();
