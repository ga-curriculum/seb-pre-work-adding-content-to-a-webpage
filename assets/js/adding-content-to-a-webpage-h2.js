describe('The subheading of the document', function () {
  it('should have an h2 element', function () {
    const h2 = document.querySelector('h2');
    if (!h2) {
      fail(
        'No <h2> element found. Make sure you have an <h2> tag in your HTML.'
      );
    }
    expect(h2).not.toEqual(null);
  });

  it('should contain the text "Bringing people together over artisanal coffee and fresh pastries."', function () {
    const h2 = document.querySelector('h2');

    if (!h2) {
      fail('No <h2> element found. Ensure there is an <h2> in your HTML.');
    } else {
      const normalizedText = h2.textContent
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Removes accents if any

      if (
        normalizedText !==
        'Bringing people together over artisanal coffee and fresh pastries.'
      ) {
        fail(
          `Expected <h2> to contain "Bringing people together over artisanal coffee and fresh pastries.", but found "${h2.textContent.trim()}".\n\n❗ Make sure your subheading is spelled correctly and does not have extra spaces.`
        );
      }

      expect(normalizedText).toEqual(
        'Bringing people together over artisanal coffee and fresh pastries.'
      );
    }
  });
});
