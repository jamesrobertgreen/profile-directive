    app.controller('profileController', ['$scope', function ($scope) {
        $scope.profiles = [{
            "name": "James"
            , "image": "james.jpg"
            , "about": "Software Developer"
        }, {
            "name": "David"
            , "image": "david.jpg"
            , "about": "Estate Agent"
        }, {
            "name": "Adelle"
            , "image": "adelle.jpg"
            , "about": "Photographer"
        }];
    }]);
    app.directive("profileCard", function () {
        return {
            restrict: 'E'
            , link: function (scope, element, attrs) {
                scope.name = attrs.name;
                scope.image = attrs.image;
                scope.about = attrs.about;
            }
            , template: '<div class="panel panel-info">' + '<div class="panel-heading">' + '<h1 class="pull-left">{{name}}</h1> <img src="images/{{image}}" class="img-responsive img-circle img-thumbnail pull-right"><div class="clearfix"></div></div>' + '<div class="panel-body">' + '<h2><small class="text-muted">{{about}}</small></h2> </div>' + '</div>'
        }
    });