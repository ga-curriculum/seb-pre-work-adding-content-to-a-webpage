describe('The second paragraph element', function () {
  it('should have a second paragraph (<p>) element containing an anchor (<a>)', function () {
    const paragraphTags = document.querySelectorAll('p');
    expect(paragraphTags.length).toBeGreaterThanOrEqual(
      2,
      'Expected at least two <p> elements, but found fewer. Ensure you have added the required paragraphs.'
    );

    const secondParagraph = paragraphTags[1]; // Targeting the second <p>
    const anchorTag = secondParagraph
      ? secondParagraph.querySelector('a')
      : null;
    expect(anchorTag).not.toBe(
      null,
      'No <a> element found inside the second <p>. Make sure you have an <a> tag inside your second paragraph.'
    );
  });
});

describe('The hyperlink text inside the second paragraph', function () {
  it('should contain the correct text inside the second <p>', function () {
    const paragraphTags = document.querySelectorAll('p');
    if (paragraphTags.length >= 2) {
      const secondParagraph = paragraphTags[1]; // Targeting the second <p>
      const anchorTag = secondParagraph.querySelector('a');
      expect(anchorTag).not.toBe(
        null,
        'No <a> element found inside the second <p>. Make sure you have an <a> tag inside your second paragraph.'
      );

      expect(anchorTag.textContent.trim()).toBe(
        'Rock out to a demo.',
        `Expected <a> inside the second <p> to contain "Rock out to a demo.", but found "${anchorTag.textContent.trim()}". Make sure the link text is correct and does not have extra spaces.`
      );
    } else {
      fail(
        'No second <p> element found. Ensure you have at least two paragraphs, and the second one contains an <a> tag.'
      );
    }
  });
});

describe('The hyperlink URL inside the second paragraph', function () {
  it('should have the correct href attribute inside the second <p>', function () {
    const paragraphTags = document.querySelectorAll('p');
    if (paragraphTags.length >= 2) {
      const secondParagraph = paragraphTags[1]; // Targeting the second <p>
      const anchorTag = secondParagraph.querySelector('a');
      expect(anchorTag).not.toBe(
        null,
        'No <a> element found inside the second <p>. Make sure you have an <a> tag inside your second paragraph.'
      );

      expect(anchorTag.getAttribute('href')).toBe(
        'https://www.youtube.com/watch?v=vm32-ted2rI',
        `Expected <a> inside the second <p> to have href "https://www.youtube.com/watch?v=vm32-ted2rI", but found "${anchorTag.getAttribute(
          'href'
        )}". Ensure the hyperlink points to the correct URL.`
      );
    } else {
      fail(
        'No second <p> element found. Ensure you have at least two paragraphs, and the second one contains an <a> tag.'
      );
    }
  });
});
