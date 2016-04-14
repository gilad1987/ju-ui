class createButtonController {
  // @ngInject
  constructor($log, $element, $http , $scope) {

    this.$element = $element;
    this.items = [];


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

    this.icons = [{
      name:'Choose icon',
      value:0
    }];

    $http.get('/assets/files/font-awesome-data-readable.json')
        .then((response)=>{
          Object.keys(response.data).map((item)=>{
            return this.icons.push({
              name:item,
              value:item
            })
          });
        })
        .catch(()=>{

        });
  }

  copyToClipboard(e){

    var getHTML= function(who, deep){
      if(!who || !who.tagName) return '';
      var txt, ax, el= document.createElement("div");
      var clone = who.cloneNode(true);
      clone.removeAttribute("ng-class");
      clone.removeAttribute("id");
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
    var htmlAsString = getHTML(document.getElementById('button-template'),false);
    htmlAsString = htmlAsString.replace(/([\<][\!][\-]+[a-z\s\:\.\!\=0-9\-]+[\>])|(ng-scope)|((ng-class|ng-if)[\=\"\[a-z\.\]\!0-9]+)/gi, '');

    textArea.innerText = htmlAsString;
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
