// alert('success')
// 获取应用程序，引入依赖模块
angular.module('icketang',['ui.router'])
// 第四 定义路由配置
.config(function ($stateProvider,$urlRouterProvider){
	$stateProvider
	// 主页路由
	.state('home',{
		url:'/',
		templateUrl:'view/home.tpl',
		controller:'homeCtrl'
	})
	// 登录页面路由
	.state('login',{
		url:'/login',
		templateUrl:'view/login.tpl',
		controller:'loginCtrl'
	})
	// 货源管理路由
	.state('resource',{
		url:'/resource',
		templateUrl:'view/resource.tpl',
		controller:'resourceCtrl'
	})
	// 发布货源路由配置
	.state('resource.setresource',{
		url:'/setresource',
		templateUrl:'view/setresource.tpl',
		controller:'setresourceCtrl'
	})
	// 货运管理路由
	.state('transport',{
		url:'/transport/:pageNum', 
		templateUrl:'view/transport.tpl',
		controller:'transportCtrl'
	})
	// 招聘路由
	.state('employ',{
		url:'/employ/:pageNum',
		templateUrl:'view/employ.tpl',
		controller:'employCtrl'
	})
	// 物流园路由
	.state('warehouse',{
		url:'/warehouse',
		templateUrl:'view/warehouse.tpl',
		controller:'warehouseCtrl'
	})
	//工具路由
	.state('tool',{
		url:'/tool',
		templateUrl:'view/tool.tpl',
		controller:'toolCtrl'
	})
    

	// 定义默认路由
	// $urlRouterProvider.otherwise('/')
})
// 货源管理控制器
.controller('resourceCtrl',function ($rootScope, $http,$scope,$timeout,Observer,$location){
    
       $http.get(
	    	'data/resource.json'
	    )
	    .success(function (res){
	    	// console.log(res)
	    	if(res&&res.errno===0){
	    	$scope.resource=res.resource;
	    	// Array.prototype.push.apply($scope.resource,value);
	    	// console.log($scope.resource,value);
	    	}
	    	
	    })
	    console.log(123456, $scope)
	  $scope.tosetresource=function(){
         $location.path('/resource/setresource');
         // $scope.changeroute= !$scope.changeroute;

	  }
	Observer.on('setNum',function (e,value){
	   	// $scope.tmpValue = value;
	   	// console.log($scope.tmpValue);
	   	// $scope.resource=[].concat($scope.resource,value);
	   	// console.log($scope.resource,value);
	   	// Array.prototype.push.apply($scope.resource,value)
	   	// console.log(value)
	     // console.log($scope.resource,000)
	   	// $scope.resource=Array.prototype.concat.apply($scope.resource,value);
	   	// console.log($scope.resource,222);
		// if(value) {
			$http.get(
	    	'data/resource.json'
	    	)
	    	.success(function (res){
	    	// console.log(res)
	    	if(res&&res.errno===0){
	    		var result = res.resource.concat(value);
	    	$scope.resource=result;console.log(987,$scope,result)
	    	// Array.prototype.push.apply($scope.resource,value);
 	    	}

	    	console.log($scope,999)
	    })
		// }
   })

})
// 发布货源控制器
.controller('setresourceCtrl',function ($scope,$timeout,$location,Observer){
   $scope.setresourceList=[{'start':$scope.msg1,
     'end':$scope.msg2,'weight':$scope.msg3,
     'cartypes':$scope.msg4,'money':$scope.msg5}];

   $timeout(function(){
   	 // console.log($scope.setresourceList)
   },10000)
   console.log(7777777)
   $scope.setNum=function(){
   	console.log("ok")
   	// $scope.$emit('setNum',$scope.setresourceList)
   	console.log(1111,$scope.setresourceList)
    $location.path('/resource');
   	Observer.fire('setNum',$scope.setresourceList);
   }

console.log($scope)
})
// 货运管理控制器
.controller('transportCtrl',function ($scope,$http){
	  $http.get(
    	'data/transport.json'
    )
    .success(function (res){
    	if(res&&res.errno===0){
    	$scope.transport=res.transport;
    	}
    	
    })

    $scope.showLayer=false;
    $scope.toggleShow=function (value){
        $scope.showLayer=!$scope.showLayer; 
    }
    $scope.closeLayer=function(value){
    	 $scope.showLayer=!$scope.showLayer
    }
    $scope.showfindlayer=false;
     $scope.togglefindlayer=function(){
     	$scope.showfindlayer=!$scope.showfindlayer;
     }
     $scope.closefindlayer=function(){
     	$scope.showfindlayer=!$scope.showfindlayer;
     }

     // 实现搜索运单号的功能，用过滤器来实现
     $scope.msg="";
     $scope.submit=function(){
        $scope.filterFn=function (value, index, arr){
     	return value.passId.indexOf($scope.msg)>=0;
        }
        $scope.showfindlayer=!$scope.showfindlayer;
     }
     // 实现刷新功能
    $scope.changeState=function(){
    	 $scope.filterFn=function (value, index, arr){
     	    return value.passId.indexOf($scope.msg)<0;
        }
    }
})
// 招聘控制器
.controller('employCtrl',function ($scope,$http){
      $http.get(
    	'data/employ.json'
        )
    .success(function (res){
    	console.log(res,"haha")
    	if(res&&res.errno===0){
    	$scope.resume=res.resume;
    	}
    	
    })  
})
// 物流园控制器
.controller('warehouseCtrl',function (){})
// 工具控制器
.controller('toolCtrl',function (){})
// 导航控制器
.controller('navCtrl',function ($scope){
  $scope.list=[
     {
      title:'货源管理',
      img:'01.png',
      url:'#/resource'
     },
     {
      title:'货运管理',
      img:'02.png',
      url:'#/transport/1'
     },
     {
      title:'招聘',
      img:'03.png',
      url:'#/employ/1'
     },
     {
      title:'物流园',
      img:'04.png',
      url:'#/warehouse'
     },
     {
      title:'工具',
      img:'05.png',
      url:'#/tool'
     },
   ]	
})
// 首页控制器
.controller('homeCtrl',function(){})
// 登录控制器
.controller('loginCtrl',function ($scope,$http,$location,$rootScope){
	$scope.gotoLogin=function (){
		$http
		.post('action/login.php',$scope.data)
		.success(function (res){
			if(res&&res.errno==0){
				$rootScope.userName=res.data.username;
				$location.path('/')
			}
		})
	}
})
.run(function ($rootScope, $http, $location) {
	// 检测登录
	$http({
		url: 'action/checkLogin.php'
	})
	// 请求成功
	.success(function (res) {
		// 成功将用户名显示在页面中
		if (res && res.errno === 0 && res.data && res.data.username) {
			// 存储用户名
			$rootScope.userName = res.data.username;
			console.log(res.data.username)
			// 进入首页
			$location.path('/')
		} else {
			$location.path('/login')
		}
	})
	// 订阅事件，监听路由改变
	$rootScope.$on('$stateChangeSuccess', function () {
		// 如果用户名不存在，我们要重定向到登录页面
		if ($rootScope.userName === undefined) {
			$location.path('/login')
		}
		// console.log($rootScope.userName)
	})
})

// 封装观察者模式，实现作用域之间的通信
.factory('Observer', function () {
	// 定义消息管道
	var _msg = {};
	return {
		// 订阅方法
		on: function (type, fn) {
			// 将回调函数存储
			if (_msg[type]) {
				// 直接存储
				_msg[type].push(fn)
			} else {
				// 创建消息管道
				_msg[type] = [fn]
			}
		},
		fire: function (type) {
			// 从第二个开始表示数据
			// 消息已经注册过，遍历消息管道，然后执行
			if (_msg[type]) {
				for (var i = 0; i < _msg[type].length; i++) {
					_msg[type][i].apply(null, arguments)
				}
			}

		},
		// 注销方法
		off: function (type, fn) {
			// 如果没有fn，注销全部
			if (fn) {
				// 遍历管道，找到该fn，删除
				if (_msg[type]) {
					for (var i = _msg[type].length - 1; i >= 0; i--) {
						// 如果是这个函数，就删除
						if (fn === _msg[type][i]) {
							_msg[type].splice(i, 1)
						}
					}
				}
			} else {
				// 删除全部的消息
				if (_msg[type]) {
					delete _msg[type];
				}
			}
		}
	}
})