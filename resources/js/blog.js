document.onreadystatechange = function () {   
	if(document.readyState=="complete") {          
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

		//to fill the article title
		//get catogory data by content and lastSuffix 
		ajax("../resources/json/category.json","GET",function(data){
			data = eval('('+data+')');
			var container = eval('data.'+ category);
			for(var i=0;i<container.content.length;i++){
				if(container.content[i].article == article){
					document.getElementById('head_title').textContent=container.content[i].title;
					document.getElementById('head_date').textContent="日期:"+container.content[i].date;
					
				}
			}
		});

		//fill the index 
		var categoryDOM = document.getElementById('current_category');
		categoryDOM.textContent=category;
		categoryDOM.href='category.html#category='+category;
		document.getElementById('current_article').textContent=article;
		//fill the article content
		ajax("../resources/txt/"+category+"/"+article+".txt","GET",function(data){
			document.getElementById("blog_content").innerHTML=data;
			
		});
	}   
}  
