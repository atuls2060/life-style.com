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