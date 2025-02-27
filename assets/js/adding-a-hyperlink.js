describe('The paragraph element', function () {
  it('should have a paragraph (<p>) element containing an anchor (<a>)', function () {
    const paragraphTag = document.querySelector('p');
    const anchorTag = paragraphTag ? paragraphTag.querySelector('a') : null;
    expect(anchorTag).not.toBe(
      null,
      'No <a> element found inside the <p>. Make sure you have an <a> tag inside your paragraph.'
    );
  });
});

describe('The hyperlink text', function () {
  it('should contain the correct text inside the <p>', function () {
    const paragraphTag = document.querySelector('p');
    if (paragraphTag) {
      const anchorTag = paragraphTag.querySelector('a');
      expect(anchorTag).not.toBe(
        null,
        'No <a> element found inside the <p>. Make sure you have an <a> tag inside your paragraph.'
      );

      expect(anchorTag.textContent.trim()).toBe(
        'Rock out to a demo.',
        `Expected <a> inside <p> to contain "Rock out to a demo.", but found "${anchorTag.textContent.trim()}". Make sure the link text is correct and does not have extra spaces.`
      );
    } else {
      fail(
        'No <p> element found. Ensure you have a paragraph containing an <a> tag.'
      );
    }
  });
});

describe('The hyperlink URL', function () {
  it('should have the correct href attribute inside the <p>', function () {
    const paragraphTag = document.querySelector('p');
    if (paragraphTag) {
      const anchorTag = paragraphTag.querySelector('a');
      expect(anchorTag).not.toBe(
        null,
        'No <a> element found inside the <p>. Make sure you have an <a> tag inside your paragraph.'
      );

      expect(anchorTag.getAttribute('href')).toBe(
        'https://www.youtube.com/watch?v=vm32-ted2rI',
        `Expected <a> inside <p> to have href "https://www.youtube.com/watch?v=vm32-ted2rI", but found "${anchorTag.getAttribute(
          'href'
        )}". Ensure the hyperlink points to the correct URL.`
      );
    } else {
      fail(
        'No <p> element found. Ensure you have a paragraph containing an <a> tag.'
      );
    }
  });
});
