// alert('Bulb Projects');


 let btn1 = document.getElementById('btn1');
 let btn2 = document.getElementById('btn2');


let heroImg = document.querySelector("#heroimg");




const imgUrl = "https://tutorialspoint.dev/image/ONbulb.jpg" 

const imgUrl2 = "https://tutorialspoint.dev/image/OFFbulb.jpg"


console.log(heroImg.getAttribute("src"));



btn1.addEventListener("click", function(event){
	
	heroImg.setAttribute("src",imgUrl);
	
})


btn2.addEventListener("click", function (event){

	heroImg.setAttribute("src",imgUrl2);
})































































// let btn2 = document.querySelector(".btn2");


































































































































































// btn1.addEventListener("click", function(){
	
	// heroImg.classList.add("offBulb");
	
// })


// btn2.addEventListener("click", function(){
	
	// heroImg.classList.remove("offBulb");
	
// })



// click.addEventListener("click", function(event){
	
	// demo.style.background = "skyblue";
	
	// demo.classList.add("demo1")
	
	// src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
	
// })

// rbtn.addEventListener("click", function(event){
	
	// demo.classList.remove("demo1");
	
	
// })




// let bulb1= document.querySelector('#bulb1');

// let bulb2= document.querySelector('#bulb2');




// btn1.addEventListener("click", function(e){
	
	// bulb2.classList.add("demo1");
	
// })


// btn2.addEventListener("click", function(e){
	
	// bulb2.classList.remove("demo1");
	
 // })



