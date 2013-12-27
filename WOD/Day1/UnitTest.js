(function() {
  var Assert, AssertBase, Test;



  AssertBase = (function() {
    function AssertBase() {}

    AssertBase.prototype.Fail = function(msg) {
      throw msg;
    };

    AssertBase.prototype.Equal = function(expected, actual) {
      if (expected !== actual) {
        return Assert.Fail("" + expected + " != " + actual);
      }
    };

    AssertBase.prototype.True = function(actual) {
      return Assert.Equal(true, actual);
    };

    AssertBase.prototype.Exception = function(func) {
      var error;
      try {
        func;
        return Assert.Fail("Expected failure did not occur.");
      } catch (_error) {
        error = _error;
      }
    };

    return AssertBase;

  })();

  Assert = new AssertBase;

  Test = function(name, testfunc) {
    var error;
    try {
      testfunc();
      return console.log("" + name + " passed.");
    } catch (_error) {
      error = _error;
      return console.log("" + name + " failed with " + error);
    }
  };

  Test("Basic Test", function() {
    return true;
  });

  Test("Addition Test", function() {
    return Assert.Equal(4, 2 + 2);
  });

  Test("ExpectedFailure", function() {
    return Assert.Exception(function() {
      throw "failure";
    });
  });

  Test("FailedTest", function() {
    return Assert.True(false);
  });

}).call(this);
