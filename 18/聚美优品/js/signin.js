$(function(){

	/******************手机号输入框***********************/

	$(".input_1").focus(function(){
		$(this).css("box-shadow","0 0 5px 2px #a5d4ed").css("border","1px solid #a5d4ed");
		$(".p_01").css("visibility","visible");
	});
	$(".input_1").blur(function(){
		$(this).css("box-shadow","").css("border","1px solid #ccc");
		$(".p_01").css("visibility","hidden");
	});

	/***************动态密码框***************/
	$(".input_2").focus(function(){
		$(this).css("box-shadow","0 0 5px 2px #a5d4ed").css("border","1px solid #a5d4ed");
		$(".p_02").css("visibility","visible");
	});
	$(".input_2").blur(function(){
		$(this).css("box-shadow","").css("border","1px solid #ccc");
		$(".p_02").css("visibility","hidden");
	});
	/*****************获取动态验证码**********************/
	var num = "";
	$("button").click(function(){
		for(var i = 0 ; i < 6; i++){
			num += parseInt(Math.random()*10);
		}
		$("button").html(num);
		num = "";
	})

	/**************登录按钮点击*******************/
	$(".aigin").click(function(){
		var str1 = $(".input_1").val();
		var str2 = $(".input_2").val();
		var istrue = true;
		if($(".input_2").val() != $("button").html()){
			$(".input_2").css("box-shadow","0 0 5px 2px #f00").css("border","1px solid #f00");
			$(".p_02").css("visibility","visible").html("您输入的动态密码格式有误，需为 6 位数字格式");
			istrue = false;
		}
		if(/^\s*$/.test(str1) || str1 ==null){
			$(".input_1").css("box-shadow","0 0 5px 2px #f00").css("border","1px solid #f00");
			$(".p_01").css("visibility","visible").html("您输入的手机号码格式有误，需为 11 位数字格式");
		}else if(str1.length != 11){
			$(".input_1").css("box-shadow","0 0 5px 2px #f00").css("border","1px solid #f00");
			$(".p_01").css("visibility","visible").html("您输入的手机号码格式有误，需为 11 位数字格式");
		}else if(/^[0-9]*$/.test(str1) && istrue){

			var str = $.cookie("account",{path:"/"});
			var arr = eval(str); //eval(str); eval JQ的字符串转对象
			//遍历所有的对象,如果id相同,让该商品的数量递增。
			for(var i in arr){
				if(arr[i].id == str1){
					$(".aigin").attr("href","http://10.30.162.24/聚美优品/index.html");
				}else{
					$(".input_1").css("box-shadow","0 0 5px 2px #f00").css("border","1px solid #f00");
					$(".p_01").css("visibility","visible").html("该用户不存在");
					$(".aigin").attr("href","#");
				}
			}
			
		}
	})

/**********footertup列表********************/
	for(var i = 0 ; i <5; i++){
		$(".footer .wrap div").eq(i).css("background-position","0 "+ (-168-50*i) + "px");
	}
})