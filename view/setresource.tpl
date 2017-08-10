<div class="setresourcetpl">
	<h3>发布货源</h3>
	<div class="every">
		<div>
			<label>出发地</label>
			<input type="text" ng-model="setresourceList[0].start">
		</div>
		<div>
		   <label>目的地</label>
		   <input type="text" ng-model="setresourceList[0].end">	
		</div>
		<div>
			<label>重量</label>
			<input type="text" ng-model="setresourceList[0].weight">
		</div>
		<div>
		   <label>车</label>
		   <input type="text" ng-model="setresourceList[0].cartypes">
		</div>
		<div>
			<label>意向运费</label>
			<input type="text" ng-model="setresourceList[0].money">
		</div>
		<div class="sub"> 
           <input class="setout" type="submit" value="发布" ng-click="setNum()">
		   <input class="cancle" type="submit" value="取消" ng-click="cancleNum()">
		</div>
		
	</div>
</div>