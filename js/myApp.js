var myApp = angular.module("myApp",[]);
myApp.controller("myCtrl",function($scope){
	$scope.name = "jeck";
});
myApp.directive("hello",function(){
	return {
		restrict : "AE",
		template : "<div><input type='text' ng-model='name'>{{name}}</div>",
		replace : true
	}
});


//数据绑定
var myNum = angular.module("myNum",[]);
myNum.controller("myCtrl",["$scope",function($scope){
	$scope.ctrlFlavor = "hello";
}]);
myNum.directive("hello",function() {
	// body...
	return {
		restrict : "AE",
		scope : { flavor :'@' },
		template : "<div>{{flavor}}</div>"
		// link : function(scope,element,attrs){
		// 	scope.flavor = attrs.flavor;
		// }
	}
});