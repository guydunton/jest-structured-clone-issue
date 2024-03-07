test('structuredClone', () => {
  const origDate = new Date();
  const copyDate = structuredClone(origDate);

  const isOrigDate = origDate instanceof Date;
  const isCopyDate = copyDate instanceof Date;

  expect(isCopyDate).toBe(isOrigDate);
});
