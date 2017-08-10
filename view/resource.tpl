
<!-- <h1>我是resource</h1> -->
<div class="app-user-list app-container resource ng-show=changeroute">

	<div><h1>货源管理 <a ng-click="tosetresource()"href="">发布货源</a></h1></div>
	
	
	<div class="container-fluid resource-mange">
		<div class="row tilte">
			<div class="col-lg-2">起点</div>
			<div class="col-lg-2">终点</div>
			<div class="col-lg-2">货物重量</div>
			<div class="col-lg-2">所需车型</div>
			<div class="col-lg-4">意向运费</div>
		</div>
		<div class="row"  ng-repeat="item in resource">
			<div class="col-lg-2">{{item.start}}</div> 
			<div class="col-lg-2">{{item.end}}</div>
			<div class="col-lg-2">{{item.weight}}</div>
			<div class="col-lg-2">{{item.cartypes}}</div>
			<div class="col-lg-4">{{item.money}}</div> 
		</div>
	</div>

	<!-- <ul class="pagination pull-right clearfix">
		<li><a ng-href="#/resource/{{pageNum - 1 < 1 ? 1 : pageNum - 1}}">上一页</a></li>
		<li><a ng-href="#/userlist/{{+pageNum + 1}}">下一页</a></li>
	</ul> -->
</div>
<div ui-view class="viewsetresource"></div>