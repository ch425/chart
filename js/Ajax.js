
var json = {
	"key":"APIKEY",
	"info":"今天天气怎么样",
	"userid":"123456"
}
function sendAjax() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.tuling123.com/openapi/api?key=543d8e0397a849c28ca28028109e6138", true);
    xhr.send(json);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            console.log(data)
            var _data = JSON.parse(data);
            console.log(_data);
            
        }
    }
}
sendAjax();
var chart = (function(){
	return {
		init(){
			this.event
		}
	}
}())
