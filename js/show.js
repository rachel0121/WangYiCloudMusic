window.onload = function(){
	var showBar = document.getElementById("show");
	var showR = document.getElementById("showR");
	var showL = document.getElementById("showL");
	var showImg = showBar.getElementsByTagName("img")[0];
	var showRdiv = document.getElementById("showRDiv");
	var showLdiv = document.getElementById("showLDiv");
	
	var imgs = ["1.png","2.png","3.png","4.png","5.png"];
	var bgcolor = ["#000","#99013c","#3c5aec","#000","#000"];
	
	var index = 0;
	
	var t1 = window.setInterval( show, 2000); 
	
	showRdiv.onmouseover = function(){
		showR.style.display = "block";
	}
	
	showRdiv.onmouseout = function(){
		showR.style.display = "none";
	}
	
	showLdiv.onmouseover = function(){
		showL.style.display = "block";
	}
	
	showLdiv.onmouseout = function(){
		showL.style.display = "none";
	}
	
	function show(){
		index++;
		if(index == 5){
			index = 0;
		}
		showImg.src = "img/" + imgs[index];
		showBar.style.background = bgcolor[index];
	}
	
	showRdiv.onclick = function(){
		index++;
		if(index == 5){
			index = 0;
		}
		showImg.src = "img/" + imgs[index];
		showBar.style.background = bgcolor[index];
	}
	
	showLdiv.onclick = function(){
		index--;
		if(index == -1){
			index = 4;
		}
		showImg.src = "img/" + imgs[index];
		showBar.style.background = bgcolor[index];
	}
	
}
