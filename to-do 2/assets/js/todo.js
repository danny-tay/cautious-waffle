$("ul").on("click", "li", function(){
	$(this).toggleClass("gray_strike");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which ===13){
		var newItem = $(this).val();;
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newItem +"</li>");
		$(this).val("");
	}
});

$("span .fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle();
});