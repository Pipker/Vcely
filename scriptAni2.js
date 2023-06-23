index_id = 0
one_id = ""
for_spin_top = null
for_spin_left = null
move_back_up = false
move_back_down = false
move_back_left = false
move_back_right = false
move_up = false
move_down = false
move_left = false
move_right = false
ready_to_random = true

// function to_back(){
	
// 	move_bee.top_index = move_bee.top_index*(-1)
// 	move_bee.left_index = move_bee.left_index*(-1)
// 	if (move_bee.imag.style.transform == "rotateY(180deg)"){
// 		move_bee.imag.style.transform = "rotateY(0deg)"
// 	}else {move_bee.imag.style.transform = "rotateY(180deg)"}
// 	one_left = document.getElementById(one_id).style.left
// 	one_left=one_left.replace("%" , "")
// 	one_left=Number(one_left)}

function back(){
if (bee[one_id.replace("id","")].ready_to_klick ==true){
	bee[one_id.replace("id","")].ready_to_klick =false

	bee[one_id.replace("id","")].go_back()
}
	// move_bee = bee[one_id.replace("id","")]
	// if (move_bee.spin=="right"){
	// 	if(move_back_left != true){
	// 		to_back()
	// 	move_back_left = true
	// 	f1_left(move_bee.imag.id, move_bee.start_left, move_bee.left_pos, move_bee.top_index)
	// }
	// }
	// 	else if (move_bee.spin=="left"){
	// 		if(move_back_right != true){
	// 			to_back()
	// 		move_back_right = true
	// 		f1_right(move_bee.imag.id,move_bee.start_left, move_bee.left_pos, move_bee.top_index)
	// 		}
	// 	}
	// 	else if (move_bee.spin=="up"){
	// 		if(move_back_down != true){
	// 			to_back()
	// 		move_back_down = true
	// 		f1_down(move_bee.imag.id,move_bee.start_top, move_bee.top_pos, move_bee.left_index)
	// 	}
	// }
	// 	else if (move_bee.spin=="down"){
	// 		if(move_back_up != true){
	// 			to_back()
	// 		move_back_up = true
	// 		f1_up(move_bee.imag.id,move_bee.start_top, move_bee.top_pos, move_bee.left_index)
	// 	}
	// }

}
index_move_left=0
index_move_right=0
index_move_up=0
index_move_down=0
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

