


//放大镜效果

//点击
imgMin()
function imgMin(){
	$.ajax({
		type:"get",
		url:"js/data.json",
		async:true,
		cache:true,
		success:function(res){
			var imgs=res.detailpage.shopimg;
			for(var i=0;i<imgs.length;i++){
				$("<img>").appendTo($(".shop_imgbox_min").find("li").eq(i)).attr("src","images/"+imgs[i].srcmin)
			}
			$(".shop_imgbox_min li").click(function(){
				$(this).addClass("act").siblings().removeClass("act");
				var str='';
				var sty='';
				var index=$(this).index();
				var str='<img src="images/'+imgs[index].src+'"/>';
				var sty='<img src="images/'+imgs[index].srcmax+'"/>';
				$(".shop_imgbox a").html(str);
				$(".shop_imgbox_max").html(sty);
				imgMax()
			})
			////放大镜效果
			imgMax()
			return false
		}
	});
}
function imgMax(){
	//原生放大镜
	var box=document.getElementById("box");
	var mask=box.getElementsByClassName("shop_imgbox_show")[0];
	var boximg=box.getElementsByClassName("shop_imgbox")[0];
	var boxmax=box.getElementsByClassName("shop_imgbox_max")[0];
	var imgmax=boxmax.getElementsByTagName("img")[0];
	
	boximg.onmouseover=function(){
		mask.style.display="block";
		boxmax.style.display="block";
	}
	boximg.onmouseout=function(){
		mask.style.display="none";
		boxmax.style.display="none";
	}
	
	boximg.onmousemove=function(e){
		var e=e||event;
		var x=e.pageX-box.offsetLeft-mask.offsetWidth/2;
		var y=e.pageY-box.offsetTop-mask.offsetHeight/2;
		var minX=box.offsetWidth-mask.offsetWidth;
		var minY=box.offsetHeight-mask.offsetHeight;
		x=x<0?0:x>minX?minX:x;
		y=y<0?0:y>minY?minY:y;
		mask.style.left=x+"px";
		mask.style.top=y+"px";
		var maxX=(imgmax.offsetWidth-boxmax.offsetWidth)/minX*(-x);
		var maxY=(imgmax.offsetHeight-boxmax.offsetHeight)/minY*(-y);
		imgmax.style.left=maxX+"px";
		imgmax.style.top=maxY+"px";
	}
}


//团购倒计时
countDown()
function countDown(){
	var time=new Date();
	var definitionTime=new Date("2019/1/4 00:00:00");
	var nowTime=(definitionTime.getTime()-time.getTime())/1000;
	function showTime(){
		var days=parseInt(nowTime/60/60/24);
		var hours=parseInt(nowTime/60/60%24);
		var minutes=parseInt(nowTime/60%60);
		var seconds=parseInt(nowTime%60);

		$("#days_time").html(zeroFn(days));
		$("#hours_time").html(zeroFn(hours));
		$("#minute_time").html(zeroFn(minutes));
		$("#second_time").html(zeroFn(seconds));
	}
	var timer=setInterval(function(){
		nowTime--;
		if(nowTime<=0){
			clearInterval(timer)
			$(".shop_grop1").html("活动结束，敬请期待")
		}else{
			showTime()
		}
	},1000)
}

//补零
function zeroFn(res){
	newday=res<10?"0"+res:res;
	return newday
}


/*团购商品*/
shopTuanBox()
function shopTuanBox(){
	var flag=true;
	$(".shop_tuan_box button").click(function(){
		$(this).css("cursor","pointer")
		if(flag){
			$(this).find("em").html("收起");
			$(this).find("i").css("background-position","0 -13px");
			$(".shop_tuan_box li").eq(1).css("display","block");
			flag=false;
		}else{
			$(this).find("em").html("展开");
			$(this).find("i").css("background-position","0 0");
			$(".shop_tuan_box li").eq(1).css("display","none");
			flag=true;
		}
		
	})

}
