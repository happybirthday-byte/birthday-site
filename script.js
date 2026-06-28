const gift=document.getElementById("gift");

gift.addEventListener("click",()=>{

document.getElementById("opening").style.display="none";

document.getElementById("birthday").style.display="block";

document.getElementById("musik").play();

});


for(let i=0;i<15;i++){

let bunga=document.createElement("div");

bunga.innerHTML="🌸";

bunga.classList.add("flower");

bunga.style.left=Math.random()*100+"%";

bunga.style.animationDuration=
(8+Math.random()*4)+"s";

document.body.appendChild(bunga);

}

function bukaGaleri(){

document.getElementById(
"birthday"
).style.display="none";

document.getElementById(
"galeri"
).style.display="block";

}

function kembali(){

document.getElementById(
"galeri"
).style.display="none";

document.getElementById(
"birthday"
).style.display="block";

}