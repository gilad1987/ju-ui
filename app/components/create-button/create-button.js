class createButtonController {
  // @ngInject
  constructor($log, $element) {

    this.$element = $element;

    this.radiusOptions = [{
      name:5,
      value:5
    },{
      name:45,
      value:45
    }];

    this.shadowOptions =
    this.disabledOptions =
    this.inverseOptions = [{
      name:1,
      value:1
    },{
      name:0,
      value:0
    }];
  }

  copyToClipboard(e){

    var getHTML= function(who, deep){
      if(!who || !who.tagName) return '';
      var txt, ax, el= document.createElement("div");
      var clone = who.cloneNode(false);
      clone.removeAttribute("ng-class");
      clone.removeAttribute("id");
      clone.innerText = "TEMPLATE TEXT";
      el.appendChild(clone);
      txt= el.innerHTML;
      if(deep){
        ax= txt.indexOf('>')+1;
        txt= txt.substring(0, ax)+who.innerHTML+ txt.substring(ax);
      }
      el= null;
      return txt;
    };

    var textArea = document.createElement("textarea");
    textArea.innerText = getHTML(document.getElementById('button-template'),false);
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      textArea.remove();
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  }
}

export const createButton = {
  bindings: {
    colors:"=",
    sizes:"=",
  },
  templateUrl: '/components/create-button/create-button.html',
  controller: createButtonController,
  controllerAs: 'createButton'
};
