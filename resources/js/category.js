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
		ajax("../resources/json/message.json","GET",function(data){
			data = eval('('+data+')');
			for(var i=0;i<data.length;i++){
				var messageFrame = document.createElement("div");
				var messageName = document.createElement("div");
				var messageContent = document.createElement("div");
				messageContent.id = 'message_content';
				messageName.id = 'message_name';
				messageFrame.id = 'message_frame';
				messageName.textContent = data[i].name+'说:';
				messageContent.textContent = data[i].content;
				messageFrame.appendChild(messageName);
				messageFrame.appendChild(messageContent);
				categoryContent.appendChild(messageFrame);
			}
			
		});
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
