index_id = 0
one_id = ""
function go_back(){
	one_left = document.getElementById(one_id).style.left
	one_left=one_left.replace("%" , "")
	one_left=Number(one_left)
	f2(one_id,one_left)
}
index_move_left=0
index_move_right=0
ready_for_new_bee = true
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
	left_pos = Math.floor(Math. random()*86)+8
	top_pos = Math.floor(Math. random()*86)+8
	start_left = 30
	start_top = 35
	get_top_index = function(){
		if(this.start_left-this.left_pos<0){
			return (this.top_pos - this.start_top)/(this.start_left-this.left_pos)*(-1)
		}else{
			return (this.top_pos - this.start_top)/(this.start_left-this.left_pos)	
		}
	}

	imag = document.createElement("img")
	rotate = function (){
		if (this.left_pos-this.start_left<0){
			return "rotateY(180deg)"

		}
		else{
			return "rotateY(0deg)"
		}
	}
	
	choose_spin = function(){
		if (this.left_pos-this.start_left<0){
			this.move_const = (this.top_pos-this.start_top)/(this.start_left-this.left_pos)

			return "left"
		}
		else{
			this.move_const = (this.top_pos-this.start_top)/(this.left_pos-this.start_left)

			return "right"
		}
	}


	create_one_bee(){

	this.imag.src = this.img
	this.imag.id = "id"+index_id
	this.spin = this.choose_spin() 
	this.imag.style.display = "block"
	this.imag.style.transform = this.rotate()
	this.imag.style.left = bee[i].start_left + "%"
	this.imag.style.top = bee[i].start_top + "%"
	this.imag.style.position = "absolute"
	this.imag.style.width = "3%"
	this.imag.style.height = "3%"
	this.top_index=this.get_top_index()

	this.imag.addEventListener("click", function(Target){one_id=(Target["target"].id)
	
	go_back()})
	document.querySelector("body").appendChild(this.imag)

	if (this.spin=="right"){
	f1_right(this.imag.id,this.left_pos, this.start_left, this.start_top,this.move_const, this.top_index)
		}
	else if (this.spin=="left"){
		f1_left(this.imag.id,this.left_pos, this.start_left,this.start_top,this.move_const, this.top_index)
}

}

}



function create_bee(){

	index_move_left=0
	index_move_right=0
	for(i=0;i<5;i++){
		bee[i] = new bee
		bee[i].create_one_bee()
		index_id++
		
	}

}

f1_right = async function(id,left, start_left,top,move_index,top_index) {
	index_move_right=index_move_right+1

	for(g=start_left;g<left;g= g+(1/index_move_right)){
	const x = await resolveAfter2Seconds(g);
	one_top = document.getElementById(id).style.top
	one_top = one_top.replace("%","")
	one_top = Number(one_top)
	one_top = one_top+top_index
	document.getElementById(id).style.left = x+ "%"

	document.getElementById(id).style.top = one_top+ "%"
} 
index_move_right=index_move_right-1

  }
  f1_left = async function (id,left, start_left, top, move_index,top_index) {

	index_move_left=index_move_left+1
	
	for(h=start_left;h>left;h= h-(1/index_move_left)){
		const x = await resolveAfter2Seconds(h);
		one_top = document.getElementById(id).style.top
		one_top = one_top.replace("%","")
		one_top = Number(one_top)
	one_top = one_top+(top_index)
		document.getElementById(id).style.left = x+ "%"
		document.getElementById(id).style.top = one_top+ "%"
	} 
	index_move_left=index_move_left-1
	
  }

  resolveAfter2Seconds = function (x) {
	return new Promise((resolve) => {
	  setTimeout(() => {
		resolve(x);
	  }, 100);
	});
  }
  
