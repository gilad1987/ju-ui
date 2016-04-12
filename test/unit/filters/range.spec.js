describe('range Filter', () => {
  let range;

  beforeEach(angular.mock.module('JuUi.filters'));

  beforeEach(angular.mock.inject(($filter) => {
    range = $filter('range');
  }));

  it('should be true', () => {
    expect(range).not.toBeNull();
  });

});
