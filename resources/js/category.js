$(document).ready(function(){
	var category = getValueBySuffix('category');
	if(checkValueIsEmpty(category)){
		//Ĭ�� �������
		category = 'life';
	}
	$.getJSON("../resources/json/category.json", function(data){
		alert("JSON Data:");
	});
});