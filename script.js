// ===========================
// LOADED
// ===========================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===========================
// SCROLL REVEAL
// ===========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// ===========================
// NAVBAR SCROLL
// ===========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.classList.add("active");

}else{

header.classList.remove("active");

}

});

// ===========================
// HERO PARALLAX
// ===========================

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/70;

const y=(window.innerHeight/2-e.clientY)/70;

hero.style.backgroundPosition=

`${50+x}% ${50+y}%`;

});

// ===========================
// HERO TITLE ENTRY
// ===========================

const heroTitle=document.querySelector(".hero-content");

heroTitle.animate(

[

{

opacity:0,

transform:"translateY(80px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],

{

duration:1800,

fill:"forwards",

easing:"ease"

}

);
// ===========================
// RANDOM SHOOTING STARS
// ===========================

function createShootingStar(){

const star=document.createElement("div");

star.style.position="fixed";

star.style.top=Math.random()*40+"%";

star.style.left="-200px";

star.style.width="220px";

star.style.height="2px";

star.style.background="linear-gradient(to right,white,transparent)";

star.style.transform="rotate(-35deg)";

star.style.pointerEvents="none";

star.style.boxShadow="0 0 18px white";

star.style.zIndex="2";

document.body.appendChild(star);

star.animate([

{

transform:"translate(-150px,-150px) rotate(-35deg)",

opacity:0

},

{

opacity:1

},

{

transform:"translate(2200px,1100px) rotate(-35deg)",

opacity:0

}

],{

duration:2500,

easing:"linear"

});

setTimeout(()=>{

star.remove();

},2600);

}

setInterval(createShootingStar,6000);

// ===========================
// BUTTON GLOW PULSE
// ===========================

document.querySelectorAll(".btn").forEach(btn=>{

setInterval(()=>{

btn.animate([

{

boxShadow:"0 0 20px #7c3aed"

},

{

boxShadow:"0 0 40px #bb86fc"

},

{

boxShadow:"0 0 20px #7c3aed"

}

],{

duration:2000

});

},2300);

});

// ===========================
// FLOATING MOUNTAINS
// ===========================

document.querySelectorAll(".mountain").forEach((mountain,index)=>{

mountain.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0px)"

}

],{

duration:7000+(index*1200),

iterations:Infinity

});

});

// ===========================
// LOGO GLOW
// ===========================

const logo=document.querySelector(".logo");

setInterval(()=>{

logo.animate([

{

textShadow:"0 0 15px #8b5cf6"

},

{

textShadow:"0 0 35px #ffffff"

},

{

textShadow:"0 0 15px #8b5cf6"

}

],{

duration:2200

});

},2300);

// ===========================
// PARALLAX MOUNTAINS
// ===========================

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/120;

const y=(window.innerHeight/2-e.clientY)/120;

document.querySelector(".layer1").style.transform=
`translate(${x}px,${y}px)`;

document.querySelector(".layer2").style.transform=
`translate(${x*1.5}px,${y*1.5}px)`;

document.querySelector(".layer3").style.transform=
`translate(${x*2}px,${y*2}px)`;

});

// ===========================
// HERO TEXT FLOAT
// ===========================

setInterval(()=>{

document.querySelector(".hero-content").animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:4000

});

},4000);

// ===========================
// END
// ===========================
