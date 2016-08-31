function getRandomColor(){
			var letters= '0123456789ABCDEF'.split('');
			var color= '#';
			for (var i=0; i<6; i++){
				color+=letters[Math.round(Math.random()*15)	];
			}
			return color;
		}
		
		var createdTime;
		var clickedTime;
		var reactionTime;
		
		function boxAppear(){
			var time=Math.random();
			time=time*5000;
			
			setTimeout (function(){
				if (Math.random()>0.5){
					document.getElementById("redBox").style.borderRadius="100px";
				} else {
					document.getElementById("redBox").style.borderRadius="0px";
				}
				
				var randomTop=Math.random();
				randomTop*=600;
				
				var randomLeft=Math.random();
				randomLeft=randomLeft*1200;
				
				document.getElementById("redBox").style.marginTop=randomTop+"px";
				document.getElementById("redBox").style.marginLeft=randomLeft+"px";
				document.getElementById("redBox").style.backgroundColor=getRandomColor();
				document.getElementById("redBox").style.display="block";
				createdTime=Date.now();
			}, time);
		}
		
		document.getElementById("redBox").onclick=function(){
			clickedTime=Date.now();
			reactionTime=(clickedTime-createdTime)/1000;
			document.getElementById("time").innerHTML=reactionTime+" seconds";
			this.style.display="none";
			boxAppear();
		}
		
		boxAppear();