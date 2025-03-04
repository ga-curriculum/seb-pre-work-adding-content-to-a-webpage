describe('The newest section with an h2 and a ul', function () {
  it('should have a second h2 element with the text "Our Specialties"', function () {
    const h2Elements = document.querySelectorAll('h2');

    if (h2Elements.length < 2) {
      fail(
        'No second <h2> element found. Make sure you have added "Our Specialties" as a second heading.'
      );
    } else {
      const secondH2 = h2Elements[1]; // Selects the second <h2> tag
      const h2Text = secondH2.textContent.trim();

      if (h2Text !== 'Our Specialties') {
        fail(
          `Expected the second <h2> to contain "Our Specialties", but found "${h2Text}".\n\n❗ Make sure your heading is spelled correctly and does not have extra spaces.`
        );
      }

      expect(h2Text).toEqual('Our Specialties');
    }
  });

  it('should have a <ul> element with five list items', function () {
    const ul = document.querySelector('ul');

    if (!ul) {
      fail(
        'No <ul> element found. Make sure you have added an unordered list after the "Our Specialties" heading.'
      );
    } else {
      const listItems = ul.querySelectorAll('li');

      if (listItems.length !== 5) {
        fail(
          `Expected <ul> to have 5 <li> items, but found ${listItems.length}.\n\n❗ Make sure you have exactly five list items in your unordered list.`
        );
      }

      expect(listItems.length).toEqual(5);
    }
  });

  it('should contain the correct list items in the <ul>', function () {
    const ul = document.querySelector('ul');

    if (!ul) {
      fail(
        'No <ul> element found. Ensure there is an unordered list under "Our Specialties".'
      );
    } else {
      const expectedItems = [
        'Handcrafted Espresso',
        'Signature Arabic Coffee',
        'Organic Matcha Latte',
        'Freshly Baked Croissants',
        'Traditional Date Pastries',
      ];

      const listItems = ul.querySelectorAll('li');
      const actualItems = Array.from(listItems).map((li) =>
        li.textContent.trim()
      );

      expectedItems.forEach((expectedText, index) => {
        if (!actualItems[index] || actualItems[index] !== expectedText) {
          fail(
            `Expected list item ${
              index + 1
            } to be "${expectedText}", but found "${
              actualItems[index] || 'MISSING'
            }".\n\n❗ Make sure your list items are spelled correctly and in the right order.`
          );
        }

        expect(actualItems[index]).toEqual(expectedText);
      });
    }
  });
});
