$(document).ready(function(){
	var category = getValueBySuffix('category');
	if(checkValueIsEmpty(category)){
		//默认 生活随笔
		category = 'life';
	}
	//获取category的json数据
	$.ajax({
		url:"../resources/json/category.json",
		type:"GET",
		dataType : 'json',
		success:function(data){
			var container = eval('data.'+category);
			$('.body_content .panel-title').text(container.title);
			var content = container.content;
			var url = container.url;
			for(var i=0;i<content.length;i++){
				var title = content[i].title;
				var value = content[i].value;
				var contentHTML = "<li><a href='"+url+"#content="+value+"'>"+title+"</a></li>";
				$('.body_content .panel-body ul').append(contentHTML);
			}
		}
	});
});