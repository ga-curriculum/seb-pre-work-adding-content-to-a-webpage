describe('The paragraph text', function () {
  it('should have a p element', function () {
    const p = document.querySelector('p');
    if (!p) {
      fail('No <p> element found. Make sure you have a <p> tag in your HTML.');
    }
    expect(p).not.toEqual(null);
  });

  it('should contain the text "Locally roasted coffee, specialty teas, and homemade treats."', function () {
    const p = document.querySelector('p');

    if (!p) {
      fail('No <p> element found. Ensure there is a <p> in your HTML.');
    } else {
      const normalizedText = p.textContent
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Removes accents if any

      if (
        normalizedText !==
        'Locally roasted coffee, specialty teas, and homemade treats.'
      ) {
        fail(
          `Expected <p> to contain "Locally roasted coffee, specialty teas, and homemade treats.", but found "${p.textContent.trim()}".\n\n❗ Make sure your paragraph is spelled correctly and does not have extra spaces or missing punctuation.`
        );
      }

      expect(normalizedText).toEqual(
        'Locally roasted coffee, specialty teas, and homemade treats.'
      );
    }
  });
});
