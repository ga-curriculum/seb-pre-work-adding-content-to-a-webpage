describe('Adding an image', () => {
  it('successfully adds the image tag with correct src', () => {
    try {
      const img = document.querySelector('img');
      expect(img.getAttribute('src')).toEqual('https://bit.ly/2FsuPLG');
      expect(img.getAttribute('alt')).toEqual('Tater Tot Casserole');
    } catch (err) {
      throw new Error('No img was found on the page.');
    }
  });
});
