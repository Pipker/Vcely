index_id = 0
one_id = ""
function klik3(){
	console.log(one_id)
}
function klik2(){
	console.log("bee[i].imag.id")
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
	// this.imag.addEventListener("click",function() {classList.add("active")})
	document.querySelector("body").appendChild(this.imag)

}
	klik(){

}
}


function create_bee(){
	for(i=0;i<5;i++){
		bee[i] = new bee
		bee[i].create_one_bee()
		console.log(bee[i].imag.id)
	

		index_move=5
		f1(bee[i].imag.id,bee[i].left_pos)

		console.log("jedu"+document.getElementById("id"+i).id)
		// document.getElementById("id"+i).addEventListener("click", klik3)
		// function klik3(){
		// 	console.log(document.getElementById("id"+i).id)
		// }
		index_id++
	

	
		
	}
	all_bees = document.querySelectorAll("img")
	console.log(all_bees)
	for(i = 2;i<all_bees.length; i++){
		one_id = all_bees[i].id
		all_bees[i].addEventListener("click", function(Target){one_id=(Target["target"].id)
		klik3()})
		


	}
	

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
	// console.log(document.getElementById(id).style.left)
}
index_move=index_move-1

  }

   





