describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles single items', function(){
    expect(bubbleSort([1])).toEqual( [1] );
  });
  it('handles multiple items', function(){
    expect( bubbleSort([2,1,5,0]) ).toEqual( [0,1,2,5] );
  });
});

//this is another way to create a spy. It doesn't replace compareAndSwap, like the other way does, instead it  ?mimics? it
//var spy=jasmine.createSpy().and.callFake(compareAndSwap)

describe("A spy on compareAndSwap", function() {
  beforeEach(function() {
    spyOn(window, "compareAndSwap");
  });
  it("tracks the number of times it was called", function(){
    window.bubbleSort([3,5,2])
    expect(window.compareAndSwap.calls.count()).toEqual(6);
  })
});
