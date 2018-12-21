$(function  () {
	$('#submit_btn').click(function  () {
		
		login();
	});
	
	function login(){
		if(NoKong()){
			if(localStorage.user){
				arr = eval(localStorage.user);//获取localStoragevar 
				//console.log(arr)
				k = 0;
				for(e in arr){
					if($('#loginName').val()==arr[e].loginName){
						if($('#loginPsd').val()==arr[e].loginPsd){
							   window.location.href="index.html";
								window.event.returnValue=false;
							   alert('登录成功');k = 0;
						}else{
							alert('密码错误');clear();k = 0;return;
						}
					}else{
						k = 1;
					}
						};
				if(k==1){
					alert('用户名不存在');clear();
				}
			}else{
				alert('用户名不存在');clear();
				}
			}
		};
	function clear(){
		$('#loginName').val('');$("#loginPsd").val('');
	}
	function NoKong(){
		if($('#loginName').val()==""){
			alert('用户名不能为空');return false;
		}else if($('#loginPsd').val()==""){
			alert('密码不能为空');return false;}
		return true;
	}
	
});