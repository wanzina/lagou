require(["../js/config.js"],function  () {
	

	require(["jquery","base","bootstrap","swiper"],function  ($,base,bootstrap,Swiper) {
	$(function(){
		//搜索框
		$('.search_input').focus(function  () {
			$('.pos-guess_body').show();
		});
		$('.search_input').blur(function() {
			$('.pos-guess_body').hide();
		});
		//工具栏
		$('.menu_box').hover(function () {
			$(this).find('.menu_sub').show();
		},function  () {
			$(this).find('.menu_sub').hide();
		})
		//友情链接展开收起
		$('.expansion').click(function  () {
			if($(this).find('i').hasClass('i-up') ){
				$('.link_box').addClass('show-linkbox');
				$(this).html('展开<i></i>').find('i').removeClass('i-up');
			}else{
				$('.link_box').removeClass('show-linkbox');
				$(this).html('收起<i></i>').find('i').addClass('i-up');	
			}
		});
		
		//轮播图
	 	 var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 1,
	      spaceBetween:-30,
	      loop: true,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
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
		//我知道了
		$('.re_tips_iknow').click(function  () {
			$('.recommend_tips').hide();
		});
		//热门搜索
		$.ajax({
			type:"get",
			url:"../json/hotSearch.json",
			success:addhotSearch,
			async:true
		});
		function addhotSearch(data) {
			var str='';
			for (var i=0;i<data.length;i++) {
				//console.log(data[i].name);
				str+='<dd><a href="#">'+data[i].name+'</a></dd>';
			};
			$('.hot_search').html('<dt>热门搜索：</dt>'+str);
		};
		
		
		
		
		
		
	    //推荐职位
	    // $.ajax({
	    // 	type:"get",
	    // 	url:"../json/jobList.json",
		//  success:addJobList,
	    // 	async:true
		//  });
	    //  var iNow=0;
		//  function addJobList(data){
		//  	brandList=data;
		//  	//console.log(brandList['recommendJop']);
		//  	getBrandList(brandList['recommendJop']);
		 	
		//  }
		 
		// $('.jobtab').find('li').click(function  () {
		// 	$(this).css('border-bottom','2px solid #333333').siblings('li').css('border-bottom','none');
		// 	var index=$(this).index();
		// 	iNow=index; 
		// 	var dataType=$(this).attr('data-type');
		// 	for(key in brandList) {
		//  		if(key === dataType) {
		//  			getBrandList(brandList[key]);
		//  		}
		//  	}
		// });
	
		var start=2;
		$.ajax({
		    url: 'https://127.0.0.1:3001/api?pageNo='+start+'&&pageSize=6',
		   
		    success: addJobList
		    
		})
		function  addJobList(data) {
			
			//console.log(data.content.data.page.result)
			var json=data.content.data.page.result;
			var str = '';
			
			for(var i=0;i<json.length;i++){
				//console.log(json[i]);
				str+=`<li class="position_list_item">
					<div class="pli_top">
						<div class="pli_top_t clearfix">
							<div class="position_name fl clearfix">
								<h2 class="fl"><a href="#">${json[i].positionName}</a></h2>
								<span class="create-time fl">[${json[i].createTime}]</span>
								<div class="chat_me fl">
									
								</div>
							</div>
							<span class="salary fr">
								${json[i].salary}
							</span>
						</div>
						<div class="pli_top_info">
							<span>经验1-3年</span>
							<span>本科</span>
						</div>
						<div class="pli_top_lable">
							<span class="wordCut">HTML5</span>
						</div>
					</div>
					<div class="pli_btm clearfix">
						<a href="#" class="fl">
							<img class="company-logo" src="//www.lgstatic.com/${json[i].companyLogo}" />
						</a>
						<div class="pli_btm_right">
							<div class="company_name ">
								<a href="#">${json[i].companyName}</a>
							</div>
							<div class="industry">
								<span>移动互联网</span>
								<span>不需要融资</span>
								<span>${json[i].city}</span>
							</div>
						</div>
						
					</div>
				</li>`
											
			};
			$('.position_list_ul').html(str);	
		 }
	
	
	
		//热门公司
		$.ajax({
			type:"get",
			url:"../json/hotCompany.json",
			success:addCompanyList,
			async:true
		});
		function addCompanyList (data) {
			//console.log(data.result);
			hotCompanyList(data.result);
		
		}
		
		
		
		
	
	});
	function getBrandList(json) {
		var str = '';
		
		for(var i=0;i<json.length;i++){
			//console.log(json[i]);
	       str+='<li class="position_list_item"><div class="pli_top"><div class="pli_top_t clearfix"><div class="position_name fl clearfix"><h2 class="fl">';
	       str+='<a href="#">'+json[i].position+'</a></h2><span class="create-time fl">['+json[i].time+']</span><div class="chat_me fl"></div></div>';
		   str+='<span class="salary fr">'+json[i].min+'K-'+json[i].max+'k</span></div>';
		   str+='<div class="pli_top_info"><span>'+json[i].exp+'</span><span>'+json[i].edu+'</span></div>';
			str+='<div class="pli_top_lable"><span class="wordCut">'+json[i].posType+'</span></div></div>';
			str+='<div class="pli_btm clearfix"><a href="#" class="fl"><img class="company-logo" src="'+json[i].companyLogo+'"/></a>';			
			str+='<div class="pli_btm_right"><div class="company_name "><a href="#">'+json[i].companyName+'</a></div>';							
			str+='<div class="industry"><span>移动互联网</span><span>不需要融资</span><span>上海</span></div></div></div></li>';								
	    };
		$('.position_list_ul').html(str);	
		
	}
	
})
})
//热门公司
	function hotCompanyList (json) {
		var str='';
		for(var i=0;i<8;i++){
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
		</li>`			
		}
		$(".ad-company-list").html(str);
	}