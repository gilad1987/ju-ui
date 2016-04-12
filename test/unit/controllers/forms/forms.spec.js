describe('FormsController', () => {
  let formsController, createController;

  beforeEach(angular.mock.module('JuUi.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      formsController = $controller('FormsController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(formsController.message).toMatch('FormsController');
  });
});
