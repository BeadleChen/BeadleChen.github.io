function getValueBySuffix(key){
	var suffix = location.hash.substring(1) || null;
	if(suffix != null && suffix.indexOf(key) != -1){
		var startIdx = suffix.indexOf(key)+key.length+1;
		var subString = suffix.substring(startIdx);
		return subString.substring(0,subString.indexOf("#")!=-1?subString.indexOf("#"):subString.length);
	}
	return null;
}
//get the last url between the last of '/' and '.html'
function getLastSuffix(){
	var url = location.href;
	var slashIndex = url.lastIndexOf('/')+1;
	var htmlIndex = url.lastIndexOf('.html');
	return url.substring(slashIndex,htmlIndex);
}
function checkValueIsEmpty(value){
	if(typeof(value) == "undefined" || value == null || value == '' ){
		return true;
	}
	return false;
}