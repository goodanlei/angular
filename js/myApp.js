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
	$scope.ctrlFlavor = "急啊的罚款塑料袋放进；阿里";
}]);

//@ 单项（字符串）    = 双向 （父级属性）  & 函数  稍后调用
myNum.directive("hello",function() {
	// body...
	return {
		restrict : "AE",
		scope : { flavor :'@' },
		template : "<div>{{flavor}}</div>",
//		replace: true
//		 link : function(scope,element,attrs){
//		 	scope.flavor = attrs.flavor;
//		 }
	}
});