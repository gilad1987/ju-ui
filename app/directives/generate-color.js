class generateColorController {

  // @ngInject
  constructor($log, $element) {
    this.setBackground($element);
  }

  setBackground($element){
    $element[0].style.background = this.getRandomHex();
  }

  getRandomHex(){
    return '#'+'0123456789abcdef'.split('').map(function(v,i,a){
          return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
  }
}

export function generateColor() {
  return {
    restrict: 'A',
    scope: {},
    controller: generateColorController,
    controllerAs: 'generateColor',
    bindToController: true
  };
}
