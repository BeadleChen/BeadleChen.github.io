$(document).ready(function(){
	var category = getValueBySuffix('category');
	if(checkValueIsEmpty(category)){
		//Ä¬ÈÏ Éú»îËæ±Ê
		category = 'life';
	}
	$.getJSON("../resources/json/category.json", function(data){
		alert("JSON Data:");
	});
});