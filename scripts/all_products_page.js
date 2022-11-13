
let container=document.getElementById("container")



// fetch fucntion

const get_item = async () =>{

    let res =await fetch (`https://the-gadget-factory-backend.herokuapp.com/products`)

    let data = await res.json()
    console.log(data)
    data.forEach((e)=>{
        {
            let div=document.createElement("div")
            div.className="item";
    
            let item_image=document.createElement("img")
    
            item_image.src=e.image;
    
            let item_name=document.createElement("p")
    
            item_name.innerHTML=e.title;
    
            let item_price=document.createElement("h3")
            item_price.className="product_price"
            item_price.innerHTML=e.price;
            let heart=document.createElement("i")
            heart.className="fa-regular fa-heart"
            let free_shipping=document.createElement("p")
            
            free_shipping="free shipping"

            
            
            
            
    
            div.append(item_image,item_name,item_price,heart,free_shipping)
            
            div.addEventListener("click",()=>{
                gotopage()
            })
            container.append(div)
    
    
        }

    })
    
    

}

get_item()


function gotopage(e)
{
    location.href="/product_Page.html";
}
