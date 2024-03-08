test('structuredClone', () => {
  const origDate = new Date();
  const copyDate = structuredClone(origDate);

  const isOrigDate = origDate instanceof Date; // true
  const isCopyDate = copyDate instanceof Date; // false?

  expect(isCopyDate).toBe(isOrigDate);
});
