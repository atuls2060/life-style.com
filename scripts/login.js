const sign_in=async()=>{
    try{
let email1=document.querySelector("#email").value
let password1=document.querySelector("#password").value
let send_data={
    email:email1,
    password:password1
}
let res=await fetch('https://the-gadget-factory-backend.herokuapp.com/login',
{
    method:'POST',
    body:JSON.stringify(send_data),
    headers:{
       "Content-Type":'application/json'
    }
})
let data=await res.json()
// console.log(data)
// alert("Successful")
// 
console.log(res)
// console.log(data)

if(res.ok==true){
    alert("Successfully Logged In")
    location.href = "./index.html"
}
else{
    alert("Login Failed")
}
    }
    catch(err){
        console.log("err:",err)
    }
}
