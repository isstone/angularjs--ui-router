<!-- <h1>我是employ</h1> -->
<div class="employ">
	<div class="employ-up">
		<h4>我收到的简历</h4>
	    <h4>我发布的职位</h4>
	</div>
	<div class="myresume">
		<div class="myresume-up">
			<ul>
			<li></li>
			<li></li>
			<li></li>	
			</ul>
			<span></span>
		</div>
        <div class="container-fluid resource-mange">
		<div class="row tilte">
			<div class="col-lg-2">应聘职位</div>
			<div class="col-lg-1">姓名</div>
			<div class="col-lg-3">驾龄/有无自备车</div>
			<div class="col-lg-2">联系方式</div>
			<div class="col-lg-4">操作</div>
		</div>
		<div class="row"  ng-repeat="item in resume">
			<div class="col-lg-2">{{item.type}}</div> 
			<div class="col-lg-1">{{item.name}}</div>
			<div class="col-lg-3">{{item.drivetime}}</div>
			<div class="col-lg-2">{{item.tel}}</div>
			<div class="col-lg-4 manage-detail">
			  <input type="text" ng-model="item.manage[0].offer">
			  <input type="text" ng-model="item.manage[0].ischoose">
			  <input type="text" ng-model="item.manage[0].hastold">
			</div> 
		</div>
	</div>
	</div>
	<div class="job">
		<ul class="job-up">
			<li></li>
			<li></li>
		</ul>
	</div>

</div>