describe('TypographyController', () => {
  let typographyController, createController;

  beforeEach(angular.mock.module('JuUi.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      typographyController = $controller('TypographyController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(typographyController.message).toMatch('TypographyController');
  });
});
