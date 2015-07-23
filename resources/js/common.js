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

function createXMLRequest() {
	var request = null;
	try {
		request = new ActivexObject("Msxml2.XMLHTTP");
	}
	catch (e1) {
		try {
			request = new ActivexObject("Microsoft.XMLHTTP");
		}
		catch (e2) {
			request = false;
		}
	}
	if (!request && typeof XMLHttpRequest != 'undefined') {
		request = new XMLHttpRequest();
	}
	return request;
}

function ajax(url,method,fnSucc,data){
	var request = createXMLRequest();
	//�������ַ�����ת��
	//ͨ��get��ʽ����request����
	//true�ò����涨�����Ƿ��첽����
	//True ��ʾ�ű����� send() ����֮�����ִ�У������ȴ����Է���������Ӧ��
	request.open(method, url, true);
	if(method.toLowerCase() == 'post'){
		alert("123");
		request.setRequestHeader("Content-Type"
				, "application/x-www-form-urlencoded");
	}
	request.send(data);
	request.onreadystatechange = function(){  //OnReadyStateChange�¼�
        if(request.readyState == 4){  //4Ϊ���
            fnSucc(request.responseText); 
        }
    };
}
