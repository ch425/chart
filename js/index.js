var chatMsg = (function(){
	var $inp = document.getElementById('inp');
	var $post = document.querySelector('.post');
	var $main =document.querySelector('.main');
	return {
		init: function(){
			this.event();
		},
		event: function(){
			var _this = this;
			$post.onclick = function (e){
				e = e || window.event;
				var val = $inp.value.trim();
				var json = {
					"key":"APIKEY",
					"info":val,
					"userid":"123456"
				}
//				console.log(val);
				if(val !== ''){
					var $content = document.createElement('div');
					$content.className = 'right';
					var $txt = document.createElement('span');
					$txt.className = 'txt';
					var $imgBox = document.createElement('span');
					$imgBox.className = 'Img';
					var $img =  document.createElement('img');
					$img.src = 'img/2.jpg';
					var $text = document.createTextNode($inp.value);
					$imgBox.appendChild($img);
					$txt.appendChild($text);
					$content.appendChild($txt);
					$content.appendChild($imgBox);
					$main.appendChild($content);
					
					$main.scrollTop = $main.scrollHeight - $main.clientHeight;
					$inp.value = '';
					$post.style.backgroundColor = 'orange';
				}
				_this.sendAjax(json,val);
//				_this.request(e);
			}
			
			$inp.onkeydown = function(e){
				e = e || window.event;
				if(e.keyCode == 13){
					e = e || window.event;
					var val = $inp.value.trim();
					var json = {
						"key":"APIKEY",
						"info":val,
						"userid":"123456"
					}
					if(val !== ''){
						var $content = document.createElement('div');
						$content.className = 'right';
						var $txt = document.createElement('span');
						$txt.className = 'txt';
						var $imgBox = document.createElement('span');
						$imgBox.className = 'Img';
						var $img =  document.createElement('img');
						$img.src = 'img/2.jpg';
						var $text = document.createTextNode($inp.value);
						$imgBox.appendChild($img);
						$txt.appendChild($text);
						$content.appendChild($txt);
						$content.appendChild($imgBox);
						$main.appendChild($content);
						
						$main.scrollTop = $main.scrollHeight - $main.clientHeight;
						$inp.value = '';
						$post.style.backgroundColor = 'orange';
					}
					_this.sendAjax(json,val);
				}
			}
		},
		sendAjax(json,val) {
			var _this = this;
		    var xhr = new XMLHttpRequest();
		    xhr.open("POST", "http://www.tuling123.com/openapi/api?key=543d8e0397a849c28ca28028109e6138&info=" + val + "&userid=123456", true);
		    xhr.send(json);
		    xhr.onreadystatechange = function () {
		        if (xhr.readyState == 4 && xhr.status == 200) {
		            var data = xhr.responseText;
		            var _data = JSON.parse(data);
//		            console.log(_data.text);
		            _this.request(_data);
		        }
		    }
		},
		request(_data){
			var $content = document.createElement('div');
			$content.className = 'left';
			var $img =  document.createElement('img');
			$img.src = 'img/1.jpg';
			var $imgBox = document.createElement('span');
			$imgBox.className = 'Img';
			var $txt = document.createElement('span');
			$txt.className = 'txt';
			var $text = document.createTextNode(_data.text);
			$imgBox.appendChild($img);
			$txt.appendChild($text);
			$content.appendChild($imgBox);
			$content.appendChild($txt);
			$main.appendChild($content);
			$main.scrollTop = $main.scrollHeight - $main.clientHeight;
		}
	}
}())
chatMsg.init();
