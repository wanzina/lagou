require(["../js/config.js"],function  () {
	require(["jquery","base","bootstrap","swiper"],function  ($,base,bootstrap,Swiper) {
		$(function  () {
			 var swiper = new Swiper('.swiper-container', {
		      slidesPerView: 5,
		      spaceBetween:-50,
		      slidesPerGroup: 5,
		      loop: true,
		      autoplay:true,
		
		      loopFillGroupWithBlank: true,
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		  }); 
		    swiper.el.onmouseover = function(){
		  	 swiper.autoplay.stop();
			};
			swiper.el.onmouseleave = function(){
		     swiper.autoplay.start();
			};
			//公司list
			
			
			
				
			(function(){
				$.ajax({
							url:`https://127.0.0.1:3001/ap/${$(".workcity .active").data('id')}-${$(".financing .active").data('id')}-${$(".companyscale em").attr('class')}-${$(".industry .active").data('id')}.json`,
							success:companyList
				});
				
				
				
				
				
				
				  
				$(".workcity a").click(function  () {
					$(".workcity em").attr('class','');
				 	$(this).addClass('active').siblings().removeClass('active');
				 	
				 	let nid=$(this).data('id')
				 
				 	$(".workcity em").addClass(''+nid);
				 	console.log()
				 	$.ajax({
							url:`https://127.0.0.1:3001/ap/${$(".workcity em").attr('class')}-${$(".financing .active").data('id')}-${$(".companyscale em").attr('class')}-${$(".industry .active").data('id')}.json`,
							success:companyList
					});
				 })
					
			 	 $(".financing a").click(function  () {
			 	 	$(".financing em").removeClass()
			 	 	var $this=$(this);
			 	 	var $all=$(".financing a")
				 	if ($(this).index() ==0) {
				 		
    					$(this).addClass('active').siblings().removeClass('active');
				 		nfinancing=0;
				 	}else{
				 		$(".financing a").eq(0).removeClass('active')
    					$this.toggleClass('active') // 这个方法是有就移除，没有就添加
				 		nfinancingarr.push($(this).data('id'))
				 		var nfinancingarr1=[...new Set(nfinancingarr)];
						nfinancing=nfinancingarr1.join(',');
						
				 	}
				 	$(".financing em").addClass(nfinancing)
				 	console.log($(".financing em").attr('class'))
				 	
				 	
				 	$.ajax({
							url:`https://127.0.0.1:3001/ap/${$(".workcity em").attr('class')}-${$(".financing em").attr('class')}-${$(".companyscale em").attr('class')}-${$(".industry .active").data('id')}.json`,
							success:companyList
					});
				 	
				 })
			 	  $(".companyscale a").click(function  () {
			 	  	$(".companyscale em").attr("class",'')
				 	if ($(this).index()==1) {
				 		$(this).addClass('active').siblings().removeClass('active');
				 		nfinancing=0;
				 		nfinancingarr=[];
				 		
				 	}else{
				 		$(this).addClass('active');
				 		$(".companyscale a:first").removeClass('active');
				 		nfinancingarr.push($(this).data('id'))
				 		var nfinancingarr1=[...new Set(nfinancingarr)];
						nfinancing=nfinancingarr1.join(',');
				 	}
				 	$(".companyscale em").addClass(nfinancing)
				 	$.ajax({
							url:`https://127.0.0.1:3001/ap/${$(".workcity em").attr('class')}-${$(".financing em").attr('class')}-${$(".companyscale em").attr('class')}-${$(".companyscale em").attr('class')}.json`,
							success:companyList
					});
				 })
			 	   $(".industry a").click(function  () {
			 	   	$(".industry em").attr("class",'')
				 	if ($(this).index()==1) {
				 		$(this).addClass('active').siblings().removeClass('active');
				 		nfinancing=0;
				 		nfinancingarr=[];
				 		
				 	}else{
				 		$(this).addClass('active');
				 		$(".industry a:first").removeClass('active');
				 		nfinancingarr.push($(this).data('id'))
				 		var nfinancingarr1=[...new Set(nfinancingarr)];
						nfinancing=nfinancingarr1.join(',');
				 	}
				 	$(".companyscale em").addClass(nfinancing)
				 	$.ajax({
							url:`https://127.0.0.1:3001/ap/${$(".workcity em").attr('class')}-${$(".financing em").attr('class')}-${$(".companyscale em").attr('class')}-${$(".industry .active").data('id')}.json`,
							success:companyList
					});
			 	   })
				
				
				//试试
				/*$('.industry a').on('click',function(){
				  console.log($('.workcity .active'))// 第一个数据
				  console.log($('.financing .active'))// 第二个数据
				  console.log($('.companyscale .active'))// 第三个数据
				  console.log($('.industry .active'))// 第四个数据
				  // ajax(1，2，3, 4)自己拼接
				})*/
				
			})()
			
			/*$.ajax({
					url:`https://127.0.0.1:3001/ap/${ncity}-${nfinancing}-${nindustry}-${nscale}.json`,
					success:companyList
			});
			*/
			$('.pagination li').click(function  () {
					start=$(this).index()+1;
					$.ajax({
						url:`https://127.0.0.1:3001/ap/${0}-${0}-0-0.json?`,
						success:companyList
					});
			})
			
			
			/*var arrIndex=[];
			var arrLi=[];
			var arrpos=[];
			var arrview=[];
			var arrresume=[];*/
			
			 
		
		
			//	https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
			
//			(function  () {
//				console.log(arrLi)
//				$(".btnDefault").click(function  () {
//					
//					/*$.ajax({
//						url:`https://127.0.0.1:3001/ap/${start}-${lgnumber}-0-0.json`,
//						success:companyList
//					});
//					*/
//				})
//				$(".btnPos").click(function  () {
//					/*arrpos.sort(function function_name (a,b) {
//						return a-b;
//					})*/
//					
//					$.ajax({
//						url:`https://127.0.0.1:3001/ap/${start}-${lgnumber}-0-1.json`,
//						success:companyList
//					});
//				})
//				$(".btnResume").click(function  () {
//					/*arrpos.sort(function function_name (a,b) {
//						return a-b;
//					})*/
//					
//					//https://www.lagou.com/upload/ltm/oss.html?u=/gongsi/0-0-0-0&q=358&n=363&d=149&l=463&dns=0&p=983&pi=12&qn=755&t=1544006655425
////					$.ajax({
////						url:`https://127.0.0.1:3001/appi/0-0-0-0&q=358&n=363&d=149&l=463&dns=0&p=983&pi=12&qn=755&t=1544006655425`,
////						success:companyList
////					});
//				})
//				$(".btnView").click(function  () {
//					/*arrpos.sort(function function_name (a,b) {
//						return a-b;
//					})*/
//					//8O00
//					/*start=8;
//					lgnumber='O';*/
//					$.ajax({
//						url:`https://127.0.0.1:3001/ap/${start}-${lgnumber}-0-3.json`,
//						success:companyList
//					});
//				})
				
				
				
	
//			})()	
			
			
//https://www.lagou.com/gongsi/0-0-0-0.json
		
		  
		});
	})
})
function  companyList(data) {
	
	
	
	let defaultarr=[]
	data.result.forEach(function  (item) {
		defaultarr.push(item)
	})
	console.log(defaultarr)
	//初始页面渲染
	//默认展示
	zhanshi(defaultarr)
	//按职位数量进行排序
	
	
	$('.btnDefault').click(function  () {
		$(this).addClass('active').siblings().removeClass('active')
		zhanshi(defaultarr)
	})
	
	$('.btnPos').click(function  () {
		$(this).addClass('active').siblings().removeClass('active')
		let posarr=[];
		defaultarr.forEach(function  (item) {
			posarr.push(item)
		})
		
		posarr.sort(function (a,b) {
			return b.positionNum-a.positionNum
		})
		
		zhanshi(posarr)
	})
	$('.btnView').click(function  () {
		$(this).addClass('active').siblings().removeClass('active')
		let posarr=[];
		defaultarr.forEach(function  (item) {
			posarr.push(item)
		})
		
		posarr.sort(function (a,b) {
			return b.interviewRemarkNum-a.interviewRemarkNum
		})
		
		zhanshi(posarr)
	})
	$('.btnResume').click(function  () {
		$(this).addClass('active').siblings().removeClass('active')
		let posarr=[];
		defaultarr.forEach(function  (item) {
			posarr.push(item)
		})
		
		posarr.sort(function (a,b) {
			return b.processRate-a.processRate
		})
		
		zhanshi(posarr)
	})
	
	function zhanshi (json) {
		var str='';
		for(var i=0;i<json.length;i++){
		
		str+=`<li class="company-item">
				<div class="aci_top">
					<p class="company-logo"><a href="#"><img src="//www.lgstatic.com/${json[i].companyLogo}"/></a></p>
					<p class="company-name wordCut"><a href="">${json[i].companyShortName}</a></p>
					<p class="indus_stage wordCut">
						<span>${json[i].industryField}</span>
						<span>${json[i].financeStage}</span>
					</p>
					<p class="advantage wordCut">${json[i].companyFeatures}</p>
				</div>
				<div class="aci_btm clearfix">
					<a href="#" class="bottom_item aci_btmi_1 fl">
						<p class="green">${json[i].interviewRemarkNum}</p>
						<p class="gray">面试评价</p>
					</a>
					<a href="#" class="bottom_item aci_btmi_2 fl">
						<p class="green">${json[i].positionNum}</p>
						<p class="gray">在招职位</p>
					</a>
					<a href="#" class="bottom_item aci_btmi_3 fl">
						<p class="green">${json[i].processRate}%</p>
						<p class="gray">简历处理率</p>
					</a>
				</div>
			</li>`;

		}
		$('.ad-company-list').html(str)
	}
	
	
	
	
	
	
	
	
 }