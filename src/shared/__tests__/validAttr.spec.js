import validAttr from '../validAttr';


it('should return true when attribute valid', () => {
  expect(validAttr('name')).toBe(true);
});

it('should return false when attribute invalid', () => {
  expect(validAttr('anme')).toBe(false);
});
