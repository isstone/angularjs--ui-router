<!-- <h1>我是transport</h1> -->
<div class="app-user-list app-container transport">

	<div class="up">
	    <div><a href="" ng-click="changeState()">刷新</a></div>
	    <a href="" ng-click="togglefindlayer(true)">查找</a>
	    <a href="" ng-click="toggleShow(true)">货运轨迹</a>
	    <a href="">货运保险</a>
	    <a href="">导出运单</a>
    </div> 
	
	<div class="container-fluid resource-mange">
		<div class="row tilte">
			<div class="col-lg-2">发车日期</div>
			<div class="col-lg-1">运单号</div>
			<div class="col-lg-2">货物类型</div>
			<div class="col-lg-2">货物重量</div>
			<div class="col-lg-1">起点</div>
			<div class="col-lg-1">终点</div>
			<div class="col-lg-2">当前位置</div>
			<div class="col-lg-1">承运人</div>
		</div>
		<div class="row" ng-repeat="item in transport | filter : filterFn">
			<div class="col-lg-2"> <input type="radio">{{item.date}}</div> 
			<div class="col-lg-1">{{item.passId}}</div>
			<div class="col-lg-2">{{item.types}}</div>
			<div class="col-lg-2">{{item.weight}}</div>
			<div class="col-lg-1">{{item.start}}</div>
			<div class="col-lg-1">{{item.end}}</div>
			<div class="col-lg-2">{{item.nowplace}}</div>
			<div class="col-lg-1">{{item.driver}}</div>    
		</div>
	</div>

	<div class="layer-path" ng-show="showLayer">
		<div class="layer-path-model">
			<div class="close" ng-click="closeLayer(true)">
				<p>货运轨迹</p>
				<a>关闭</a>
			</div>
			<div class="img"></div>
		</div>
	</div>

	<div class="find-layer" ng-show="showfindlayer">
		<div class="layer-model">
			<div class="layertitle">
				<p>查找</p>
				<a href="" ng-click="closefindlayer(true)">关闭</a>
			</div>
			<input type="text" placeholder="请输入运单号" class="write" ng-model="msg">
			<input type="submit" value="发布" class="fire" ng-click="submit()">
		</div>
	</div>

</div>