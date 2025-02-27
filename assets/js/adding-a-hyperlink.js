describe('The document body', function () {
  it('should have an anchor (<a>) element', function () {
    const anchorTag = document.querySelector('a');
    expect(anchorTag).not.toBe(
      null,
      'No <a> element found. Make sure you have an <a> tag in your HTML.'
    );
  });
});

describe('The hyperlink text', function () {
  it('should contain the correct text', function () {
    const anchorTag = document.querySelector('a');
    if (anchorTag) {
      expect(anchorTag.textContent.trim()).toBe(
        'Rock out to a demo.',
        `Expected <a> to contain "Rock out to a demo.", but found "${anchorTag.textContent.trim()}". Make sure the link text is correct and does not have extra spaces.`
      );
    }
  });
});

describe('The hyperlink URL', function () {
  it('should have the correct href attribute', function () {
    const anchorTag = document.querySelector('a');
    if (anchorTag) {
      expect(anchorTag.getAttribute('href')).toBe(
        'https://www.youtube.com/watch?v=vm32-ted2rI',
        `Expected <a> href to be "https://www.youtube.com/watch?v=vm32-ted2rI", but found "${anchorTag.getAttribute(
          'href'
        )}". Make sure the hyperlink points to the correct URL.`
      );
    }
  });
});
