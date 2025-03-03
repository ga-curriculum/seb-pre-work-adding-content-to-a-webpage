describe('The second paragraph with a link', function () {
  it('should have a second p element', function () {
    const paragraphs = document.querySelectorAll('p');
    if (paragraphs.length < 2) {
      fail(
        'No second <p> element found. Make sure you have added a second paragraph.'
      );
    }
    expect(paragraphs.length).toBeGreaterThanOrEqual(2);
  });

  it('should contain an <a> tag with the correct link and text', function () {
    const paragraphs = document.querySelectorAll('p');

    if (paragraphs.length < 2) {
      fail(
        'No second <p> element found. Ensure there is a second paragraph with a link.'
      );
    } else {
      const secondParagraph = paragraphs[1];
      const link = secondParagraph.querySelector('a');

      if (!link) {
        fail(
          'No <a> element found inside the second <p>. Make sure you have added a link inside the second paragraph.'
        );
      } else {
        expect(link.getAttribute('href')).toEqual(
          'https://www.example.com/menu',
          'The <a> tag should have href="https://www.example.com/menu".'
        );

        const linkText = link.textContent.trim();
        if (linkText !== 'View our menu.') {
          fail(
            `Expected the <a> tag to contain "View our menu.", but found "${linkText}".\n\n❗ Make sure your link text is spelled correctly and does not have extra spaces.`
          );
        }

        expect(linkText).toEqual('View our menu.');
        expect(link.getAttribute('target')).toEqual(
          '_blank',
          'The <a> tag should have target="_blank".'
        );
      }
    }
  });
});
