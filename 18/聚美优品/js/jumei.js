$(function(){


	//alert(location.search);
	var arr = location.search.split("=");
	$(".m_top_left").find("img").attr("src", "../" + arr[1]);
	//alert(arr[1]);
	sc_car();
   /*************header右侧菜单************/
	$(".head_li_div").hover(function(){
		$(this).css("background","#fff").find("div").stop().slideDown()
	},function(){
		$(this).css("background","").find("div").stop().slideUp()
	})
	/***************点击加入购物车********************/
	$(".btn_div").click(function(){

		var first = $.cookie("goods") == null ? true : false;
		var same = false; //判断是否有相同的商品

		if(first){
			//第一次添加的时候,建立json结构
			$.cookie('goods', "[{'id':'" + arr[1] +"','num':1}]",{path:"/"});
			$.cookie('first', "false");
		}else{

			var str = $.cookie('goods');
			//alert(str);
			var arrA = eval(str); //eval(str); eval JQ的字符串转对象
			//遍历所有的对象,如果id相同,让该商品的数量递增。
			for(var i in arrA){
				if(arrA[i].id == arr[1]){
					arrA[i].num = arrA[i].num + 1; //添加数量
					var cookieStr = JSON.stringify(arrA);
					$.cookie('goods', cookieStr,{path:"/"});
					//alert($.cookie('goods'))
					same = true;
				}
			}
			//如果id不同,添加该商品
			if(!same){
				var obj = {id:arr[1],num:1};
				arrA.push(obj);
				var cookieStr = JSON.stringify(arrA);
				$.cookie('goods', cookieStr,{path:"/"});
			}
		}
		sc_car();
	});
	/***********************************/
	function sc_car(){
		var sc_str = $.cookie('goods');
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
  /*************上部购物车事件************/
  $(".ban_rightA").hover(function(){
  	 $(this).css("background-position","0 -32px");
  	 $(this).find("div").css("display","block");
  },function(){
  	$(this).css("background-position","0 0");
  	 $(this).find("div").css("display","none");
  })
  /*************右边购物车事件************/
  $("#a_02").click(function(){

  	if($(".car_left").css("right") == "-250px"){
  		$(".car_left").stop().animate({right:40});

  		if($(".car_ff").css("display") == "block"){
 
  		}else{
	  		var sc_str = $.cookie('goods');
			if(sc_str){ //如果购物车不为空
				$(".car_f1").css("background","#fff");
				$(".car_ff").css("display","block");
				var sc_obj = eval(sc_str); //和JS中的JSON.parse()
				var sc_num = 0; //记录所有商品的数量
				for(var i in sc_obj){
					sc_num += Number(sc_obj[i].num);
					var html0 = $("<div class='car_f'><img src=../" + sc_obj[i].id + " /><div class='car_right'><a href=''>谜尚魅力水感润采气垫粉凝霜套装</a><span>型号：【21号】15g*2</span><h3>￥159</h3><h4>X" +sc_obj[i].num+ "</h4></div></div>");
					$(".car_f1").append(html0);
				}
				$(".cen_span").html(sc_num);
				$(".car_ff").find("h5").html("￥" + sc_num*159);
			}
		}
  	}else{
  		$(".car_left").stop().animate({right:-250});
  	}


  })


/***************main_foot图片滑动****************************/
	for(var i = 0; i < $(".main_foot").find("li").length; i++){
		$(".main_foot").find("li").find("div").eq(i).css("margin-left", -235*i + "px");
	}
	$(".main_foot").find("li").hover(function(){
		$(this).find("div").stop().animate({"margin-top":"-300px"});
	},function(){
		$(this).find("div").stop().animate({"margin-top":"-220px"});
	})

	/*************doay右侧菜单************/
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

});

function sc_car(){
	var sc_str = $.cookie('goods');
	if(sc_str){ //如果购物车不为空
		var sc_obj = eval(sc_str); //和JS中的JSON.parse()
		var sc_num = 0; //记录所有商品的数量
		for(var i in sc_obj){
			sc_num += Number(sc_obj[i].num);
		}
		$("#a_02").find("span").html(sc_num);
	}
}