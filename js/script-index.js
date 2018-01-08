$(document).ready( function(){

	//funcion para esconder flecha
	ocultarFlecha(); 
	//Funcion para escribir NUEVA RECETA 
	printNews();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	renderActivities(activities); 

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for ( i in recipesArray)
		if (recipesArray[i].highlighted) {
			renderRecipe(recipesArray[i])
		}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$(".list-recipes").append( 
		'<a class="item-recipe" href="#">'+
		  '<span class="attribution">'+
		    '<span class="title-recipe">' + recipe.title + '</span>'+
		    '<span class="metadata-recipe">'+
		      '<span class="author-recipe">'+ recipe.source.name +'</span>'+
		      '<span class="bookmarks-recipe">'+
		        '<span class="icon-bookmark"></span>'+
		      '</span>'+
		    '</span>'+
		  '</span>'+

		  '<img src="img/recipes/320x350/'+ recipe.name + '.jpg">'+
		'</a>'); 
}	



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {
	console.log('Activities: ', activities);
	if(activities.length > 0){
		$(".wrapper-message").hide(); 
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

/*Funcion para ocultar flecha*/
function ocultarFlecha(){
	$("#js-back-index").hide(); 
} 

function printNews(){
	$(".callout-news p").html("NUEVAS RECETAS"); 
}


