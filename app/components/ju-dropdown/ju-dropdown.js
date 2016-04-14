
class juDropdownController {
  // @ngInject
  constructor($log, $element, $document) {
    this.isOpen = false;
    this.$element = $element;
    let _this = this;
  }

  onToggle(){
    this.isOpen = !this.isOpen;
  }

  onSelect(){
    this.onToggle();
  }
}

export const juDropdown = {
  bindings: {
    options:'='
  },
  templateUrl: '/components/ju-dropdown/ju-dropdown.html',
  controller: juDropdownController,
  controllerAs: 'juDropdown'
};

//
//hasClass(element , className){
//  return (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(className) != -1;
//}
//let element=null;
//let parent = $event.target.parentNode;
//
//while (!this.hasClass(parent,'ju-Dropdown')){
//  parent = parent.parentNode;
//}
//
//if(this.hasClass(parent,'open')){
//  parent.classList.remove('open');
//}else{
//  parent.classList.add('open');
//}