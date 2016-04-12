describe('ColorsController', () => {
  let colorsController, createController;

  beforeEach(angular.mock.module('JuUi.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      colorsController = $controller('ColorsController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(colorsController.message).toMatch('ColorsController');
  });
});
