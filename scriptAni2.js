index_id = 0
one_id = ""
function go_back(){
	console.log(document.getElementById(one_id).style.left)

	one_left = document.getElementById(one_id).style.left
	one_left=one_left.replace("%" , "")
	one_left=Number(one_left)
	console.log(one_left)
	f2(one_id,one_left)

	
}

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



// Včelstvo

class bee {
	
	img = "img/bee.png"
	left_pos = Math.floor(Math. random()*86)+4
	top_pos = Math.floor(Math. random()*86)+4
	start_left = 0
	start_top = 0
	imag = document.createElement("img")
	create_one_bee(){
	this.imag.src = this.img
	this.imag.id = "id"+index_id
	this.imag.style.display = "block"
	this.imag.style.left = bee[i].start_left + "%"
	this.imag.style.top = bee[i].top_pos + "%"
	this.imag.style.position = "absolute"
	this.imag.style.width = "3%"
	this.imag.style.height = "3%"
	this.imag.addEventListener("click", function(Target){one_id=(Target["target"].id)
	go_back()})
	document.querySelector("body").appendChild(this.imag)

}

}


function create_bee(){
	for(i=0;i<5;i++){
		bee[i] = new bee
		bee[i].create_one_bee()
	
		index_move=5
		f1(bee[i].imag.id,bee[i].left_pos)

		index_id++
		
	}
	// all_bees = document.querySelectorAll("img")
	// for(i = 2;i<all_bees.length; i++){
	// 	one_id = all_bees[i].id

		


	// }
	

}

function resolveAfter2Seconds(x) {
	return new Promise((resolve) => {
	  setTimeout(() => {
		resolve(x);
	  }, 100);
	});
  }


async function f1(id,left) {

	for(g=0;g<left;g= g+(1/index_move)){
	const x = await resolveAfter2Seconds(g);
	document.getElementById(id).style.left = x+ "%"
}
index_move=index_move-1

  }

  function resolveAfter(y) {
	return new Promise((resolve) => {
	  setTimeout(() => {
		resolve(y);
	  }, 100);
	});
  }


async function f2(id,left) {

	for(g=left;g>0;g= g-1){
	const y = await resolveAfter(g);
	document.getElementById(one_id).style.left = y+ "%"
	console.log(document.getElementById(one_id).style.left)
}
// index_move=index_move-1

  }

   





