
//顶部鼠标滑过效果
topMost()
function topMost(){
	$(".menu_show").mouseover(function(){//鼠标滑过li二级菜单出现
		$(this).find("a").addClass("ms_hide");
		$(this).find(".show_div").css("display","block");
	}).mouseout(function(){//鼠标滑离li二级菜单消失
		$(this).find("a").removeClass("ms_hide");
		$(this).find(".show_div").css("display","none");
	})
	$(".phone_mall").mouseover(function(){//鼠标滑过解决小手机图片定位移动问题
		$(this).find("a").css("background-position","-1px 0")
	}).mouseout(function(){
		$(this).find("a").css("background-position","0 0")
	})
	//console.log($(".phone_mall"))
}


/*右侧栏目隐藏div*/
rtUlDiv()
function rtUlDiv(){
	$(".rt_ul").find("li").hover(function(){//鼠标滑过小图标div向左改变left值且显示
		$(this).find(".rt_ul_div").animate({
			opacity:1,
			left:-68
		},100)
	},function(){
		$(this).find(".rt_ul_div").animate({//鼠标滑离小图标 div left=0且消失
			opacity:0,
			left:0
		},10)
	})
	$(".rt_bottom").click(function(){
		$("html,body").animate({scrollTop:0})
	})
}

//选择城市改变当前城市ajax
cityBox()
function cityBox(){
	$(".city_box").hover(function(){
		$(this).find(".city_list").css("display","block")
	},function(){
		$(this).find(".city_list").css("display","none")
	})
	//拿数据
	$.ajax({
		type:"get",
		url:"js/city_box.json",
		cache:true,
		async:true,
		success:function(res){
			for(var key in res){
				//添加li和内容
				$(".city_list").append("<li><a href='#'>"+res[key].city+"</a></li>");
			}
			var list=$(".city_box").find(".city_list a");
			list.eq(0).addClass("active");
			//点击事件
			list.click(function(){
				$(".city_box").find("span").html($(this).html());
				$(this).addClass("active").parent().siblings().find("a").removeClass("active");
			})
			list.hover(function(){
				$(this).addClass("act").parent().siblings().find("a").removeClass("act");
			})
		}
	})
}

//头部小菜单
headerMenu()
function headerMenu(){
	//var list=$(".header_menu").find("i");
	$.ajax({
		type:"get",
		url:"js/header_menu.json",
		async:true,
		cache:true,
		success:function(res){
			var list=$(".header_menu").find("i");
			//console.log(res.bgposition01.list)
			for(var key in res.bgposition01.list){
				list.eq(key).css("background-position",res.bgposition01.list[key].position);
				$(".header_menu").find("li").hover(function(){
					$(this).find("a").css("color","#f33");
					$(this).find("i").css("background-position",res.bgposition02.list[$(this).index()].position)
				},function(){
					$(this).find("a").css("color","#333");
					$(this).find("i").css("background-position",res.bgposition01.list[$(this).index()].position)
				})
			}
		}
	});
}


//隐藏导航
navShow()
function navShow(){
	$.ajax({
		type:"get",
		url:"js/data.json",
		async:true,
		cache:true,
		success:function(res){
			var list=res.nav;
			//console.log(list.navhide)
			for(var i=0;i<list.navhide.length;i++){
				var index=list.navhide[i];
				var str=`<div class="nav_hover_1"></div>
						<div class="nav_hover_2">
							<a href="#"></a>
						</div>`;
				$("<div>").appendTo(".nav_left").addClass("nav_hover").html(str)
				var sty="";
				for(var key in list.navhide[i].as){
					sty+=`<a href="#">${list.navhide[i].as[key]}</a>`;
				}
				$(".nav_hover").eq(i).find(".nav_hover_1").html(sty);
				//console.log($(".nav_hover").eq(i).find(".nav_hover_2 a"))
				$("<img>").appendTo($(".nav_hover").eq(i).find(".nav_hover_2 a")).attr("src",list.navhide[i].src);
			}
			$(".nav_show li").hover(function(){
				var index=$(this).index();
				$(this).css({margin:0,background:"#fff"});
				$(this).find("em").css("display","none");
				$(this).find("span").css("margin-left","52px");
				$(this).find("a").css("color","#333");
				$(this).find("i").css({
					left:list.navLeftH[index].left,
					"background-position":list.navLeftH[index].bgp
				});
				//二级菜单
				$(".nav_hover").eq(index).css({display:"block",zIndex:19});
			},function(){
				var index=$(this).index();
				$(this).css({margin:"0 10px",background:"#454545"});
				$(this).find("em").css("display","block");
				$(this).find("span").css("margin-left","42px");
				$(this).find("a").css("color","#fff");
				$(this).find("i").css({
					left:list.navShow[index].left,
					"background-position":list.navShow[index].bgp
				});
				$(".nav_hover").eq(index).css({display:"none",zIndex:19});
			})
			$(".nav_show li a").hover(function(){
				$(this).css({color:"#f33","borser-bottom":"1px solid #f33"})
			},function(){
				$(this).css({color:"#333","borser-bottom":"none"})
			})
			$(".nav_hover").mouseover(function(){
				$(this).css("display","block").siblings(".nav_hover").css("display","none")
			}).mouseout(function(){
					$(this).css("display","none")
			})
		}
	});
}



