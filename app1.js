$(document).ready(function(){
	$("form").on("submit", function(e){
		e.preventDefault();
		// if($("colorchoice").val().length > 0){
		$("tbody tr:even").css("background", $("#colorchoice").val());
	// }
	});
});