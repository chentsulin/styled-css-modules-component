import isTag from '../isTag';


it('html tags should be tags', () => {
  expect(isTag('a')).toBe(true);
  expect(isTag('h1')).toBe(true);
  expect(isTag('div')).toBe(true);
  expect(isTag('img')).toBe(true);
});

it('components should not be tags', () => {
  const Component = () => null;
  expect(isTag(Component)).toBe(false);
});
