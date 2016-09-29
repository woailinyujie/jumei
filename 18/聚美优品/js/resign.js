$(function(){

	/******************手机号输入框***********************/
   yanz($("input"));
   $("input").val(null)
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
			if($(".input_3").val() != $(".input_4").val()){
				$(".input_3").css("box-shadow","0 0 5px 2px #f00").css("border","1px solid #f00");
				$(".input_4").css("box-shadow","0 0 5px 2px #f00").css("border","1px solid #f00");
				$(".p_03").css("visibility","visible").html("您输入的密码有误");
				$(".p_04").css("visibility","visible").html("您输入的密码有误");
			}else{
				var first = $.cookie("account") == null ? true : false;
				var same = false; //判断是否有相同的商品
				if(first){
					//第一次添加的时候,建立json结构
					$.cookie('account', '[{"id":"' + str1 +'"}]',{path:"/"});
					$(".aigin").attr("href","signin.html");
				}else{
					var str = $.cookie("account",{path:"/"});
					//alert(str);
					var arr = eval(str); //eval(str); eval JQ的字符串转对象
					//遍历所有的对象,如果id相同,让该商品的数量递增。
					for(var i in arr){
						if(arr[i].id == str1){
							$("input").css("box-shadow","0 0 5px 2px #f00").css("border","1px solid #f00");
							$(".p_01").css("visibility","visible").html("您输入的手机号已存在");
							$(".aigin").attr("href","#");
							same = true;
						}
					}
					//如果id不同,添加该商品
					if(!same){
						var obj = {id:str1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("account", cookieStr,{path:"/"});
						$(".aigin").attr("href","signin.html");
					}
				}
			}
			
		}
	})

/**********footertup列表********************/
	for(var i = 0 ; i <5; i++){
		$(".footer .wrap div").eq(i).css("background-position","0 "+ (-168-50*i) + "px");
	}
})

function yanz(obj){
	obj.focus(function(){
		$(this).css("box-shadow","0 0 5px 2px #a5d4ed").css("border","1px solid #a5d4ed");
		$(this).next().css("visibility","visible");
	});
	obj.blur(function(){
		$(this).css("box-shadow","").css("border","1px solid #ccc");
		$(this).next().css("visibility","hidden");
	});
}