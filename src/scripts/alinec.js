
function $(){
	this.inteval = null;
	this.leader = 0;
}


$.prototype = {
	getId:function(id){
		return document.getElementById(id);
	},
	addEvent:function(obj,evt,func){
		obj.addEventListener(evt,func,false);
	},
	startAnimate:function(target,obj){
		var self = this;
		this.clearAnimate();
		this.inteval = setInterval(function(){
			self.leader = self.leader + (target - self.leader )/10;

			self.leader = self.leader > 0 ? Math.ceil(self.leader) : Math.floor(self.leader);
			obj.style.top = self.leader + "px";
			if(self.leader == target) {self.clearAnimate()};
			
			//console.log("leader:" + leader + "   target: " + target);

			
		},30);
	},
	clearAnimate:function(){
		window.clearInterval(this.inteval);
	},
	getDom:function(str){
		return document.querySelector(str);
	},
	getScroll:function(){
		if(window.pageYOffset != null) //ie9 + 和其他浏览器
		{
			return {
				left:window.pageXOffset,
				top:window.pageYOffset
			}
		}else if(document.compatNode == "css1Compat") //声明了DTD的
		{ //检测是不是怪异模式的浏览器 -- 就是没有生命 <!DOCTYPE html>
			return {
				left:document.documentElement.scrollLeft,
				top:document.documentElement.scrollTop
			}
		}
		//怪异模式
		return {
			left:document.body.scrollLeft,
			top:document.body.scrollTop
		}
	},
	getClient:function(){
		if(window.innerWidth != null){ //ie9 + 最新浏览器
			return {
				width:window.innerWidth,
				height:window.innerHeight
			}
		}else if(document.compatMode === "css1Compat"){ //标准浏览器
			return {
				width:document.documentElement.clientWidth,
				height:document.documentElement.clientHeight
			}
		}

		//怪异浏览器
		return {
			width:document.body.clientWidth,
			height:document.body.clientHeight
		}
	},
	//检测分辨率
	getFBL:function(){
		return {
			width:document.client.width,
			height:document.client.height
		}
	},
	//取消冒泡
	clearBubble:function(event){
		var event = event || window.event;

		if(event && event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}

		return event;
	},
	getTargetId:function(event){
		var event = event || window.event;
		
		return targetId = event.target ? event.target.id : event.srcElement.id;
	}

};



var $ = new $();



var tools = {
	createNode:function(){

	},
	addBtn:function(obj){
		var _div = document.createElement("div");
		var _txt = document.createTextNode(obj.text);
		_div.setAttribute("id",obj.id);
		_div.style.width = obj.width;
		_div.style.height = obj.height;
		_div.style.fontSize= obj.fontSize;
		_div.style.border = "1px solid #444";
		_div.style.textAlign = "center";
		_div.style.lineHeight = obj.height;
		_div.style.cursor = "pointer";
		_div.style.display = "inline-block";
		_div.appendChild(_txt);
		document.body.appendChild(_div);
		return _div;
	},
	addLog:function(id){
		var _log = document.createElement("div");
		_log.style.position = "absolute";
		_log.style.backgroundColor = "#444";
		_log.style.width = "300px";
		_log.style.height = "auto";
		_log.style.right = "0";
		_log.style.top = "0";
		_log.setAttribute("id",id);
		document.body.appendChild(_log);	
		return _log;
	},showLog:function(id){
		if(!$.getId(id)){
			addLog(id);
		}	
	},
	hideLog:function(id){
		if(!$.getId(id)){
			$.getId(id).style.display = "none";
		}	
	},
	addMsgLog:function(id,txt){
		var _p = document.createElement("p");
		var _txt = document.createTextNode(txt);
		_p.style.fontSize = "12px";
		_p.style.color = "#fff";
		_p.appendChild(_txt);

		$.getId(id).appendChild(_p);
	}

};