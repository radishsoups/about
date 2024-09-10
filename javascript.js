// Change image opacity

let images = document.querySelector('#works').querySelectorAll('img');
console.log(images);

function changeOpacity() {
	console.log("Function works");
	images[0].style.opacity = '0.5'; 
	images[1].style.opacity = '0.5';
	images[2].style.opacity = '0.5';
	images[3].style.opacity = '0.5'; 
	images[4].style.opacity = '0.5';
	images[5].style.opacity = '0.5';
	images[6].style.opacity = '0.5'; 
	images[7].style.opacity = '0.5';
	images[8].style.opacity = '0.5';
	images[9].style.opacity = '0.5';

  	this.style.opacity = '1';
  	//console.log(this);
}

function resetOpacity() {
	images[0].style.opacity = '1'; 
	images[1].style.opacity = '1';
	images[2].style.opacity = '1';
	images[3].style.opacity = '1';
	images[4].style.opacity = '1';
	images[5].style.opacity = '1';
	images[6].style.opacity = '1'; 
	images[7].style.opacity = '1';
	images[8].style.opacity = '1';
	images[9].style.opacity = '1';
}

// event listeners for hover on
images[0].addEventListener('pointerover', changeOpacity);
images[1].addEventListener('pointerover', changeOpacity);
images[2].addEventListener('pointerover', changeOpacity);
images[3].addEventListener('pointerover', changeOpacity);
images[4].addEventListener('pointerover', changeOpacity);
images[5].addEventListener('pointerover', changeOpacity);
images[6].addEventListener('pointerover', changeOpacity);
images[7].addEventListener('pointerover', changeOpacity);
images[8].addEventListener('pointerover', changeOpacity);
images[9].addEventListener('pointerover', changeOpacity);

// event listeners for hover off
images[0].addEventListener('pointerout', resetOpacity);
images[1].addEventListener('pointerout', resetOpacity);
images[2].addEventListener('pointerout', resetOpacity);
images[3].addEventListener('pointerout', resetOpacity);
images[4].addEventListener('pointerout', resetOpacity);
images[5].addEventListener('pointerout', resetOpacity);
images[6].addEventListener('pointerout', resetOpacity);
images[7].addEventListener('pointerout', resetOpacity);
images[8].addEventListener('pointerout', resetOpacity);
images[9].addEventListener('pointerout', resetOpacity);

// Replace first image
function replaceImg1(image){
	image.srcset="images/box-2x.png"
}

function oldImg1(image){
	image.srcset="images/blanket-2x.png"
}

// Replace second image
function replaceImg2(image){
	image.srcset="images/laying-2x.png"
}

function oldImg2(image){
	image.srcset="images/pistachio-2x.png"
}

// Replace third image
function replaceImg3(image){
	image.srcset="images/round-2x.png"
}

function oldImg3(image){
	image.srcset="images/tail-2x.png"
}

// Replace fourth image
function replaceImg4(image){
	image.srcset="images/zzz-2x.png"
}

function oldImg4(image){
	image.srcset="images/sleep-2x.png"
}