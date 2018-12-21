require(["../js/config.js"],function  () {
	require(["jquery","base","bootstrap","swiper"],function  ($,base,bootstrap,Swiper) {
		var ipage=1;
		
		$.ajax({
		    url: 'https://127.0.0.1:3001/api?pageNo='+ipage+'&&pageSize=6',
		    type: 'get',
		    success: addJobList,
		    async: true
		})
		$(".pagina li").click(function  () {
			ipage=$(this).index();
			$.ajax({
			    url: 'https://127.0.0.1:3001/api?pageNo='+ipage+'&&pageSize=6',
			    type: 'get',
			    success: addJobList,
			    async: true
			})
		})
		
		
		
		
	})
})
function addJobList (data) {
			var json=data.content.data.page.result;
			var str='';
			for (var i=0;i<json.length;i++) {
				str+=`<li class="rec_item">
							<div class="clearfix"> 
								<div class="rec_item_l">
									<p class="row">
										<a href="#">
											<span class="posName g3">${json[i].positionName}</span>
											<em class="posAdd g3">[${json[i].city}]</em>
										</a>
										<span class="posDate">${json[i].createTime}</span>
									</p>
									<p class="row">
										<span class="salary">${json[i].salary}</span>
										<em class="experience">3-5年/不限</em>
									</p>
								</div>
								<div class="rec_item_r clearfix">
									<div class="coLeft fl">
										<p class="row">
											<a href="#" class="coName g3">${json[i].companyName}</a>
										</p>
										<p class="row">
											<span class="coDetaile">电子商务/天使轮</span>
										</p>
									</div>
									<div class="coLogo fl">
										<a href=""><img src="//www.lgstatic.com/${json[i].companyLogo}"/></a>
									</div>
									
								</div>
							</div>
							
							<div class="rec_item_b clearfix">
								<div class="pos_welfare">
									<span>技能培训</span>
									<span>节日礼物</span>
									<span>带薪年假</span>
								</div>
								<div class="coadv">
									“弹性工作制,团队氛围好,福利待遇好,发展空间大”
								</div>
								
							</div>
						</li>`;
			}
			$(".recommend_list").html(str)
}