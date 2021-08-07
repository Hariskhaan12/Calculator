

function getHistory(){
    return document.getElementById("history-value").innerText;
}
function setHistory(num){
    document.getElementById("history-value").innerText=num;
}
var data;
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function setOutput(num){
    document.getElementById("output-value").innerText=num;
}
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
{
    operator[i].addEventListener("click",function(){

        if(this.innerText=="AC")
       {
           setOutput("");
           setHistory("");
       }
      else if(this.innerText=="C")
       {
           var num=getOutput().toString();
           num=num.substr(0,num.length-1);
           setOutput(num);
       }
       else{
        var output=getOutput();
        var history=getHistory();
        if(output=="" && history!=""){
            if(isNaN(history[history.length-1])){
                history= history.substr(0,history.length-1);
            }
        }
        if(output!="" || history!=""){
            history=history+output;
            if(this.innerText=="="){
                var result=eval(history);
                setOutput(result);
                setHistory("");
            }
            else{
                history=history+this.innerText;
                setHistory(history);
                setOutput("");
            }
        }
    }        
    });
}
var number=document.getElementsByClassName("btn");
for(var i=0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        data=getOutput();
        if(this.innerText=='.' && data.includes('.')==true)
        {
            return
        }
        else{
        data=data+this.innerText;
        setOutput(data);
        }
    });
}