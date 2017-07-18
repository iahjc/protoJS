/*
*定义360模块
*/

define(function(obj){
	var xz = {
		x:0,
		init:function(){

			this.createImg();

			document.onmousedown = function(event){
				var event = event || window.event;

				var disX = event.clientX - x;

				document.onmousemove = function(event){
					var event = event || window.event;
					x = event.clientX - disX;

					return false;
				}

				document.onmouseup = function(){
					document.onmousemove = null;
					document.onmouseup = null;
				}

				return false;
			}
		},
		createImg:function(){
			for(var i = 1; i< 77; i++){

				(function(newImg){
					var img = new Image();
					img.onload = function(){
						newImg.src = this.src;
					}	
					img.src = '../images/360/miaov ('+i+').jpg';

				console.log(img.src);

				document.querySelector(".cont").appendChild(newImg);
				})(document.createElement('img'));

			}
		}
	}


	return xz;
	
});