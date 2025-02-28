describe('Adding a second hyperlink inside the second paragraph', function () {
  it('should have a second paragraph (<p>) containing at least two anchor (<a>) elements', function () {
    const paragraphTags = document.querySelectorAll('p');
    expect(paragraphTags.length).toBeGreaterThanOrEqual(
      2,
      'Expected at least two <p> elements, but found fewer. Ensure you have added the required paragraphs.'
    );

    const secondParagraph = paragraphTags[1]; // Target the second <p>
    const anchorTags = secondParagraph
      ? secondParagraph.querySelectorAll('a')
      : [];

    expect(anchorTags.length).toBeGreaterThanOrEqual(
      2,
      'Expected at least two <a> elements inside the second <p>, but found fewer. Make sure you have added the required hyperlinks inside the second paragraph.'
    );
  });

  it('should contain the correct text for the second hyperlink inside the second <p>', function () {
    const paragraphTags = document.querySelectorAll('p');
    if (paragraphTags.length >= 2) {
      const secondParagraph = paragraphTags[1];
      const anchorTags = secondParagraph.querySelectorAll('a');

      if (anchorTags.length >= 2) {
        const secondAnchor = anchorTags[1]; // Target the second <a> inside the second <p>
        expect(secondAnchor.textContent.trim()).toBe(
          'Check out our reviews on Pitchfork.',
          `Expected second <a> inside the second <p> to contain "Check out our reviews on Pitchfork.", but found "${secondAnchor.textContent.trim()}". Ensure the link text is correct and does not have extra spaces.`
        );
      } else {
        fail(
          'No second <a> found inside the second <p>. Ensure you have added two hyperlinks in the second paragraph.'
        );
      }
    } else {
      fail(
        'No second <p> element found. Ensure you have at least two paragraphs and that the second one contains two <a> tags.'
      );
    }
  });

  it('should have the correct href attribute for the second hyperlink inside the second <p>', function () {
    const paragraphTags = document.querySelectorAll('p');
    if (paragraphTags.length >= 2) {
      const secondParagraph = paragraphTags[1];
      const anchorTags = secondParagraph.querySelectorAll('a');

      if (anchorTags.length >= 2) {
        const secondAnchor = anchorTags[1]; // Target the second <a> inside the second <p>
        expect(secondAnchor.getAttribute('href')).toBe(
          'https://pitchfork.com/',
          `Expected second <a> inside the second <p> to have href "https://pitchfork.com/", but found "${secondAnchor.getAttribute(
            'href'
          )}". Ensure the hyperlink points to the correct URL.`
        );
      } else {
        fail(
          'No second <a> found inside the second <p>. Ensure you have added two hyperlinks in the second paragraph.'
        );
      }
    } else {
      fail(
        'No second <p> element found. Ensure you have at least two paragraphs and that the second one contains two <a> tags.'
      );
    }
  });
});
