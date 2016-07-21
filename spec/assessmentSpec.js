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


describe('context1', function() {

  var getNum = function() {
    return Math.floor(Math.random() * 100);
  }

  it('should exist', function() {
    expect(context1).toEqual(jasmine.any(Function));
  })

  it('should correctly assign context', function() {
    // var getNum = function() {
    //   Math.floor(Math.random() * 100);
    // }
    var num = getNum();
    var num2 = getNum(), num3 = getNum();
    var obj = {num: num};
    function sum(a, b) {
      return this.num + a + b;
    }
    var result = context1(sum, obj, num2, num3);
    expect(result).toEqual(num + num2 + num3);
  })
})

describe('context2', function() {
  var getNum = function() {
    return Math.floor(Math.random() * 100);
  }

  it('should exist', function() {
    expect(context2).toEqual(jasmine.any(Function));
  })

  it('should correctly assign context', function() {
    var nums = [getNum(), getNum(), getNum()]
    console.log(nums);
    var num = getNum();
    var obj = {number: num};

    function sum(a, b, c) {
      return this.number + a + b + c;
    }
    var result = context2(sum, obj, nums);
    expect(result).toEqual(num + nums.reduce(function(a, b) {
      return a + b;
    }))
  })
})

describe('context3', function() {
  var getNum = function() {
    return Math.floor(Math.random() * 100);
  }
  it('should exist', function() {
    expect(context3).toEqual(jasmine.any(Function));
  })

  it('should return a function', function() {
    expect(context3(function() {})).toEqual(jasmine.any(Function))
  })

  it('should assign context correctly', function() {
    var obj = {
      num: getNum()
    };

    function get() {
      return this.num
    }

    expect(context3(get, obj)()).toEqual(obj.num)
  })
})
