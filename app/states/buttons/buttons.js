export class ButtonsController {

  // @ngInject
  constructor() {

    this.buttonSizes = [{
      name:'large',
      value:'large'
    },{
      name:'primary',
      value:'primary'
    },{
      name:'secondary',
      value:'secondary'
    },{
      name:'small',
      value:'small'
    },{
      name:'mini',
      value:'mini'
    },{
      name:'compact',
      value:'compact'
    },{
      name:'tag',
      value:'tag'
    }];

    this.buttonColors = [
        {name:'blue-primary', value:'blue-primary'},
        {name:'blue-secondary', value:'blue-secondary'},
        {name:'orange-primary', value:'orange-primary'},
        {name:'light-blue', value:'light-blue'},
        {name:'cool-gray', value:'cool-gray'},
        {name:'pale-blue', value:'pale-blue'},
        {name:'primary-black', value:'primary-black'},
        {name:'dark-gray', value:'dark-gray'},
        {name:'medium-gray', value:'medium-gray'},
        {name:'light-gray', value:'light-gray'},
        {name:'very-light-gray', value:'very-light-gray'},
        {name:'light', value:'light'},
        {name:'sun-flower', value:'sun-flower'},
        {name:'black-color', value:'black-color'},
        {name:'amethyst', value:'amethyst'},
      ];

    this.colorsList = this.buttonColors.concat([{
      name:'light-blue',
      value:'light-blue'
    },{
      name:'cool-gray',
      value:'cool-gray'
    },{
      name:'pale-blue',
      value:'pale-blue'
    }])
  }
}
