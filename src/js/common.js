$(function(){
	//头部app二维码
	$('.show_qrcode_app').hover(function() {
		$('.qrcode_app').show();
	},function  () {
		$('.qrcode_app').hide();
	});
	//轮播
	 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      direction:'horizontal',
  	  autoplay: {
	    delay: 2000,
	    stopOnLastSlide: false,
	    disableOnInteraction: true,
	   },

    });
     swiper.el.onmouseover = function(){
  	 swiper.autoplay.stop();
	};
	swiper.el.onmouseleave = function(){
     swiper.autoplay.start();
	};
	//用户注册
	$('#submitbtn').click(function  () {
		ZhuCe();
	});
	function ZhuCe(){
		if(NoKong()){
			var arr = [];
            if(localStorage.user){
				arr = eval(localStorage.user);
				for(e in arr){
						if($('#registerName').val()==arr[e].loginName){
							alert('该账号已被注册');
							clear();
							return;
						}
				}
			}
			var user = {'loginName':$("#registerName").val(),'loginPsd':$("#password").val()};
			arr.push(user);
			localStorage.user=JSON.stringify(arr);
			alert('注册成功');
			clear();
		}

	}
	function clear(){
		$('#registerName').val('');
		$("#password").val('');
	}
	function NoKong(){
		if($('#registerName').val()==""){
			alert('用户名不能为空');
			return false;
		}else if($('#password').val()==""){
			alert('密码不能为空');
			return false;
		}
		return true;
	}
		
	
});
