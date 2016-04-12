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

    this.buttonColors = [{
        name:'blue-primary',
        value:'blue-primary'
      }, {
        name:'blue-secondary',
        value:'blue-secondary'
      }, {
        name:'orange-primary',
        value:'orange-primary'
      }];

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
