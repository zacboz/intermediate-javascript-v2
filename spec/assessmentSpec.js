describe('grandpa', function() {
  it ('should have the correct answers', function() {
    expect(scopeArray1).toEqual(jasmine.any(Array));
    expect(scopeArray1).toContain('dad', 'son', 'granpa', 'uncle', 'cousin');
    expect(scopeArray2).toContain('dad', 'son', 'uncle', 'cousin');
    expect(scopeArray3).toContain('grandpa', 'dad', 'son');
    expect(scopeArray4).toContain('uncle', 'cousin');
    expect(scopeArray5).toContain('son');
  })
})

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


describe('contexter', function() {
  it('should exist', function() {
    expect(contexter).toEqual(jasmine.any(Function));
  })

  it('should correctly assign context', function() {
    var getNum = function() {
      Math.floor(Math.random() * 100);
    }
    var num = getNum();
    var num2 = getNum(), num3 = getNum();
    var obj = {num: num};
    function sum(a, b) {
      return this.num + a + b;
    }
    var result = contexter(sum, obj, num2, num3);
    expect(result).toEqual(num + num2 + num3);
  })
})
