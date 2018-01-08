$(document).ready(function(){
	console.log("documento recipe.html listo para funcionar")
	ocultarMenu(); 

	$(".js-show-recipe").click(function(){
		console.log("click recipe")
		$("#page").removeClass("make");
		$(this).addClass("active")
		$(".js-show-make").removeClass("active")
	}); 


	$(".js-show-make").click(function(){
		console.log("click make")
		$("#page").addClass("make"); 
		$(this).addClass("active")
		$(".js-show-recipe").removeClass("active")

	}); 

}); //document.ready 

//Funciones 

//Funcion para ocultar Menu 
function ocultarMenu(){
		$("#js-menu-recipe").hide();
}; 	
