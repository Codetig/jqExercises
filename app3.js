$(document).ready(function(){
	$("form").on("submit", function(e){
		
		if($("#pword").val().length === 0){
			//e.prevebtDefault(); 
			//message you must enter a password
			$("nopass").toggleClass("hide");
		}else if($("#pword").val().length < 6){
			//e.prevebtDefault();
			//show hidden: password must be at least 6 chr long
			$("mochar").toggleClass("hide");
		} else {
			//Show thank you for signing in message. worried this messaage will not be seen, without the prevent default
			$("div").fadeOut(500);
			$("div").html("<h2>Thank you for signing up.</h2><p>Have a nice day</p>").fadeIn(1000);
		}
	});

	$("form").on("keyup", function(e){
		if($("#pword").val().length < 6){
			$("#mochar").removeClass("hide");
		}
		if ($("#pword").val().length > 5){
			$("#mochar").attr("class", "hide");
		}
	});
});