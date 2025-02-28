describe('Adding a song list', function () {
  it('should have an <h2> element with the correct text', function () {
    const h2Element = document.querySelector('h2');

    expect(h2Element).not.toBe(
      null,
      'No <h2> element found. Make sure you have added an <h2> heading to introduce the song list.'
    );

    if (h2Element) {
      expect(h2Element.textContent.trim()).toBe(
        'Song List',
        `Expected <h2> to contain "Song List", but found "${h2Element.textContent.trim()}". Ensure the heading text is correct and does not have extra spaces.`
      );
    }
  });

  it('should have an unordered list (<ul>) with exactly 4 list items (<li>)', function () {
    const ulElement = document.querySelector('ul');

    expect(ulElement).not.toBe(
      null,
      'No <ul> element found. Make sure you have added an unordered list to display the song titles.'
    );

    if (ulElement) {
      const listItems = ulElement.querySelectorAll('li');

      expect(listItems.length).toBe(
        4,
        `Expected 4 <li> elements inside the <ul>, but found ${listItems.length}. Ensure you have added exactly four list items.`
      );
    }
  });

  it('should have the correct song titles in the list items', function () {
    const listItems = document.querySelectorAll('ul li');

    const expectedSongs = [
      'Ogre Blood Ballad',
      'Love is Weird',
      'Just Because',
      'Darkness in the Dark',
    ];

    if (listItems.length === 4) {
      listItems.forEach((item, index) => {
        expect(item.textContent.trim()).toBe(
          expectedSongs[index],
          `Expected list item ${index + 1} to contain "${
            expectedSongs[index]
          }", but found "${item.textContent.trim()}". Ensure the song titles are correct and do not have extra spaces.`
        );
      });
    } else {
      fail(
        'The number of list items is incorrect. Ensure you have exactly four songs listed in the <ul>.'
      );
    }
  });
});
