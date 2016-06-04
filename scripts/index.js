angular.module('angularBootstrapMaterialDocs', ['angularBootstrapMaterial', 'ngAnimate', 'ui.bootstrap'])
  .config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://rawgit.com/**'
    ]);
  })
  .controller('navController', function ($scope) {
    $scope.isCollapsed = true;
  });
