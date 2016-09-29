		function ajax(method, url, data, success_method){
			var xhr = null;
			try{
				xhr = new XMLHttpRequest();
			}catch(error){
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			if(method == "get" && data){
				url += "?" + data;
			}
			xhr.open(method, url, true);
			if(method == "get"){
				xhr.send();
			}else{
				xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
				xhr.send(data);
			}

			//接收数据
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						//alert(xhr.responseText);
						//【注】数据回传  函数指针
						success_method && success_method(xhr.responseText);
					}else{
						alert("网络链接错误，错误:" + xhr.status);
					}
				}
			}
		}

