"use strict";function addJobList(t){for(var s=t.content.data.page.result,a="",n=0;n<s.length;n++)a+='<li class="rec_item">\n\t\t\t\t\t\t\t<div class="clearfix"> \n\t\t\t\t\t\t\t\t<div class="rec_item_l">\n\t\t\t\t\t\t\t\t\t<p class="row">\n\t\t\t\t\t\t\t\t\t\t<a href="#">\n\t\t\t\t\t\t\t\t\t\t\t<span class="posName g3">'+s[n].positionName+'</span>\n\t\t\t\t\t\t\t\t\t\t\t<em class="posAdd g3">['+s[n].city+']</em>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<span class="posDate">'+s[n].createTime+'</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p class="row">\n\t\t\t\t\t\t\t\t\t\t<span class="salary">'+s[n].salary+'</span>\n\t\t\t\t\t\t\t\t\t\t<em class="experience">3-5年/不限</em>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="rec_item_r clearfix">\n\t\t\t\t\t\t\t\t\t<div class="coLeft fl">\n\t\t\t\t\t\t\t\t\t\t<p class="row">\n\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="coName g3">'+s[n].companyName+'</a>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p class="row">\n\t\t\t\t\t\t\t\t\t\t\t<span class="coDetaile">电子商务/天使轮</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="coLogo fl">\n\t\t\t\t\t\t\t\t\t\t<a href=""><img src="//www.lgstatic.com/'+s[n].companyLogo+'"/></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="rec_item_b clearfix">\n\t\t\t\t\t\t\t\t<div class="pos_welfare">\n\t\t\t\t\t\t\t\t\t<span>技能培训</span>\n\t\t\t\t\t\t\t\t\t<span>节日礼物</span>\n\t\t\t\t\t\t\t\t\t<span>带薪年假</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="coadv">\n\t\t\t\t\t\t\t\t\t“弹性工作制,团队氛围好,福利待遇好,发展空间大”\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>';$(".recommend_list").html(a)}require(["../js/config.js"],function(){require(["jquery","base","bootstrap","swiper"],function(t,s,a,n){var e=1;t.ajax({url:"https://127.0.0.1:3001/api?pageNo="+e+"&&pageSize=6",type:"get",success:addJobList,async:!0}),t(".pagina li").click(function(){e=t(this).index(),t.ajax({url:"https://127.0.0.1:3001/api?pageNo="+e+"&&pageSize=6",type:"get",success:addJobList,async:!0})})})});