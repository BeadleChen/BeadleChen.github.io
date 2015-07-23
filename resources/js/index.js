//get data from category.json fill the index category

ajax("resources/json/category.json","GET",function(data){
	data = eval('('+data+')');
	for (var key in data){
			var liNode = document.createElement("li");
			var aNode = document.createElement("a");
			aNode.href = "content/category.html#category="+key;
			aNode.textContent = data[key].title;
			liNode.appendChild(aNode)
			document.getElementById("category_id").appendChild(liNode);		 
	}
});