// function get_result(bleft,btop,bclass){
// 	resultLeft = bleft-ulleft
// 	if(resultLeft<0){
// 		document.querySelector(bclass).style.transform = "rotateY(0deg)";
// 		resultLeft=resultLeft*-1
// 	}
// 	resultTop=btop-ultop
// 	if(resultTop<0){
// 		resultTop=resultTop*-1
// 	}
// 	if (resultLeft>resultTop){
// 		resultSpin ="left"
// 	}else{
// 		resultSpin ="top"
// 	}	
// }

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
	left_pos = Math.floor(Math. random()*82)+8
	top_pos = Math.floor(Math. random()*82)+8
	start_left = 45
	start_top = 41
	ready_to_klick = false
	get_top_index = function(){
		if(this.start_left-this.left_pos<0){
			return (this.top_pos - this.start_top)/(this.start_left-this.left_pos)*(-1)
		}else{
			return (this.top_pos - this.start_top)/(this.start_left-this.left_pos)	
		}
	}
	get_left_index = function(){
		if(this.start_top-this.top_pos<0){
			return (this.left_pos - this.start_left)/(this.start_top-this.top_pos)*(-1)
		}else{
			return (this.left_pos - this.start_left)/(this.start_top-this.top_pos)	
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
		for_spin_top = this.top_pos-this.start_top
		if (for_spin_top<0){
			for_spin_top = for_spin_top *(-1)
		}
		for_spin_left = this.left_pos-this.start_left
		if (for_spin_left<0){
			for_spin_left = for_spin_left *(-1)
		}
		
		if (this.left_pos-this.start_left<0 && for_spin_top<for_spin_left){
			this.move_const = (this.top_pos-this.start_top)/(this.start_left-this.left_pos)

			return "left"
		}
		else if(this.left_pos-this.start_left>0 && for_spin_top<for_spin_left){
			this.move_const = (this.top_pos-this.start_top)/(this.left_pos-this.start_left)

			return "right"
		}else if(this.top_pos-this.start_top>0 && for_spin_top>for_spin_left){
			return "up"
		}else{
			return "down"
		}}
	to_back = function(){			
			
			this.top_index = this.top_index*(-1)
			this.left_index = this.left_index*(-1)
			if (this.left_pos >this.start_left){
				this.imag.style.transform = "rotateY(180deg)"
			}else {this.imag.style.transform = "rotateY(0deg)"}
			// one_left = this.left_pos
			// one_left=one_left.replace("%" , "")
			// one_left=Number(one_left)
		}

		go_back(){
			
			this.left_pos = this.imag.style.left
			this.left_pos = this.left_pos.replace("%","")
			this.left_pos = Number(this.left_pos)
			this.top_pos = this.imag.style.top
			this.top_pos = this.top_pos.replace("%","")
			this.top_pos = Number(this.top_pos)
			this.left_index=this.get_left_index()
			this.top_index=this.get_top_index()
			this.spin=this.choose_spin()

				if (this.spin=="right"){
					if(move_back_left != true && move_left != true){
						this.to_back()
					move_back_left = true
					f1_left(this.imag.id, this.start_left, this.left_pos, this.top_index)
				}else{if(ready_to_random == true){
					random_move(this.imag.id,this.ready_to_klick)
					}}
				}
					else if (this.spin=="left"){
						if(move_back_right != true && move_right != true){
							this.to_back()
						move_back_right = true
						f1_right(this.imag.id,this.start_left, this.left_pos, this.top_index)
					}else{if(ready_to_random == true){
						random_move(this.imag.id,this.ready_to_klick)
						}}}
					else if (this.spin=="up"){
						if(move_back_down != true && move_down != true){
							this.to_back()
						move_back_down = true
						f1_down(this.imag.id,this.start_top, this.top_pos, this.left_index)
					}else{if(ready_to_random == true){
						random_move(this.imag.id,this.ready_to_klick)
						}}
				}
					else if (this.spin=="down"){
						if(move_back_up != true && move_up != true){
							this.to_back()
						move_back_up = true
						f1_up(this.imag.id,this.start_top, this.top_pos, this.left_index)
					}else{random_move(this.imag.id,this.ready_to_klick)
						}}
				

			}

	


	create_one_bee(){

	this.imag.src = this.img
	this.imag.id = "id"+index_id
	this.spin = this.choose_spin() 
	this.imag.style.display = "block"
	this.imag.style.transform = this.rotate()
	this.imag.style.left = bee[i].start_left + "%"
	this.imag.style.cursor = "pointer"
	this.imag.style.top = bee[i].start_top + "%"
	this.imag.style.position = "absolute"
	this.imag.style.width = "3%"
	this.imag.style.height = "3%"
	this.imag.style.zIndex = "1000"
	this.top_index=this.get_top_index()
	this.left_index = this.get_left_index()
	document.querySelector("body").appendChild(this.imag)

	if (this.spin=="right"){
		move_right = true
	f1_right(this.imag.id,this.left_pos, this.start_left, this.top_index)
		}
	else if (this.spin=="left"){
		move_left = true
		f1_left(this.imag.id,this.left_pos, this.start_left, this.top_index)
		}
	else if (this.spin=="up"){
		move_up = true
		f1_up(this.imag.id,this.top_pos, this.start_top, this.left_index)
	}
	else if (this.spin=="down"){
		move_down = true
		f1_down(this.imag.id,this.top_pos, this.start_top, this.left_index)
	}
	this.imag.addEventListener("click", function(Target){one_id=(Target["target"].id)
	
	back()})
}

}



function create_bee(){
if (ready_for_new_bee==true){

	test = 0
	index_move_left=0
	index_move_right=0
	for(i=0;i<5;i++){
		bee[index_id] = new bee
		bee[index_id].create_one_bee()
		index_id++
	}
}
}
f1_right = async function(id,left, start_left,top_index) {
	index_move_right=index_move_right+1

	for(g=start_left;g<left;g= g+(1/index_move_right)){
	ready_for_new_bee= false
	const x = await resolveAfter2Seconds(g);
	one_top = document.getElementById(id).style.top
	one_top = one_top.replace("%","")
	one_top = Number(one_top)
	one_top = one_top+top_index
	document.getElementById(id).style.left = x+ "%"

	document.getElementById(id).style.top = one_top+ "%"
}
if (move_back_right == true){
	document.getElementById(id).remove()
	move_back_right = false	
}
move_right = false 
ready_for_new_bee= true
bee[id.replace("id","")].ready_to_klick = true 
index_move_right=index_move_right-1

  }

