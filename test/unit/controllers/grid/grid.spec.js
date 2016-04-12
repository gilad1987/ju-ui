describe('GridController', () => {
  let gridController, createController;

  beforeEach(angular.mock.module('JuUi.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      gridController = $controller('GridController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(gridController.message).toMatch('GridController');
  });
});
