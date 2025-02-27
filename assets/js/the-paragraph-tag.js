describe('The document body', function () {
  it('should have a paragraph (<p>) element', function () {
    const paragraphTag = document.querySelector('p');
    expect(paragraphTag).not.toBe(
      null,
      'No <p> element found. Make sure you have a <p> tag in your HTML.'
    );
  });
});

describe('The paragraph text', function () {
  it('should contain the correct text', function () {
    const paragraphTag = document.querySelector('p');
    if (paragraphTag) {
      expect(paragraphTag.textContent.trim()).toBe(
        'Out of the oven and into your soul.',
        `Expected <p> to contain "Out of the oven and into your soul.", but found "${paragraphTag.textContent.trim()}". Make sure your paragraph text is correct and does not have extra spaces.`
      );
    }
  });
});
