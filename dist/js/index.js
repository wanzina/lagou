"use strict";function hotCompanyList(t){for(var n="",s=0;s<8;s++)n+='<li class="company-item">\n\t\t\t\t<div class="aci_top">\n\t\t\t\t<p class="company-logo"><a href="#"><img src="//www.lgstatic.com/'+t[s].companyLogo+'"/></a></p>\n\t\t\t\t<p class="company-name wordCut"><a href="">'+t[s].companyShortName+'</a></p>\n\t\t\t\t<p class="indus_stage wordCut">\n\t\t\t\t\t<span>'+t[s].industryField+"</span>\n\t\t\t\t\t<span>"+t[s].financeStage+'</span>\n\t\t\t\t</p>\n\t\t\t\t<p class="advantage wordCut">'+t[s].companyFeatures+'</p>\n\t\t\t</div>\n\t\t\t<div class="aci_btm clearfix">\n\t\t\t\t<a href="#" class="bottom_item aci_btmi_1 fl">\n\t\t\t\t\t<p class="green">'+t[s].interviewRemarkNum+'</p>\n\t\t\t\t\t<p class="gray">面试评价</p>\n\t\t\t\t</a>\n\t\t\t\t<a href="#" class="bottom_item aci_btmi_2 fl">\n\t\t\t\t\t<p class="green">'+t[s].positionNum+'</p>\n\t\t\t\t\t<p class="gray">在招职位</p>\n\t\t\t\t</a>\n\t\t\t\t<a href="#" class="bottom_item aci_btmi_3 fl">\n\t\t\t\t\t<p class="green">'+t[s].processRate+'%</p>\n\t\t\t\t\t<p class="gray">简历处理率</p>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</li>';$(".ad-company-list").html(n)}require(["../js/config.js"],function(){require(["jquery","base","bootstrap","swiper"],function(i,t,n,s){i(function(){i(".search_input").focus(function(){i(".pos-guess_body").show()}),i(".search_input").blur(function(){i(".pos-guess_body").hide()}),i(".menu_box").hover(function(){i(this).find(".menu_sub").show()},function(){i(this).find(".menu_sub").hide()}),i(".expansion").click(function(){i(this).find("i").hasClass("i-up")?(i(".link_box").addClass("show-linkbox"),i(this).html("展开<i></i>").find("i").removeClass("i-up")):(i(".link_box").removeClass("show-linkbox"),i(this).html("收起<i></i>").find("i").addClass("i-up"))});var t=new s(".swiper-container",{slidesPerView:1,spaceBetween:-30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!0}});t.el.onmouseover=function(){t.autoplay.stop()},t.el.onmouseleave=function(){t.autoplay.start()},i(".re_tips_iknow").click(function(){i(".recommend_tips").hide()}),i.ajax({type:"get",url:"../json/hotSearch.json",success:function(t){for(var n="",s=0;s<t.length;s++)n+='<dd><a href="#">'+t[s].name+"</a></dd>";i(".hot_search").html("<dt>热门搜索：</dt>"+n)},async:!0});i.ajax({url:"https://127.0.0.1:3001/api?pageNo=2&&pageSize=6",success:function(t){for(var n=t.content.data.page.result,s="",a=0;a<n.length;a++)s+='<li class="position_list_item">\n\t\t\t\t\t<div class="pli_top">\n\t\t\t\t\t\t<div class="pli_top_t clearfix">\n\t\t\t\t\t\t\t<div class="position_name fl clearfix">\n\t\t\t\t\t\t\t\t<h2 class="fl"><a href="#">'+n[a].positionName+'</a></h2>\n\t\t\t\t\t\t\t\t<span class="create-time fl">['+n[a].createTime+']</span>\n\t\t\t\t\t\t\t\t<div class="chat_me fl">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class="salary fr">\n\t\t\t\t\t\t\t\t'+n[a].salary+'\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="pli_top_info">\n\t\t\t\t\t\t\t<span>经验1-3年</span>\n\t\t\t\t\t\t\t<span>本科</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="pli_top_lable">\n\t\t\t\t\t\t\t<span class="wordCut">HTML5</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="pli_btm clearfix">\n\t\t\t\t\t\t<a href="#" class="fl">\n\t\t\t\t\t\t\t<img class="company-logo" src="//www.lgstatic.com/'+n[a].companyLogo+'" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class="pli_btm_right">\n\t\t\t\t\t\t\t<div class="company_name ">\n\t\t\t\t\t\t\t\t<a href="#">'+n[a].companyName+'</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="industry">\n\t\t\t\t\t\t\t\t<span>移动互联网</span>\n\t\t\t\t\t\t\t\t<span>不需要融资</span>\n\t\t\t\t\t\t\t\t<span>'+n[a].city+"</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</li>";i(".position_list_ul").html(s)}}),i.ajax({type:"get",url:"../json/hotCompany.json",success:function(t){hotCompanyList(t.result)},async:!0})})})});