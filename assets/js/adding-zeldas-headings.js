describe('The document body', function () {
  it('should have an h3 element', function () {
    const h3 = document.querySelector('h3');
    expect(h3).not.toBe(
      null,
      'No <h3> element found. Make sure you have an <h3> tag in your HTML.'
    );
  });
});

describe('The h3 text', function () {
  it('should contain the correct text', function () {
    const h3 = document.querySelector('h3');
    if (h3) {
      expect(h3.textContent.trim()).toBe(
        'Critics dub Kasserole the Metallica of modern times.',
        `Expected <h3> to contain "Critics dub Kasserole the Metallica of modern times.", but found "${h3.textContent.trim()}". Make sure your heading text is correct and does not have extra spaces.`
      );
    }
  });
});
