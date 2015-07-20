$(document).ready(function(){
	var article = getValueBySuffix('article');
	if(checkValueIsEmpty(article)){
		//默认 life
		article = 'life';
	}
	var category = getValueBySuffix('category');
	if(checkValueIsEmpty(category)){
		//默认 默认life
		category = 'life';
	}
	//fill the index 
	$('.blog_index .current_category').html(category);
	$('.blog_index .current_category').attr('href','category.html#category='+category);
	$('.blog_index .current_article').html(article);
	//to fill the article title
	//get catogory data by content and lastSuffix 
	$.ajax({
		url:"../resources/json/category.json",
		type:"GET",
		dataType : 'json',
		success:function(data){
			var container = eval('data.'+ category);
			$.each(container.content,function (i,v){
				if(this.article == article ){
					$('.body_content .head_title').html(this.title);
					$('.body_content .head_date').html("日期:"+this.date);
					var index = i + 1;
					if(index != container.content.length ) {
						container.content[i+1]
					}
				}
			});
		}
	});
	//to fill to article content
	//get from the txt 
	$.ajax({
		url:"../resources/txt/"+category+"/"+article+".txt",
		type:"GET",
		dataType : 'text',
		success:function(data){
			$('.body_content .blog_content').html(data);
		}
	});
});