let firstvalue=''
let lastvalue=''
let operator=''
let Results=''
let displayvalue=document.getElementById('calculator')

function Values(a){
    if(operator.length===0){
        firstvalue+=a
        
        displayvalue.value=firstvalue
    }
    else{
        lastvalue+=a
        displayvalue.value+=a
    }
    
}

function opt(a){
    
    operator=a
    displayvalue.value+=a
    
}

function Result(){
    if(operator==='+'){
        Results=Number(firstvalue)+Number(lastvalue)
    }
    else if(operator==='-'){
        Results=Number(firstvalue)-Number(lastvalue)
    }
    
    else if(operator==='*'){
        Results=Number(firstvalue)*Number(lastvalue)
    }

    else if(operator==='/'){
        Results=Number(firstvalue)/Number(lastvalue)
    }

    displayvalue.value=Results

    firstvalue=Results;
    operator=''
    lastvalue=''


}

function Erage(){
   firstvalue=''
   lastvalue=''
    operator=''
    displayvalue.value=0
}


function ClearLast(){
    displayvalue.value = displayvalue.value.slice(0, -1)
}