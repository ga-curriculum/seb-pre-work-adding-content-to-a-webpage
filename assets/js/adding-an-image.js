describe('Adding an image', function () {
  it('should have an <img> element', function () {
    const img = document.querySelector('img');

    expect(img).not.toBe(
      null,
      'No <img> element found. Make sure you have added an image to your HTML.'
    );
  });

  it('should have the correct "src" attribute', function () {
    const img = document.querySelector('img');

    if (img) {
      expect(img.getAttribute('src')).toBe(
        'https://bit.ly/2FsuPLG',
        `Expected <img> "src" to be "https://bit.ly/2FsuPLG", but found "${img.getAttribute(
          'src'
        )}". Ensure the image source URL is correct.`
      );
    } else {
      fail(
        'No <img> element found. Make sure you have added an image to your HTML.'
      );
    }
  });

  it('should have the correct "alt" attribute', function () {
    const img = document.querySelector('img');

    if (img) {
      expect(img.getAttribute('alt')).toBe(
        'Tater Tot Casserole',
        `Expected <img> "alt" text to be "Tater Tot Casserole", but found "${img.getAttribute(
          'alt'
        )}". Ensure the alternative text is correct.`
      );
    } else {
      fail(
        'No <img> element found. Make sure you have added an image to your HTML.'
      );
    }
  });
});
