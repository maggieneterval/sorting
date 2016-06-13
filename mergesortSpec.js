describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([2,1,5,0]) ).toEqual( [[2,1], [5,0]] );
  });
});
