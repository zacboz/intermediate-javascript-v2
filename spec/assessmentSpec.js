describe('async', function() {
  it('should exist', function() {
    expect(async).toEqual(jasmine.any(Function))
  })

  it('should not change foo before timeout', function() {
    var foo;
    async();
    expect(foo).toEqual(undefined);
  })

  it('should return a promise', function() {
    expect(async().then).toEqual(jasmine.any(Function))
  })

  it('should change foo after promise', function(done) {
    foo = undefined;
    async().then(function(res) {
      expect(foo).toEqual('bar');
      done();
    })
  })
})
