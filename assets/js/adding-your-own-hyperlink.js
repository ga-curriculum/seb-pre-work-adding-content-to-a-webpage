describe('Adding a second hyperlink', () => {
  it('successfully adds the second anchor tag with correct text and href', () => {
    try {
      const anchorTag2 = document.querySelectorAll('a')[1];
      expect(anchorTag2.innerText).toEqual(
        'Check out our reviews on Pitchfork.'
      );
      expect(anchorTag2.getAttribute('href')).toEqual('https://pitchfork.com/');
    } catch (err) {
      throw new Error('Two anchor tags were not found on the page.');
    }
  });
});
