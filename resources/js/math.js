$(document).ready(function(){
	var content = getValueBySuffix('content');
	if(checkValueIsEmpty(content)){
		//默认 集合
		content = 'set';
	}
	//get catogory data by content and lastSuffix to fill the article title
	$.ajax({
		url:"../resources/json/category.json",
		type:"GET",
		dataType : 'json',
		success:function(data){
			var container = eval('data.'+getLastSuffix());
			$.each(container.content,function (){
				if(this.value == content ){
					$('.body_content .head_title').append(this.title);
				}
			});
		}
	});
	
	//获取category的json数据
	$.ajax({
		url:"../resources/txt/math/"+content+".txt",
		type:"GET",
		dataType : 'text',
		success:function(data){
			$('.body_content .panel-body').html(data);
		}
	});
});