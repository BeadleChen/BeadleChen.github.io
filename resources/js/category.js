document.onreadystatechange = function () {   
	if(document.readyState=="complete") {          
		var category = getValueBySuffix('category');
		if(checkValueIsEmpty(category)){
			//默认 生活随笔
			category = 'life';
		}
		//获取category的json数据

		ajax("../resources/json/category.json","GET",function(data){
			data = eval('('+data+')');
			var container = eval('data.'+category);
			//fill to content title
			document.getElementById('content_title').textContent=container.title;
			var content = container.content;

			var categoryContent = document.getElementById('category_content');
			//whether it is message 
			if( category == 'message'){
				var uyanFrame = document.createElement("div");
				var scriptEle = document.createElement("script");
				scriptEle.type = "text/javascript";
				scriptEle.src = "http://v2.uyan.cc/code/uyan.js?uid=2050685";
				uyanFrame.id = "uyan_frame";

				categoryContent.appendChild(scriptEle);
				categoryContent.appendChild(uyanFrame);
			}else{
				var contentUL = document.createElement("ul");
				contentUL.id = 'content_ul';
				categoryContent.appendChild(contentUL);
				for(var i=0;i<content.length;i++){
					var title = content[i].title;
					var article = content[i].article;
					var url = 'blog.html#category='+category+'#article='+article;
					var liNode = document.createElement("li");
					var aNode = document.createElement("a");
					aNode.href = url;
					aNode.textContent = title;
					liNode.appendChild(aNode);
					document.getElementById('content_ul').appendChild(liNode);
				}
			}
			
			//fill the index
			document.getElementById('current_category').textContent=category;
		});

	}   
}  
