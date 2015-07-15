$(document).ready(function(){
	var category = getValueBySuffix('category');
	if(checkValueIsEmpty(category)){
		//默认 生活随笔
		category = 'life';
	}
	$.ajax({
		url:"../resources/json/category.js",
		type:"GET",
		dataType : 'json',
		success:function(data){
			var container = eval('data.'+category);
			$('.body_content .panel-title').text(container.title);
			var content = container.content;
			for(var i=0;i<content.length;i++){
				var title = content[i].title;
				var url = content[i].url;
				var contentHTML = "<li><a href='"+url+"'>"+title+"</a></li>";
				$('.body_content .panel-body ul').append(contentHTML);
			}
		}
	});
});