define(["jquery"],function  ($) {
	$(function(){
		//头部app二维码
		$('.user_dropdown').hover(function() {
			$(this).find('ul').show();
		},function  () {
			$(this).find('ul').hide();
		});
		//底部二维码
		$('.footer_app').hover(function() {
			$(this).find('img').show();
		},function  () {
			$(this).find('img').hide();
		});
		$('.footer_mini').hover(function() {
			$(this).find('img').show();
		},function  () {
			$(this).find('img').hide();
		});
		$('.footer_wechat').hover(function() {
			$(this).find('img').show();
		},function  () {
			$(this).find('img').hide();
		});
	});
})
	