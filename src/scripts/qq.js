define(function(){
	var  qq = {
		json:[
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。",
			"武则天秘史 至22级 姐姐与皇帝偷晴，媚娘抓奸在床。。。。"
		],
		init:function(){
			console.log(1);
			this.setStyle();
			this.createElements();
		},	
		setStyle:function(){
			document.body.style.background = "#000";
			

		},
		createElements:function(){
			var box = document.createElement("div");
			box.setAttribute("id","box");
			box.style.width = "660px";
			box.style.height = "335px";
			box.style.background = "#fff";
			box.style.position = "relative";
			box.style.margin = "100px auto";
			

			var ul = document.createElement("ul");
			ul.setAttribute("id","pic_list");
			ul.style.position ="relative";
			ul.style.zIndex = "1";
			ul.style.height = "335px";
			ul.style.display = "flex";

			var text_list = document.createElement("ul");
			text_list.style.position = "absolute";
			text_list.style.display = "flex";
			text_list.style.bottom = "0";
			text_list.style.zIndex = "20";
			text_list.style.height = "88px";

			var ico_list = document.createElement("div");
			ico_list.style.position = "absolute";
			ico_list.style.bottom = "0px";
			ico_list.style.zIndex = "20";
			ico_list.style.height = "34px";
			ico_list.style.width = "660px";
			var ico_list_ul = document.createElement("ul");
			ico_list_ul.style.display = "flex";

			var _li = null;
			var img = null;
			var text_list_li = null;
			var ico_list_ul_li = null;

			for(var i = 1; i< 15; i++){
				(function(_li,_img,i,ul){
					var img = new Image();

					_li.style.width = "660px";
					_li.style.height = "335px";

					img.src = "../images/qq/pic_"+i+".jpg";

					//img.onload = function(){
						_img.src = img.src;
						_li.appendChild(_img);
						ul.appendChild(_li);
					//}

					text_list_li = document.createElement("li");
					text_list_li.style.width  = "660px";
					var _h2 = document.createElement("h2");
					_h2.className = "show";
					var _a = document.createElement("a");
					_a.style.textDecoration = "none";

					_a.style.color = "#fff";
					_a.style.fontSize = "14px";
					_a.setAttribute("href","#");
					_a.innerText = qq.json[i-1];

					_h2.appendChild(_a);

					text_list_li.appendChild(_h2);

					text_list.appendChild(text_list_li);


					ico_list_ul_li = document.createElement("li");
					ico_list_ul_li.style.width = "64px";
					ico_list_ul_li.style.height = "34px";
					if(i==1){
						ico_list_ul_li.className = "active";
					}

					var ico_list_ul_li_img = document.createElement("img");
					var iImg = new Image();
					iImg.src = "../images/qq/ico_"+i+".jpg";

					//iImg.onload = function(){
						ico_list_ul_li_img.src = iImg.src ;
						ico_list_ul_li_img.style.width = "64px";
						ico_list_ul_li.appendChild(ico_list_ul_li_img);
					//	
					//}

					ico_list_ul.appendChild(ico_list_ul_li);

				})(document.createElement("li"),document.createElement("img"),i,ul);

			}


			//遮罩
			var mark = document.createElement("div");
			mark.className =  "mark";
			mark.style.width = "660px";
			mark.style.height = "335px";
			mark.style.position = "absolute";
			box.appendChild(mark);

			box.appendChild(ul);

			box.appendChild(text_list);

			ico_list.appendChild(ico_list_ul);

			box.appendChild(ico_list);

			document.body.appendChild(box);

		}
	};

	return {
		aPicLi:document.getElementById("pic_list").getElementsByTagName('li'),
		aTxtLi:document.getElementById("text_list").getElementsByTagName("li"),
		aIcoLi:document.getElementById("ico_list").getElementsByTagName("li"),
		oBtnPrev:document.getElementById("btn_prev"),
		oBtnNext:document.getElementById("btn_next"),
		oIcoUl:document.getElementById("ico_list").getElementsByTagName("ul")[0],
		init:function(){
			this.BindEvent();
		},
		BindEvent:function(){
			for(i =0 ; i<this.aIcoLi.length;i++){
				this.aIcoLi[i].onclick = function(num,self){
					return function(event){
						self.setCur.call(self,this,num);
					};
				}(i,this);
			}

			var self = this;
			//左右按钮
			this.oBtnNext.addEventListener("click",function(){
				//寻找边界
				if(Math.abs(self.oIcoUl.offsetLeft) >=  ((self.aPicLi.length -7) * 75 )) {
					return false;
				}
				self.oIcoUl.style.left = self.oIcoUl.offsetLeft + (-75) + "px";

				
					console.log("next:" + self.oIcoUl.offsetLeft/75);
				

			},false);

			this.oBtnPrev.addEventListener("click",function(){
				if(self.oIcoUl.offsetLeft >= 0) {
					return false;
				}
				self.oIcoUl.style.left = self.oIcoUl.offsetLeft + (75) + "px";

				console.log("prev:" +self.oIcoUl.offsetLeft/75);
			});
		},
		setJt:function(num){

			this.oBtnPrev.className = "btn showBtn";
			this.oBtnNext.className = "btn showBtn";

			if(num == 0){
				this.oBtnPrev.className = "btn";
			}

			if(num == this.aPicLi.length -1){
				this.oBtnNext.className = "btn";
			}
		},
		setCur:function(obj,num){
			for(var i = 0; i< this.aIcoLi.length; i++){
				this.aIcoLi[i].className = "";
				this.aPicLi[i].style.opacity = "0";
				this.aPicLi[i].filter = 'alpha(opacity:0)';
				this.aTxtLi[i].getElementsByTagName("h2")[0].className = "";
			}
			obj.className = "active";
			this.aPicLi[num].style.filter = 'alpha(opacity:1)';
			this.aPicLi[num].style.opacity = 1;
			this.aTxtLi[num].getElementsByTagName("h2")[0].className = "show";

			this.setJt(num);
		}

	};
});