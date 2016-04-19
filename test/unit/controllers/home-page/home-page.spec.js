describe('HomePageController', () => {
  let homePageController, createController;

  beforeEach(angular.mock.module('JuUi.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      homePageController = $controller('HomePageController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(homePageController.message).toMatch('HomePageController');
  });
});
