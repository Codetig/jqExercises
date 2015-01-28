$(document).ready(function(){
	$("form").on("submit", function(e){
		e.preventDefault();
		if($("ul").children().length > 0){
			$("ul li").last().after("<li><input type=\"checkbox\"> <p>" + $("#todo").val() +"</p> <button class=\"btn btn-xs\">x</button></li>");
			$("#todo").val("");

		} else{
		$("ul").html("<li><input type=\"checkbox\"> <p>" + $("#todo").val() + "</p> <button class=\"btn btn-xs\">x</button></li>");
		$("#todo").val("");
		}
	});
	
	$("body").on("click", "input[type=checkbox]", function(e){
		$(this).parent("li").children("p").toggleClass("complete");
	});
	
	$("body").on("click","button", function(e){
				$(this).parent("li").remove();
			});
});