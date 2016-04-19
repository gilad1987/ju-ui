describe('ListsController', () => {
  let listsController, createController;

  beforeEach(angular.mock.module('JuUi.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      listsController = $controller('ListsController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(listsController.message).toMatch('ListsController');
  });
});
