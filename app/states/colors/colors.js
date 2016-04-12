export class ColorsController {

  // @ngInject
  constructor() {
    this.buttonTypes = ['large','primary','secondary','small','mini','compact','tag'];
    this.buttonColors = ['blue-primary','blue-secondary','orange-primary'];
    this.colorsList = this.buttonColors.concat(['light-blue','cool-gray','pale-blue']);
    this.buttonsState = ['','hover','active'];
  }

  capitalizeFirstLetter(string) {
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
