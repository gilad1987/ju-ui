class copyHexToClipboardController {

  // @ngInject
  constructor($log, $element, $window) {

    $element.on('click',function(e){
      let hex = $window.getComputedStyle($element[0],':after').content;
      let textArea = document.createElement("textarea");
      textArea.innerText = hex.replace('"','').replace('"','');
      document.body.appendChild(textArea);
      textArea.select();

      try {
        document.execCommand('copy');
        textArea.remove();
      } catch (err) {
        console.log('Oops, unable to copy');
      }
    });

  }
}

export function copyHexToClipboard() {
  return {
    restrict: 'A',
    scope: {},
    controller: copyHexToClipboardController,
    controllerAs: 'copyHexToClipboard',
    bindToController: true
  };
}
