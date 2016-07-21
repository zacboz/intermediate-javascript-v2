var foo;
/* Write a function called async.
  async will return a promise.
  That promise will call setTimeout on a function
  which changes the variable foo (above) to 'bar'
  And resolve the promise when setTimeout completes.
*/

function async() {
  var defer = $q.defer();

  setTimeout(function() {
    foo = 'bar';
    defer.resolve();
  }, 1000)

  return defer.promise;
}
