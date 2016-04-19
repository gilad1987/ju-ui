describe('PagesController', () => {
  let pagesController, createController;

  beforeEach(angular.mock.module('JuUi.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      pagesController = $controller('PagesController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(pagesController.message).toMatch('PagesController');
  });
});
