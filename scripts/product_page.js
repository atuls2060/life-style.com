let thumbnails=document.getElementsByClassName("thumbnail")
let activeImage=document.getElementsByClassName("active")

for( let i=0;i<thumbnails.length;i++)
{
    thumbnails[i].addEventListener('mouseover',function (){
        if(activeImage.length>0)
        {
            activeImage[0].classList.remove('active')
        }

        this.classList.add('active')
        document.getElementById('featured').src=this.src

        $("#featured").elevateZoom();
    })
}

let btnRight=document.getElementById('slideright');
let btnLeft=document.getElementById('slideleft');

btnRight.onclick=()=>{
    document.getElementById('slider').scrollLeft -=180
    
}

btnLeft.onclick=()=>{
    document.getElementById('slider').scrollLeft +=180
}


let plus=document.querySelector(".plus")
let minus=document.querySelector(".minus")
let num=document.querySelector(".num")


console.log(plus)
let a=1;
 
plus.addEventListener("click", ()=>{
    a++;
    a=(a<10) ?  +a:a;
    num.innerHTML=a;
})

minus.addEventListener("click", ()=>{
    if(a>1){
        a--;
        a=(a<10) ?  +a:a;
        num.innerHTML=a;

    }
})

let checkout=document.getElementById("checkout")
checkout.onclick=()=>{

    window.location.href="./checkout.html"

}
import navi from "../components/navi.js"
import footer from "../components/foot.js"

let nav_div = document.getElementById("navbar");
let footer_div = document.getElementById("footer");

nav_div.innerHTML = navi();
footer_div.innerHTML = footer();