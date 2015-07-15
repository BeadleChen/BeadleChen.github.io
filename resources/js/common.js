//获取url 以#为后缀的后缀参数值
//例如www.baidu.com#abc=123 getValueBySuffix('abc')=123
function getValueBySuffix(key){
	var suffix = location.hash.substring(1) || null;
	if(suffix != null && suffix.indexOf(key) != -1){
		var startIdx = suffix.indexOf(key)+key.length+1;
		//截取后面的字符串
		var subString = suffix.substring(startIdx);
		return subString.substring(0,subString.indexOf("#")!=-1?subString.indexOf("#"):subString.length);
	}
	return null;
}
//校验value是否为空
function checkValueIsEmpty(value){
	if(typeof(value) == "undefined" || value == null || value == '' ){
		return true;
	}
	return false;
}