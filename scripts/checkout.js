document.getElementById('gadget_btn').addEventListener('click',apply);

function apply(){
    console.log('function check')
    let code_text=document.querySelector('.code_text').value;
    console.log(code_text.length)
    if (code_text===""){
        alert("Please enter correct coupon code")
    }else if (code_text.length<6){
        alert('Coupen code must contain 6 letter aleast')
    }else{
        alert('Coupen applied');
        
    }
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
        document.getElementById('GrandTotal').innerText=((+(bag))+(+(bag1)))
    }
    
    
    // console.log(GrandTotal)
}