$(document).ready(function(){
	//get data form index.json , fill blog content
	$.ajax({
		url:"resources/json/index.json",
		type:"GET",
		dataType : 'json',
		success:function(data){
			//只取前6个
			for(var i=0;i < data.length && i < 6;i++){
				var indexBlogHTML = "<a href='"+data[i].url+"' class='list-group-item'>"+
										"<h4 class='list-group-item-heading'>"+
											"<div class='head_title'>"+data[i].title+"</div>"+
											"<div class='head_date'>日期:"+data[i].date+"</div>"+
										"</h4>"+
										"<p class='list-group-item-text'>"+data[i].description+"</p>"+
									"</a>";
				$('.body_content .list-group').append(indexBlogHTML);
			}
		}
	});
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