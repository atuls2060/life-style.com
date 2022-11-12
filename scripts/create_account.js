const post_data=async()=>{
    try{
let id=document.querySelector("#id").value
let name1=document.querySelector("#name").value
let email=document.querySelector("#email").value
let password=document.querySelector("#password").value
let data={
    id,
    name:name1,
    email,
    password
}
let res=await fetch('https://the-gadget-factory-backend.herokuapp.com/users',
{
method:'POST',
body:JSON.stringify(data),
headers:{
    'Content-Type':'application/json'
}
})
alert("Account is created")
}
catch(err){
    console.log("err:",err)
}
}
let cb=document.querySelector("#c_box").checked
if(cb==true){
    console.log("true")
}