document.getElementById('gadget_btn').addEventListener('click',apply);

function apply(){
    console.log('function check')
    let code_text=document.querySelector('.code_text').value;
    console.log(code_text.length)
    if (code_text===""){
        alert("Please enter correct coupon code")
        
    }else if (code_text.length<6){
        alert('Coupen code must contain 6 letter aleast');
        
    }else{
        alert('Coupen applied');
        
    }
    document.querySelector('.code_text').value=null;
}


document.getElementById('checkbox_1').addEventListener('click',check);

var GrandTotal=document.getElementById('GrandTotal').innerText

function check(){
    console.log('function check')

    if (document.getElementById('checkbox_1').checked = true){
        let InsuranceTotal=document.getElementById('InsuranceTotal').innerText;
        document.getElementById('coupenapply').innerText=`Insurence amount :  ${InsuranceTotal}`

        console.log(InsuranceTotal)
        
        
        let bag="";
        let bag1="";
        
        for (let i=0;i<GrandTotal.length;i++){
            if (GrandTotal[i]!=="₹"){
                bag=bag+GrandTotal[i]
            }
        }
        for (let i=0;i<InsuranceTotal.length;i++){
            if (InsuranceTotal[i]!=="₹"){
                bag1=bag1+InsuranceTotal[i]
            }
        }
        let x=((+(bag))+(+(bag1)))
        document.getElementById('GrandTotal').innerText=`₹ ${x}`
    }
    
    
    // console.log(GrandTotal)
}

document.querySelector('.cancel').addEventListener('click',cancle);

function cancle(){
    event.preventDefault();
    console.log('function check')
    document.getElementById('AddrFirstName').value=null;
    document.getElementById('AddrLastName').value=null;
    document.getElementById('jbState').value=null;
    document.getElementById('jbStatee').value=null;
    document.getElementById('jbCity').value=null;
    document.getElementById('jbZipCode').value=null;
    document.getElementById('jbAddress1').value=null;
    document.getElementById('jbAddress2').value=null;
    document.getElementById('jbPhonenumber').value=null;
}

document.querySelector('.saves').addEventListener('click',save);

function save(){
    event.preventDefault();
    console.log('function check')
    let name=document.getElementById('AddrFirstName').value
    if (name==""){
        let container=document.querySelector('.popup');
        container.innerHTML=null;
        container.style.display="inline";

        let div=document.createElement('img');
        div.src='./image/wrong.jpeg';
        let h2=document.createElement('h2');
        h2.innerHTML=`Sorry!`;
        let p=document.createElement('p');
        p.innerText='Please enter details first. Thanks!'
        let button=document.createElement('button');
        button.innerText="OK"
        button.addEventListener('click',function(){
            ok();
        })


        container.append(div,h2,p,button)
    }else{
        let container=document.querySelector('.popup');
        container.innerHTML=null;
        container.style.display="inline";

        let div=document.createElement('img');
        div.src='./image/Tick image.png';
        let h2=document.createElement('h2');
        h2.innerHTML=`Thank You! ${name}`;
        let p=document.createElement('p');
        p.innerText='Your details has been successfully submitted. Thanks!'
        let button=document.createElement('button');
        button.innerText="OK"
        button.addEventListener('click',function(){
            ok();
        })


        container.append(div,h2,p,button)
    }
}



function ok(){
    event.preventDefault();
    let popup=document.querySelector('.popup');
    popup.style.display="none";

    document.getElementById('AddrFirstName').value=null;
    document.getElementById('AddrLastName').value=null;
    document.getElementById('jbState').value=null;
    document.getElementById('jbStatee').value=null;
    document.getElementById('jbCity').value=null;
    document.getElementById('jbZipCode').value=null;
    document.getElementById('jbAddress1').value=null;
    document.getElementById('jbAddress2').value=null;
    document.getElementById('jbPhonenumber').value=null;
}

document.getElementById('submitPay').addEventListener('click',pay);

function pay(){
    // console.log('function check')
    window.location.href='./payment.html'
}


