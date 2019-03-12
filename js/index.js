



//banner轮播图
lunboFn()
function lunboFn(){
	var index=1;
	var lunboTime=null;
	var lunbo=$(".banner_wrap .lunbo");
	var imgWidth=lunbo.find("img").width();//一张图片的宽
	var firstLi=lunbo.find("li").first();
	var lastLi=lunbo.find("li").last();
	lunbo.prepend(lastLi.clone()).append(firstLi.clone()).width(lunbo.width()+imgWidth*2).css("left",-imgWidth+"px");
	var imgLength=lunbo.find("li").size();
	//console.log(imgLength)
	function switchImg(){
		lunbo.animate({left:-imgWidth*index+"px"},function(){
			if(lunbo.css("left")==-imgWidth*(imgLength-1)+"px"){
				lunbo.css("left",-imgWidth+"px")
			}
			if(lunbo.css("left")=="0px"){
				lunbo.css("left",-imgWidth*(imgLength-2)+"px")
			}
			//console.log(lunbo.css("left"))
		});
		if(index>imgLength-2){
			index=1;
		}
		if(index<1){
			index=imgLength-2;
		}
	}
	function switchBtn(){
		$(".circulation li").eq(index-1).addClass("active").siblings().removeClass("active");
	}
	function prveFn(){
		index--;
		switchImg();
		switchBtn();
	}
	function nextFn(){
		index++;
		switchImg();
		switchBtn();
	}
	$(".circulation li").click(function(){
		index=$(this).index()+1;
		switchImg();
		switchBtn();
	})
	$(".banner_wrap .prev").click(prveFn);
	$(".banner_wrap .next").click(nextFn);
	$(".banner_wrap").mouseover(function(){
		clearInterval(lunboTime)
	}).mouseout(function(){
		lunboTime=setInterval(nextFn,2000)
	}).mouseout()
	$(".banner_wrap .rotate div").hover(function(){
		$(this).addClass("active").siblings().removeClass("active")
	},function(){
		$(this).removeClass("active");
	})
}



//优惠卷
couponFn()
function couponFn(){
	$.ajax({
		type:"get",
		url:"js/data.json",
		async:true,
		cache:true,
		success:function(res){
			var list=res.coupon.list;
			var str="";
			for(var i=0;i<list.length;i++){
				str+=`<li class="list">
						<i></i>
						<div class="info clearfix">
							<div class="price fl">${list[i].price}</div>
							<div class="name fr">
								<h5>${list[i].name1}</h5>
								<p>${list[i].name2}</p>
							</div>
						</div>
						<div class="getCou">
							<a href="#">立即领取<span>>></span></a>
						</div>
					</li>`;
					//console.log(str)
			}
			$(".coupon ul").append(str);
		}
	});
}


//团购
function unityFn(){
	var us=$(".unity_shop");
	var usLi=us.find("li");
	usLi.hover(function(){
		
		$(this).find(".show").animate({height:52,opacity:1},function(){}).parents(us).find("li show").animate({height:0},function(){})
	},function(){
		$(this).find(".show").animate({height:0,opacity:0},function(){})
	})
}
unityShop()
function unityShop(){
	$.ajax({
		type:"get",
		url:"js/unity_shop.json",
		async:true,
		cache:true,
		success:function(res){
			var title="";
			var str="";
			for(var i=0;i<res.length;i++){
				str+=`<li>
						<div class="us_top">
							<a href="detailpage.html" class="pic"><img src="images/${res[i].src}"/></a>
							<div class="show">
								<p class="p1">电商参考价：<span class="pics">${res[i].pics}</span></p>
								<p class="p2"><a href="#">测评</a><span>|</span><a href="#">视频</a><span>|</span><a href="#">点评</a></p>
							</div>
						</div>
						<div class="us_bottom">
							<p class="name"><a href="#">${res[i].name}</a></p>
							<p class="price"><span>￥</span>${res[i].price}</p>
						</div>
					</li>`;
			}
			$(".unity_shop").html(str);
			unityFn()
		}
	});
}


unityGo()
function unityGo(){
	$.ajax({
		type:"get",
		url:"js/unityGo.json",
		async:true,
		cache:true,
		success:function(res){
			var str="";
			for(var i=0;i<res.length;i++){
				str+=`<li>
						<a href="#" class="imgs"><img src="images/${res[i].src}"/><span>仅限到店</span></a>
						<div class="txt">
							<p class="name"><a href="#">${res[i].name}</a></p>
							<p class="price">${res[i].price}</p>
							<p class="con">${res[i].con}</p>
							<p class="btn">到店团</p>
						</div>
					</li>`;
			}
			$(".unity_go").html(str)
		}
	});
}



//Z智选
selectZcon()
function selectZcon(){
	selectZcon1()
	selectZcon2()
	selectZcon3()
}
//第一栏
function selectZcon1(){
	var sZ_1=$(".sZ_1_tab");
	sZ_1.find(".select li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		sZ_1.find(".hide li").eq($(this).index()).css("display","block").siblings().css("display","none");
	})
}
//第二栏
function selectZcon2(){
	$.ajax({
		type:"get",
		url:"js/data.json",
		async:true,
		cache:true,
		success:function(res){
			var sZ_2=$(".selectZcon_2");
			var list=res.selectZ.list;
			var str="";
			for(var i=0;i<list.length;i++){
				str+=`<li>
						<img src="images/${list[i].src}"/>
						<div class="show">
							<p class="name">${list[i].name}</p>
							<p class="price">${list[i].price}</p>
							<p class="par"><a href="#">查看详情</a></p>
							<p class="apr"><a href="#">评测</a><a href="#">视频</a><a href="#">点评</a></p>
						<p class="ref">电商参考价：¥<span>暂无</span></p>
						</div>
					</li>`;
					//console.log(str)
			}
			sZ_2.find(".list").html(str);
			$(".selectZcon_2").find(".list li").hover(function(){
				$(this).find(".show").animate({top:0},function(){})
			},function(){
				$(".selectZcon_2").find(".list li .show").animate({top:148},function(){})
			})
		}
	});
}
//第三栏
function selectZcon3(){}
