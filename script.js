/*TODO:

Add a parser so Deidre can update easier
*/
var app = angular.module("dPortfolio", []);

app.controller("myCtrl", function($scope) {
  /******Data Block************/
  $scope.title = "D";
  $scope.bgImg = "img/background.jpg";
  $scope.artistStatement = "Oil painter and bodies in space";
  //Data structure containing work
  $scope.work = {
    aTitleOfWork:{
      title: "Untitled",
      year: 1998,
      image: ["img/untitled.jpg",
        "img/untitled_0.jpg"
      ]
    },
    anotherWork:{
      title: "Titled",
      year: 2013,
      image: ["img/title.jpg"]
    }
  };
  /****************************/
  /*******Zoom image functionality****/
  $scope.zoomImage = false;
  $scope.imageToZoom = "";

  $scope.onImageClick = function(imageName){
    $scope.zoomImage = true;
    $scope.imageToZoom = imageName;
    console.log(imageName);
    $scope.bgImg = "img/zoomBackground.jpg";
  };
  $scope.exitZoom = function(){
    $scope.zoomImage = false;
    $scope.bgImg = "img/background.jpg";
  }
  /**********************************/
})

//Will return to...
/*app.directive('imageView', function(){
  return{
    restrict: 'E', //element restriction
    scope: {
      imgs: '=data'
    },
    link: function(scope, element, attrs){
      console.log(scope.imgs);
    },
    return: {
      template: '<div ng-repeat="i in imgs"><p>i</p> </div>'
    }
  }
})*/
