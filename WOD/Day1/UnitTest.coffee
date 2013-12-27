# CoffeeScript

class AssertBase
    Fail: (msg) -> throw msg

    Equal: (expected, actual) -> if expected != actual then Assert.Fail "#{expected} != #{actual}"

    True: (actual) -> Assert.Equal(true, actual)

    Exception: (func) -> 
        try
            func
            Assert.Fail "Expected failure did not occur."
        catch error

Assert = new AssertBase

Test = (name, testfunc) -> 
    try
        testfunc()
        console.log "#{name} passed."
    catch error
        console.log "#{name} failed with #{error}"


Test "Basic Test", () -> true

Test "Addition Test", () -> Assert.Equal(4, 2 + 2)

Test "ExpectedFailure", () -> Assert.Exception( () -> throw "failure" )

Test "FailedTest", () -> Assert.True(false)