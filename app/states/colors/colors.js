export class ColorsController {

  // @ngInject
  constructor() {
    this.buttonTypes = ['large','primary','secondary','small','mini','compact','tag'];
    this.buttonColors = ['blue-primary','blue-secondary','orange-primary','light-blue'];
    this.grays = ['cool-gray','pale-blue'];
    this.shadesOfGrayNonState = ['primary-black','dark-gray','medium-gray','light-gray','very-light-gray','light'];
    this.complementary = ['sun-flower','amethyst'];
    this.buttonsState = ['','hover','active'];
  }

  capitalizeFirstLetter(string) {
    if(string=='')return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getUtilityBackgroundColorClassName(color,state){
    return 'u-Background--'+color+(state=='' ? state : '--'+state);
  }

  getColorNameAndState(color,state){
    color = color.split('-').join(' ');
    return this.capitalizeFirstLetter(color) +" "+ this.capitalizeFirstLetter(state);
  }
}
