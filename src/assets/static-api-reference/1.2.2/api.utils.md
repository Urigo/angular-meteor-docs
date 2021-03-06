# $meteorUtils

A service which contains helpful utilities for angular-meteor applications

---------------

> `$meteor.autorun / $scope.$meteorAutorun` has been deprecated in favor of the [autorun API](http://www.angular-meteor.com/api/1.3.1/autorun).

> In the previous version of Angular-Meteor we wrapped Meteor’s autorun method, but now we put that wrapper on your context (controllerAs or $scope).

> Angular-Meteor will also automatically stop the autorun when the $scope is destroyed.

> Here is an example for how to migrate:

Old code:

    angular.module(`myApp`, []).controller(`MyCtrl`, function($scope) {
      $scope.meteorAutorun(function() {

      });
    });

New Code:

Example using `$scope`:

    angular.module(`myApp`, []).controller(`MyCtrl`, function($scope) {
      $scope.autorun(function() {

      });
    });

Example using `controllerAs` and components:

    angular.module(`myApp`, []).directive(`myComponent`, function() {
      return {
        restrict: `E`,
        controllerAs: `myCtrl`,
        controller: function($scope, $reactive) {
          $reactive(this).attach($scope);
          this.autorun(function() {

          });
        }
      };
    });

Example using [angular2now](https://github.com/pbastowski/angular2-now) and ReactiveComponent:

    let {Component} = angular2now;
    angular.module(`myApp`);

    @Component({selector: `my-component`})
    class myComponent extends ReactiveComponent {
      constructor() {
        super(arguments);
        this.autorun(function() {

        });
      }
    }

----

## Usage

    $meteor.autorun( :scope, :function );  /  $scope.$meteorAutorun( :function );

    $meteor.getCollectionByName( :collectionName );

----

## Methods

### autorun( :scope, :function )
### $scope.$meteorAutorun( :function )

Wrapper function to Meteor's [Tracker.autorun](http://docs.meteor.com/#/full/tracker_autorun).

Keeps the changes in Angular's scope context and closes the autorun when scope automatically destroys.

The two types of syntax works the same way.

<br>

#### Parameters

<table class="variables-matrix input-arguments">
<thead>
<tr>
  <th>Param</th>
  <th>Type</th>
  <th>Details</th>
  <th>Required</th>
</tr>
</thead>
<tbody>
<tr>
  <td>scope</td>
  <td>
    <a href="" class="label type-hint type-hint-regexp">scope</a>
  </td>
  <td><p>The AngularJS scope you use the autorun on.
  </p></td>
  <td><a href="" class="label type-hint type-hint-array">Yes</a></td>
</tr>
<tr>
  <td>fn</td>
  <td>
    <a href="" class="label type-hint type-hint-string">function</a>
  </td>
  <td><p>The function that will re-run every time a reactive variable changes inside it.
  </p></td>
  <td><a href="" class="label type-hint type-hint-array">Yes</a></td>
</tr>
</tbody>
</table>


----
## Example

			$meteor.autorun($scope, function() {
          if ($scope.getReactively('currentUser')) {
              $scope.userForScore = $scope.$meteorObject(Userinfo, {user_id: $scope.getReactively('currentUser')._id});//$rootScope.currentUser._id
          }
      });


## Method

### getCollectionByName( :collectionName )

#### Parameters

<table class="variables-matrix input-arguments">
<thead>
<tr>
  <th>Param</th>
  <th>Type</th>
  <th>Details</th>
  <th>Required</th>
</tr>
</thead>
<tbody>
<tr>
  <td>collectionName</td>
  <td>
    <a href="" class="label type-hint type-hint-string">string</a>
  </td>
  <td><p>The name of the collection you want to get back
  </p></td>
  <td><a href="" class="label type-hint type-hint-array">Yes</a></td>
</tr>
</tbody>
</table>
