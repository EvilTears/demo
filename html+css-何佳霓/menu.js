$(function(){
	$(".img-2 > img").hover(function() {
		var img = $(this).attr('src');
		$(".img-1").attr("src",img) ;
	})
})
