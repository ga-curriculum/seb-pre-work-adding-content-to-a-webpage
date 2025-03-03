describe('The image on the webpage', function () {
  it('should have an <img> element', function () {
    const img = document.querySelector('img');

    if (!img) {
      fail(
        'No <img> element found. Make sure you have added an image to your HTML.'
      );
    }

    expect(img).not.toBeNull();
  });

  it('should have the correct src attribute', function () {
    const img = document.querySelector('img');

    if (!img) {
      fail('No <img> element found. Ensure there is an image on the page.');
    } else {
      expect(img.getAttribute('src')).toEqual(
        'https://tinyurl.com/html-coffee-img',
        'The <img> tag should have the correct src attribute: "https://tinyurl.com/html-coffee-img".'
      );
    }
  });

  it('should have the correct alt attribute', function () {
    const img = document.querySelector('img');

    if (!img) {
      fail('No <img> element found. Ensure there is an image on the page.');
    } else {
      const altText = img.getAttribute('alt');

      if (altText !== 'Three friends sharing coffee') {
        fail(
          `Expected the <img> alt attribute to be "Three friends sharing coffee", but found "${altText}".\n\n❗ Make sure your alt text matches exactly, including capitalization and spacing.`
        );
      }

      expect(altText).toEqual('Three friends sharing coffee');
    }
  });

  it('should have the correct width and height attributes', function () {
    const img = document.querySelector('img');

    if (!img) {
      fail('No <img> element found. Ensure there is an image on the page.');
    } else {
      expect(img.getAttribute('width')).toEqual(
        '324',
        'The <img> tag should have width="324".'
      );

      expect(img.getAttribute('height')).toEqual(
        '242',
        'The <img> tag should have height="242".'
      );
    }
  });
});
