$(document).ready(function(){
	//get data from category.json fill the index category
	$.ajax({
		url:"resources/json/category.json",
		type:"GET",
		dataType : 'json',
		success:function(data){
			for (var key in data){
		        var $category = $('.body_content .right_panel .panel-success .panel-body ul');
		        var categoryLiHTML = "<li>" +
		        		"<a href=content/category.html#category="+key+">"+data[key].title+"</a>"+
		        		"</li>";
		        $category.append(categoryLiHTML);
		    }
		}
	});
});