f1_left = async function (id,left, start_left,top_index) {
	index_move_left=index_move_left+1
	for(h=start_left;h>left;h= h-(1/index_move_left)){
		ready_for_new_bee= false
		const x = await resolveAfter2Seconds(h);
		one_top = document.getElementById(id).style.top
		one_top = one_top.replace("%","")
		one_top = Number(one_top)
	one_top = one_top+(top_index)
		document.getElementById(id).style.left = x+ "%"
		document.getElementById(id).style.top = one_top+ "%"
	}
	if (move_back_left == true){
		document.getElementById(id).remove()
		move_back_left = false	
	}
	ready_for_new_bee= true
	move_left = false
	bee[id.replace("id","")].ready_to_klick = true  
	index_move_left=index_move_left-1
	
  }
  f1_up = async function (id,top, start_top,left_index) {

	index_move_up=index_move_up+1
	
	for(z=start_top;z<top;z= z+(1/index_move_up)){
		ready_for_new_bee= false
		const x = await resolveAfter2Seconds(z);
		one_left = document.getElementById(id).style.left
		one_left = one_left.replace("%","")
		one_left = Number(one_left)
	one_left = one_left+(left_index)
		document.getElementById(id).style.top = z+ "%"
		document.getElementById(id).style.left = one_left+ "%"
	}
	if (move_back_up== true){
		document.getElementById(id).remove()
		move_back_up = false	
	}
	ready_for_new_bee= true
	move_up = false
	bee[id.replace("id","")].ready_to_klick = true   
	index_move_up=index_move_up-1
  }
f1_down = async function (id,top, start_top,left_index) {

	index_move_down=index_move_down+1
	for(a=start_top;a>top;a= a-(1/index_move_down)){
		ready_for_new_bee= false
		const x = await resolveAfter2Seconds(a);
		one_left = document.getElementById(id).style.left
		one_left = one_left.replace("%","")
		one_left = Number(one_left)
	one_left = one_left+(left_index)
		document.getElementById(id).style.top = a+ "%"
		document.getElementById(id).style.left = one_left+ "%"
	}
	if (move_back_down == true){
		document.getElementById(id).remove()
		move_back_down = false	
	}
	ready_for_new_bee= true
	move_down = false
	bee[[id.replace("id","")]].ready_to_klick = true  
	index_move_down=index_move_down-1
}

random_move = async function(id){

ready_to_random = false
random_index = Math.floor(Math. random()*4)
random_left = (Math. random())
random_top = (Math. random())
if (random_left>random_top){
	random_left=1
}else{random_top=1}
if (random_index ==0){
	random_left=random_left*(-1)
	document.getElementById(id).style.transform = "rotateY(180deg)"
}else if(random_index ==1){
	random_left=random_left*(-1)
	document.getElementById(id).style.transform = "rotateY(180deg)"
	random_top=random_top*(-1)
}else if(random_index ==2){
	random_top=random_top*(-1)
	document.getElementById(id).style.transform = "rotateY(0deg)"
}else{	document.getElementById(id).style.transform = "rotateY(0deg)"
}
	for(q=0;q<7;q++){
		const x = await resolveAfter2Seconds(q);
		ready_to_random = false
		one_random_left = document.getElementById(id).style.left
		one_random_left = one_random_left.replace("%","")
		one_random_left = Number(one_random_left)
		one_random_left = one_random_left+(random_left)
		one_random_top = document.getElementById(id).style.top
		one_random_top = one_random_top.replace("%","")
		one_random_top = Number(one_random_top)
		one_random_top = one_random_top+(random_top)
		document.getElementById(id).style.top = one_random_top+ "%"
		document.getElementById(id).style.left = one_random_left+ "%"
	}
	bee[one_id.replace("id","")].ready_to_klick =true
	ready_to_random = true

}
resolveAfter2Seconds = function (x) {
	return new Promise((resolve) => {
	  setTimeout(() => {
		resolve(x);
	  }, 70);
	});
  }
  create_bee()