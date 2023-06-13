
// var beesound=new Audio("../wav/bee.wav");
// var dino1sound=new Audio("../wav/dino1.wav");
// var dino2sound=new Audio("../wav/dino2.wav");
// var dino3sound=new Audio("../wav/dino3.wav");
// var dinobigsound=new Audio("../wav/dinobig.wav");
// var dinobirdsound=new Audio("../wav/dinobird.wav");

function gen_num(){
	return(Math.floor(Math. random()*90))
}

function get_result(bleft,btop,bclass){
	resultLeft = bleft-ulleft
	if(resultLeft<0){
		document.querySelector(bclass).style.transform = "rotateY(0deg)";
		resultLeft=resultLeft*-1
	}
	resultTop=btop-ultop
	if(resultTop<0){
		resultTop=resultTop*-1
	}
	if (resultLeft>resultTop){
		resultSpin ="left"
	}else{
		resultSpin ="top"
	}	
}

// function dino1(){
// dino1sound.play();	
// }
// function dino2(){
// dino2sound.play();	
// }
// function dino3(){
// dino3sound.play();	
// }
// function dinobig(){
// dinobigsound.play();	
// }
// function dinobird(){
// dinobirdsound.play();	
// }

// document.querySelector("#dino1").addEventListener("click", dino1);
// document.querySelector("#dino2").addEventListener("click", dino2);
// document.querySelector("#dino3").addEventListener("click", dino3);
// document.querySelector("#dinobig").addEventListener("click", dinobig);
// document.querySelector("#dinobird").addEventListener("click", dinobird)
document.querySelector(".ul").addEventListener("click", create_bee)
testfce = function(){
	console.log("pauza")
}
sleep = function(){
	setTimeout(testfce, 5000)
	
}

// Včelstvo

class bee {
	img = "img/bee.png"
	left_pos = Math.floor(Math. random()*86)+4
	top_pos = Math.floor(Math. random()*86)+4
	start_left = 0
	start_top = 0
	
	klik = function(){
		console.log(this.left_pos+" "+this.top_pos)
		console.log(this.start_left+" "+this.start_top)
	}
	move = function(){
		setTimeout(() => {
		this.start_left = this.start_left+1
		
		console.log(this.start_left)} ,1000)
	}

	
}
bee1 = new bee
bee1.klik()

function create_bee(){
	for(i=0;i<5;i++){
		bee[i] = new bee
		bee[i].klik()
		imag = document.createElement("img")
		imag.src = bee[i].img
		imag.style.display = "block"
		imag.style.left = bee[i].left_pos + "%"
		imag.style.top = bee[i].top_pos + "%"
		imag.style.position = "absolute"
		document.querySelector("body").appendChild(imag)
		z =0
		while (z <bee[i].left_pos){
		bee[i].move()
	
		z++
		}
	}
}


