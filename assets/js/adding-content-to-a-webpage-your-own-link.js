describe('The third paragraph with a link', function () {
  it('should have a third p element', function () {
    const paragraphs = document.querySelectorAll('p');
    if (paragraphs.length < 3) {
      fail(
        'No third <p> element found. Make sure you have added a third <p> tag in your HTML.'
      );
    }
    expect(paragraphs.length).toBeGreaterThanOrEqual(3);
  });

  it('should contain an <a> tag with the correct link and text', function () {
    const paragraphs = document.querySelectorAll('p');

    if (paragraphs.length < 3) {
      fail(
        'No third <p> element found. Ensure there is a third paragraph with a link.'
      );
    } else {
      const thirdParagraph = paragraphs[2]; // Select the third <p> tag on the page
      const link = thirdParagraph.querySelector('a');

      if (!link) {
        fail(
          'No <a> element found inside the third <p>. Make sure you have added a link inside the third paragraph.'
        );
      } else {
        expect(link.getAttribute('href')).toEqual(
          'https://www.example.com/reviews',
          'The <a> tag inside the third <p> should have href="https://www.example.com/reviews".'
        );

        const linkText = link.textContent.trim();
        if (linkText !== 'See what our customers are saying.') {
          fail(
            `Expected the <a> tag inside the third <p> to contain "See what our customers are saying.", but found "${linkText}".\n\n❗ Make sure your link text is spelled correctly and does not have extra spaces.`
          );
        }

        expect(linkText).toEqual('See what our customers are saying.');
        expect(link.getAttribute('target')).toEqual(
          '_blank',
          'The <a> tag inside the third <p> should have target="_blank".'
        );
      }
    }
  });
});
