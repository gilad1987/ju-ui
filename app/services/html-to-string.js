export class HtmlToString {

  // @ngInject
  constructor() {

    this.parse = function(who, deep){
      if(!who || !who.tagName) return '';
      var txt, ax, el= document.createElement("div");
      var clone = who.cloneNode(true);
      //clone.removeAttribute("ng-class");
      //clone.removeAttribute("id");
      el.appendChild(clone);
      txt= el.innerHTML;
      if(deep){
        ax= txt.indexOf('>')+1;
        txt= txt.substring(0, ax)+who.innerHTML+ txt.substring(ax);
      }
      el= null;
      return txt;
    };
  }
}
