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
		dataType : 'text',
		success:function(data){
			var str = data.replace(/\r\n/g, "");
			var da = eval('('+str+')');
			var container = eval('da.'+category);
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