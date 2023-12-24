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

    firstvalue=Results.toString();
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

    if(operator.length===0){
        firstvalue=firstvalue.substring(firstvalue.length-1,-1)
    displayvalue.value = firstvalue
    }else if(operator.length>0 && lastvalue.length===0){
        operator=operator.substring(operator.length-1,-1)
    displayvalue.value = firstvalue+operator


    }else if(operator.length>0 && lastvalue.length>0){
        lastvalue=lastvalue.substring(lastvalue.length-1,-1)
        displayvalue.value=firstvalue+operator+lastvalue

    }


}