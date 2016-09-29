$(function(){

	
	/*********页面top右端鼠标事件*******/
	$(".li_01").hover(function(){
		$(this).css("background","#fff");
		$(this).find(".top_ul3").stop().slideDown(400);
	},function(){
		$(this).css("background","#f2f2f2");
		$(this).find(".top_ul3").stop().slideUp(400);
	});
/*********页面top左端城市鼠标事件*******/
	ajax("get", "http://10.30.162.24/聚美优品/json/jimei01.json", "", function(data){
		//2.将数据转成对象
		var arr = JSON.parse(data)._data;
		var aDiv = $("<div id='city_id'></div>");
		$("#top_ul_li").append(aDiv);
		for(var i = 0; i < arr.length; i++){
			var aDl = $("<dl class='city_dl'></dl>");
			var aDt = $("<dt></dt>");
			aDt.html(arr[i].title);
			aDl.append(aDt);
			var str = JSON.stringify(arr[i].des);
			str = str.replace('"[', "");
			str = str.replace(']"', "");
			var arra = str.split(",");
			for(var j = 0; j < arra.length;j++){
				var aDd = $("<dd></dd>");
				var aA = $("<a href='#'></a>");
				aA.html(arra[j]);
				aDd.append(aA);
				aDl.append(aDd);
				aDd.click(function(){
					$("dd").css("background","").find("a").css("color","#6c6c6c");
					$(this).css("background","#ed145b").find("a").css("color","#fff");
					$("#top_ul_li").find("span").html($(this).find("a").html());
				})
			}
		aDiv.append(aDl);
		}			
	});

	$("#top_ul_li").hover(function(){
		$(this).css("background","#fff");
		$(this).find("#city_id").stop().slideDown(400);
	},function(){
		$(this).css("background","#f2f2f2");
		$(this).find("#city_id").stop().slideUp(400);
	});

	/*********页面搜索框*******/
	ajax("get", "http://10.30.162.24/聚美优品/json/jumei02.json", "", function(data){
		//2.将数据转成对象
		var arr = JSON.parse(data)._data;
		var aUl = $("<ul id='ipt_ul'></ul>");
		for(var i = 0;i < arr.length; i++){
			var aLi = $("<li></li>");
			var aSpan = $("<span></span>");
			var aB = $("<b></b>");
			aSpan.html(arr[i].title);
			aB.html(arr[i].des);
			aLi.append(aSpan);
			aLi.append(aB);
			aUl.append(aLi);
		}
		$("#logo_center").append(aUl);

		$(".center_ipt").focus(function(){
			aUl.fadeIn(400);
		});
		$(".center_ipt").blur(function(){
			aUl.fadeOut(400);
		});	
	});

	/***************购物车********************/	
	$("#logo_right").hover(function(){
		$(this).css("background","#fff").find("a").css("color","red");
		$("#car_div").stop().slideDown(50).css("z-index","2");
	},function(){
		$(this).css("background","#f8f8f8").find("a").css("color","#5a605e");
		$("#car_div").stop().slideUp(50);
	})
	
	/*********美妆商城*******/
	ajax("get", "http://10.30.162.24/聚美优品/json/jumei03.json", "", function(data){
		//2.将数据转成对象
		var arr = JSON.parse(data).hhhh;
		for(var i = 0; i < arr.length;i++){
			var oDiv = $("<div class='nav_div'></div>");
			var oP = $("<p></p>");
			oP.html(arr[i]._brand[0].title);
			oDiv.append(oP);
			for(var j = 1; j < arr[i]._brand.length; j++){
				var oSpan = $("<a></a>");
				oSpan.attr("href","#");
				oSpan.html(arr[i]._brand[j].title);
				oDiv.append(oSpan);
			}
			$("#nav_div").append(oDiv);
		}
	});
	$("#nav_li").hover(function(){
		$("#nav_div").stop().slideDown(400);
	},function(){
		$("#nav_div").stop().slideUp(400);
	});


/***********banner图*****************/
	var speen = 0;
	var times = setInterval(function(){	
		$("#ban_ul").find("li").css("display","none");
		$("#ban_ul").find("li").eq(speen % 2).fadeIn(400);
		$(".banner").find("a").css("background","#ccc");
		$(".banner").find("a").eq(speen % 2).css("background","#f00");
		speen++;
	},3000);

/***********banner图 下圆点点击效果*****************/
	$(".banner").find("a").click(function(){
		setTimeout(times,9000);
		speen++;
		$("#ban_ul").find("li").css("display","none");
		$(".banner").find("a").css("background","#ccc");
		$(this).css("background","#f00");
		$("#ban_ul").find("li").eq($(this).index()).stop().fadeIn(400);
	});

/***********今日疯抢*****************/
	$("#img_div").find("a").eq(0).css("background","#666").css("color","#fff").find("div").css("display","block");
	$("#img_div").find("a").click(function(){
		$("#img_div").find("a").css("background","#fff").css("color","#000").find("div").css("display","none");
		$(this).css("background","#666").css("color","#fff").find("div").css("display","block");

	});

	/*****************瀑布流*********************/
	ajax("get", "http://10.30.162.24/聚美优品/json/jumei_imglist.json", "", function(data){
		//2.将数据转成对象
		//imglist
		var arr = JSON.parse(data)._imglist;
		for(var i = 0; i < arr.length;i++){
			var oA = $("<a></a>");
			oA.attr("href","html/jumei.html");
			var oImg = $("<img />")
			oImg.attr("src",arr[i].title);
			oA.append(oImg);
			oA.appendTo($("#img_ul").find("li").eq(i % 2));
			
		}
		$("#img_ul").find("a").hover(function(){
			$("#img_ul").find("a").css("opacity","1");
			$(this).css("opacity","0.8");
		},function(){
			$("#img_ul").find("a").css("opacity","1");
		});
		/**********点击页面跳转*************/
		$("#img_ul").find("a").click(function(){
			$(this).attr("href","html/jumei.html?img=" + $(this).find("img").attr("src"));
		})

		//everyday
		var arr1 = JSON.parse(data)._everyday;
		for(var i = 0; i < arr1.length; i++){

			var oB = $("<b></b>");
			oB.html(arr1[i].num2);
			var oEm = $("<em>人已购买</em>");
			var oSpan = $("<span></span>");
			var oDiv1_1 = $("<div class='div1_div1'></div>");
			oDiv1_1.append(oSpan);
			oDiv1_1.append(oEm);
			oDiv1_1.append(oB);

			var oA = $("<a href='#'>去看看</a>");
			var oB0 = $("<b>￥</b>");
			var oSpan0 = $("<span></span>");
			oSpan0.html(arr1[i].num1);
			var oDiv1_0 = $("<div class='div1_div0'></div>");
			oDiv1_0.append(oB0);
			oDiv1_0.append(oSpan0);
			oDiv1_0.append(oA);

			var oA0 = $("<a></a>");
			oA0.html(arr1[i]._value);

			var oDiv_1 = $("<div class='div_div1'></div>");
			oDiv_1.append(oA0);
			oDiv_1.append(oDiv1_0);
			oDiv_1.append(oDiv1_1);

			var oDiv_0 = $("<div class='div_div0'></div>");

			var oA_0 = $("<a href='html/jumei.html'></a>");
			var oImg = $("<img/>");
			oImg.attr("src",arr1[i].title);
			oA_0.append(oImg);

			var oUl = $("<ul><li>海外直采</li><li>海外价格</li><li>闪电发货</li></ul>");			
			var oDiv_ = $("<div class='day_div'></div>");
			oDiv_.append(oA_0);
			oDiv_.append(oDiv_0);
			oDiv_.append(oDiv_1);
			oDiv_.append(oUl);
			$(".everyday").find(".wrap").append(oDiv_);


			/**********点击页面跳转*************/
			oA_0.click(function(){
				$(this).attr("href", "html/jumei.html?img=" + $(this).find("img").attr("src"))
			});

		}
		$(".day_div").hover(function(){
			$(this).find("ul").css("display","block");
			$(this).find("img").css("opacity","0.8");
		},function(){
			$(this).find("img").css("opacity","1");
			$(this).find("ul").css("display","none");
		});
		


		/**********上新品单******************/
		var arr2 = JSON.parse(data)._main;
		for(var i = 0; i < arr2.length; i++){

			var zImg = $("<img />");
			zImg.attr("src",arr2[i].title);

			var zH4 = $("<h4></h4>");
			zH4.html(arr2[i].rem);

			var zH2 = $("<h2>去看看</h2>");
			var zP = $("<p><strong>【官方授权】</strong></p>");
			zP.html(arr2[i]._value);
			var zDiv1 = $("<div class = 'main_div1'></div>");

			var zDiv0 = $("<div class='main_div'><em>￥</em></div>");
			var zSpan = $("<span></span>");
			zSpan.html(arr2[i].num1);
			var zDel = $("<del></del>");
			zDel.html("￥"+arr2[i].num2);
			zDiv0.append(zSpan);
			zDiv0.append(zDel);
			if(arr2[i].num3){
				var zDiv = $("<div class='main_div0'><h6>销量</h6></div>");
				var zH5 = $("<h5></h5>");
				zH5.html(arr2[i].num3);
				var zI = $("<i></i>天<i></i>时<i></i>分<i></i>");
				zDiv.append(zH5);
				zDiv.append(zI);
				zDiv.html(zDiv.html() + "秒");
				zDiv0.append(zDiv);
				
			}
			var zA = $("<a href='html/jumei.html'></a>");
			zA.append(zImg);
			zA.append(zH4);
			zA.append(zH2);
			zA.append(zDiv1);
			zA.append(zP);
			zA.append(zDiv0);
			$(".main").find("li").eq(i % 3).append(zA);

				/**********点击页面跳转*************/
			zA.click(function(){
				$(this).attr("href", "html/jumei.html?img=" + $(this).find("img").attr("src"));
			});
		}
		$(".main").find("a").hover(function(){
			$(this).find("h4").css("display","block");
			$(this).find("h2").css("display","block");
			$(this).css("opacity","0.7");
		},function(){
			$(this).find("h4").css("display","none");
			$(this).find("h2").css("display","none");
			$(this).css("opacity","1");
		});
		
	});
	obj_times(".main_div0");
/*************右侧菜单************/
	$(".a_001").hover(function(){
		$(this).css("background","#ed145b");		
		$(this).find(".a_div").css("display","block");	
		$(this).find(".a_div").stop().animate({"left":"-92px","opacity":"1"});		
	},function(){
		$(this).css("background","#444851");			
		$(this).find(".a_div").stop().animate({"left":"-125px","opacity":"0"},function(){
			$(this).find(".a_div").css("display","block");
		})	
	});

	$("#a_01").hover(function(){
		$(this).css("background","#ed145b");		
		$("#people").css("display","block");	
		//$(this).find(".a_div").stop().animate({"left":"-92px","opacity":"1"});		
	},function(){
		$(this).css("background","#444851");			
		$("#people").css("display","none");	
	});





	/*************右边购物车事件************/
	  $("#a_02").click(function(){

	  	if($(".car_left").css("right") == "-250px"){
	  		$(".car_left").stop().animate({right:40},function(){
	  			$(".car_left").css("position","fixed");
	  		});

	 			
		  	var sc_str = $.cookie('goods',{path:"/"});
			if(sc_str){ //如果购物车不为空
				$(".car_f1").css("background","#fff");
				$(".car_ff").css("display","block");
				var sc_obj = eval(sc_str); //和JS中的JSON.parse()
				var sc_num = 0; //记录所有商品的数量
				var ohtml0 = "";
				for(var i in sc_obj){
					sc_num += Number(sc_obj[i].num);
					ohtml0 += "<div class='car_f'><img src=" + sc_obj[i].id + "><div class='car_right'><a href='#'>谜尚魅力水感润采气垫粉凝霜套装</a><span>型号：【21号】15g*2</span><h3>￥159</h3><h4>X" +sc_obj[i].num+ "</h4></div></div>";
						//alert(ohtml0);
				}
				$(".car_f1").html(ohtml0);
				$(".cen_span").html(sc_num);
				$(".car_ff").find("h5").html("￥" + sc_num*159);
				$("#a_02").find("span").html(sc_num);
			}			
	  	}else{
	  		$(".car_left").stop().animate({right:-250});

	  	}


	  })
	/*********左侧菜单****************/
	$(window).resize(function (){
		$(".body_left").css("left",parseInt($(".wrap").offset().left- 80));
	});
	
	$(window).scroll(function(){
		if($(document).scrollTop() > 4600 ){
			$(".body_left").fadeIn();
		}else{
			$(".body_left").fadeOut();
		}
		if($(document).scrollTop() >= 4600  &&　$(document).scrollTop() < 11790){
			$(".left_ul").find("p").eq(0).attr("class","left_p_00");
			$(".left_ul").find("p").eq(1).attr("class","left_p_1");
			$(".left_ul").find("p").eq(2).attr("class","left_p_2");
		}else if($(document).scrollTop() >= 11790  &&　$(document).scrollTop() < 16500){
			$(".left_ul").find("p").eq(0).attr("class","left_p_0");
			$(".left_ul").find("p").eq(1).attr("class","left_p_01");
			$(".left_ul").find("p").eq(2).attr("class","left_p_2");
		}else{
			$(".left_ul").find("p").eq(0).attr("class","left_p_0");
			$(".left_ul").find("p").eq(1).attr("class","left_p_1");
			$(".left_ul").find("p").eq(2).attr("class","left_p_02");
		}
	});


	/*********瀑布流****************/
	ajax("get", "http://10.30.162.24/聚美优品/json/jumei_foot.json", "", function(data){
		var arr = JSON.parse(data)._data;
		$(".newproduct").find("div").append(aaa(arr));
		var arr1 = JSON.parse(data)._data1;
		$(".brand").find("div").append(aaa(arr1));
		var arr2 = JSON.parse(data)._data2;
		$(".footer").find("div").append(aaa(arr2));
		function aaa(arrs){
			var aDiv = $("<div class='wrap_div'><div class='wrap_left'><img src= " + arrs[0].title + "></div></div>");
			var aDiv1 = $("<div class='wrap_right'>");
			for(var i = 1; i < arrs.length; i++){
				var aDivs = $("<div class='w_r_div'><img src=" + arrs[i].title + "><div class='w_r_div_0'><p class='p_01'>" + arrs[i].des + "</p><p class='p_02'>" + arrs[i].des2 +"</p><p class='p_03'>" + arrs[i].des1 +"</p><p class='p_04'><i></i>天<i></i>时<i></i>分<i></i>秒</p></div></div>");
				aDiv1.append(aDivs);
			};
			aDiv.append(aDiv1);
			return aDiv;
		}
		obj_times(".p_04");
	});

/*********下部列表****************/
	var bUl = $("<ul></ul>");
	for(var i = 0; i < 7 ;i++){
		var bLi = $("<li><a href=''><div></div><h3>成功在美上市</h3><h4>股票代码NYSE:JMEI</h4></a></li>");
		bLi.find("div").css("background-position",63 *i + "px 0px");
		bUl.append(bLi);
	}
	$(".foot_ul").find(".wrap").append(bUl);

	var bDiv = $("<div></div>");
	for(var i = 0;i < 5;i++){
		var bDl = $("<dl><dt>服务保障</dt><dd><a href='#'>新手指南</a></dd><dd><a href='#'>新手指南</a></dd><dd><a href='#'>新手指南</a></dd><dd><a href='#'>新手指南</a></dd></dl>");
		bDiv.append(bDl);
		bDl.find("a").hover(function(){
				$(this).css("color","#e22565").stop().animate({"margin-left":"15px"});
		},function(){
				$(this).css("color","#333").stop().animate({"margin-left":"0px"});
		});
	}
	var bDl1 = $("<dl><dt>手机聚美</dt><dd class='dd_div'><div></div></dd><dd>下载移动客户端</dd></dl>");
	var bDl2 = $("<dl><dt>微信聚美</dt><dd class='dd_div'><div></div></dd><dd>下载移动客户端</dd></dl>");	
	bDiv.append(bDl1);
	bDiv.append(bDl2);
	$(".foot_ul").find(".wrap").append(bDiv);

	for(var i = 0;i < 5;i++){
		$(".foot_foot").find("a").eq(i).css("background-position",126 *i + "px 0px");
	};

	/**********************************/
	sc_car();
	function sc_car(){
		var sc_str = $.cookie('goods',{path:"/"});
		//alert(sc_str);
		if(sc_str){ //如果购物车不为空
			var sc_obj = eval(sc_str); //和JS中的JSON.parse()
			var sc_num = 0; //记录所有商品的数量
			for(var i in sc_obj){
				sc_num += Number(sc_obj[i].num);
			}
			$("#a_02").find("span").html(sc_num);
		}
	}
});

function zero(time_num){
	if(time_num < 10 ){
		time_num = "0" + time_num;
	}
	return time_num;
}

function obj_times(obj){
	var Time = 172800;
	setInterval(function(){
		for(var i = 0;i < 60; i++){
			switch(i % 4){
				case 0:
					$(obj).find("i").eq(i).html(zero(parseInt(Time /86400)));
					break;
				case 1:
					$(obj).find("i").eq(i).html(zero(parseInt(Time %86400 /3600)));
					break;
				case 2:
					$(obj).find("i").eq(i).html(zero(parseInt(Time %86400 %3600 /60)));
					break;
				default:
					$(obj).find("i").eq(i).html(zero(parseInt(Time %86400 %3600 %60)));
					break;
			}
		}		
		Time--;
	},1000);
}


