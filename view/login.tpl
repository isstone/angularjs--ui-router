<!-- <h1>我是login</h1> -->
<div class="app-login">
	<div class="login-container">
		<h1>旺旺物流管理系统</h1>
		<form name="login" ng-submit="gotoLogin()" class="form-horizontal">
			<div class="from-group row">
				<label for="" class="control-label col-lg-3">用户名：</label>
				<div class="col-lg-9"><input 
					type="text" 
					class="form-control" 
					name="username" 
					ng-model="data.username"
					ng-required="true"
					ng-pattern="/^[a-zA-Z]\w{3,7}$/"
					placeholder="请输入用户名" 
				></div>
			</div>
			<div class="from-group row">
				<label for="" class="control-label col-lg-3">密&emsp;码：</label>
				<div class="col-lg-9"><input 
					type="password" 
					class="form-control" 
					name="password" 
					ng-model="data.password"
					ng-required="true"
					ng-pattern="/[a-zA-Z]+.*\d+|\d+.*[a-zA-Z]+/"
					placeholder="请输入密码" 
				></div>
			</div>
			<div class="row text-container text-danger">
				<!-- 什么时候显示提示 -->
				<!-- 输入后并且不符合规范 -->
				<p ng-show="login.username.$dirty && login.username.$invalid">用户名以字母开头，4-8位字母数字下划线</p>
				<p ng-show="login.password.$dirty && login.password.$invalid">密码要包含字母和数字</p>
			</div>
			<div><button ng-disabled="login.$invalid" class="btn btn-success">提交</button></div>
		</form>
	</div>
</div>