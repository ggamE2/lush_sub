$(function(){
    
	$(".ic_menu").on("click",function(){
		$(".left_menu").animate({marginLeft:"300px"},500);
		$(".black_back").css("display","block");
	});	
	
	$(".close, .black_back").on("click",function(){
		$(".left_menu").animate({marginLeft:"0px"},500);
		$(".black_back").css("display","none");
	});	    
       
}); //function end

