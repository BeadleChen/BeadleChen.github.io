$(document).ready(function(){
	//get data form index.json , fill blog content
	$.ajax({
		url:"resources/json/index.json",
		type:"GET",
		dataType : 'text',
		success:function(data){
			var str = data.replace(/\r\n/g, "");
			var da = eval('('+str+')');
			//只取前6个
//			for(var i=0;i < da.length && i < 6;i++){
//				var indexBlogHTML = "<a href='"+da[i].url+"' class='list-group-item'>"+
//						"<h4 class='list-group-item-heading'>"+
//							"<div class='head_title'>"+da[i].title+"</div>"+
//							"<div class='head_date'>日期:"+da[i].date+"</div>"+
//						"</h4>"+
//						"<p class='list-group-item-text'>"+da[i].description+"</p>";
//							"</a>";
//				$('.body_content .list-group').append(indexBlogHTML);
//			}
			$('.body_content .list-group').append("123123");
		}
	});
	//get data from category.json fill the index category
	$.ajax({
		url:"resources/json/category.json",
		type:"GET",
		dataType : 'text',
		success:function(data){
			var str = data.replace(/\r\n/g, "");
			var da = eval('('+str+')');
			for (var key in da)
		    {
		        var $category = $('.body_content .right_panel .panel-success .panel-body ul');
		        var categoryLiHTML = "<li><a href=content/category.html#category="+key+">"+da[key].title+"</a></li>"
		        $category.append(categoryLiHTML);
		    }
			//category li decorate
			var categorySignHtml = "<span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span>";
			$('.right_panel .panel-success .panel-body ul li').prepend(categorySignHtml);
		}
	});
});