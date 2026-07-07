/* ============================================
   PREMIUM BIRTHDAY WEBSITE
   Taylor Swift - Folklore Theme
============================================ */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },800);

    },1800);

});


/* ============================================
   MUSIC
============================================ */

const music = document.getElementById("music");

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{

    music.play().catch(()=>{});

    document.getElementById("letter")
        .scrollIntoView({
            behavior:"smooth"
        });

});


/* ============================================
   LEAVES
============================================ */

const leaves = document.createElement("div");

leaves.id="leaves";

document.body.appendChild(leaves);

const icons=[
"🍂",
"🍁",
"🌿"
];

for(let i=0;i<40;i++){

    const leaf=document.createElement("div");

    leaf.className="leaf";

    leaf.innerHTML=
        icons[
        Math.floor(
        Math.random()*icons.length)];

    leaf.style.left=Math.random()*100+"%";

    leaf.style.animationDuration=
        8+Math.random()*8+"s";

    leaf.style.animationDelay=
        Math.random()*5+"s";

    leaf.style.fontSize=
        18+Math.random()*20+"px";

    leaves.appendChild(leaf);

}


/* ============================================
   FIREFLIES
============================================ */

for(let i=0;i<18;i++){

    const fly=document.createElement("div");

    fly.className="firefly";

    fly.style.left=Math.random()*100+"vw";

    fly.style.top=Math.random()*100+"vh";

    fly.style.animationDuration=
        2+Math.random()*4+"s";

    document.body.appendChild(fly);

}


/* ============================================
   CURSOR GLOW
============================================ */

const cursor=document.createElement("div");

cursor.className="cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX-15+"px";

    cursor.style.top=e.clientY-15+"px";

});


/* ============================================
   FADE IN
============================================ */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section")
.forEach(sec=>{

sec.classList.add("fade-up");

observer.observe(sec);

});


/* ============================================
   HERO ANIMATION
============================================ */

document.querySelector(".hero-content")
.animate([

{
opacity:0,
transform:"translateY(80px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1800,

fill:"forwards"

});


/* ============================================
   PARALLAX HERO
============================================ */

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

document.querySelector(".hero")
.style.backgroundPositionY=
scroll*0.4+"px";

});


/* ============================================
   BUTTON RIPPLE
============================================ */

document.querySelectorAll("button")
.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.style.position="absolute";

circle.style.width="20px";

circle.style.height="20px";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.5)";

circle.style.left=e.offsetX+"px";

circle.style.top=e.offsetY+"px";

circle.style.transform="translate(-50%,-50%)";

circle.style.animation="ripple .7s";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},700);

});

});
/* ============================================
   TYPEWRITER EFFECT
============================================ */

const quote = document.querySelector(".quote");

if (quote) {

    const originalText = quote.textContent;

    quote.textContent = "";

    let i = 0;

    function typeQuote() {

        if (i < originalText.length) {

            quote.textContent += originalText.charAt(i);

            i++;

            setTimeout(typeQuote, 80);

        }

    }

    const quoteObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                typeQuote();

                quoteObserver.disconnect();

            }

        });

    });

    quoteObserver.observe(quote);

}

/* ============================================
   CONFETTI
============================================ */

const giftBtn = document.getElementById("giftBtn");

giftBtn.addEventListener("click", () => {

    document.getElementById("surprise")
        .scrollIntoView({
            behavior: "smooth"
        });

    const duration = 4000;

    const end = Date.now() + duration;

    (function frame() {

        confetti({

            particleCount: 6,

            spread: 80,

            origin: {

                x: Math.random(),

                y: Math.random() - 0.2

            }

        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

});

/* ============================================
   STAR EASTER EGG
============================================ */

const star = document.getElementById("star");

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");

let starClick = 0;

star.addEventListener("click", () => {

    starClick++;

    if (starClick === 13) {

        popup.style.display = "flex";

        starClick = 0;

    }

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});

/* ============================================
   SHOOTING STAR
============================================ */

function createStar() {

    const shooting = document.createElement("div");

    shooting.className = "shooting-star";

    shooting.style.left = Math.random() * window.innerWidth + "px";

    shooting.style.top = Math.random() * 250 + "px";

    document.body.appendChild(shooting);

    setTimeout(() => {

        shooting.remove();

    }, 2000);

}

setInterval(createStar, 6000);

/* ============================================
   LIGHTBOX GALLERY
============================================ */

const photos = document.querySelectorAll(".photo img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = "<img>";

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = photo.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

/* ============================================
   NIGHT MODE
============================================ */

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if (scroll > 1500) {

        document.body.classList.add("night");

    } else {

        document.body.classList.remove("night");

    }

});
