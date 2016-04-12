describe('ButtonsController', () => {
  let buttonsController, createController;

  beforeEach(angular.mock.module('JuUi.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      buttonsController = $controller('ButtonsController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(buttonsController.message).toMatch('ButtonsController');
  });
});
