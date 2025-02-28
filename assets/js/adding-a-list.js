describe('Adding a list', () => {
  it('successfully adds the h2 tag with correct text', () => {
    try {
      const h2Text = document.querySelector('h2').innerText;
      expect(h2Text).toEqual('Song List');
    } catch (err) {
      throw new Error('No h2 was found on the page.');
    }
  });
  it('successfully adds the ul with the requested list items and text', () => {
    try {
      const listItems = document.querySelector('ul').querySelectorAll('li');
      expect(listItems.length).toEqual(4);
      expect(listItems[0].innerText).toEqual('Ogre Blood Ballad');
      expect(listItems[1].innerText).toEqual('Love is Weird');
      expect(listItems[2].innerText).toEqual('Just Because');
      expect(listItems[3].innerText).toEqual('Darkness in the Dark');
    } catch (err) {
      throw new Error('The list and/or items were not found on the page.');
    }
  });
});
