
function topMost(){
	$(".menu_show").mouseover(function(){
		$(this).find("a").addClass("ms_hide");
		$(this).find(".show_div").css("display","block");
	}).mouseout(function(){
		$(this).find("a").removeClass("ms_hide");
		$(this).find(".show_div").css("display","none");
	})
	$(".phone_mall").mouseover(function(){
		$(this).find("a").css("background-position","-1px 0")
	}).mouseout(function(){
		$(this).find("a").css("background-position","0 0")
	})
	console.log($(".phone_mall"))
}
topMost()