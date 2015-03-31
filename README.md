# ng.httpFake
Simulates the result of a request from the $http AngularJS

## Bower install de dependency
``$ bower install ng.httpFake --save``

## Model / Controller include
```
angular.module('example', ["ng.httpFake"]).controller('controller', ['$scope', function($scope) {
  //...
}]);
```
