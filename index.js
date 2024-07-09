const elements=document.querySelectorAll("button");
const inputFieldEl=document.getElementById("result");
intstatus=false;
for(let i=0;i<elements.length;i++)
{
    elements[i].addEventListener("click",function(){
        const buttonvalue=elements[i].textContent;
		if(buttonvalue=="C")
		{
			clearresult();
		}
		else if(buttonvalue=="=")
		{
			calculateresult()
		}
		else if(buttonvalue=="DEL")
		{
			deleteresult();
		}
		else if(buttonvalue=="sin"){
			inputFieldEl.value=Math.sin(inputFieldEl.value);
		}
		else if(buttonvalue=="cos"){
			inputFieldEl.value=Math.cos(inputFieldEl.value);
		}
		else if(buttonvalue=="tan"){
			inputFieldEl.value=Math.tan(inputFieldEl.value);
		}
		else if(buttonvalue=="log"){
			inputFieldEl.value=Math.log10(inputFieldEl.value);
		}
		else if(buttonvalue=="ln"){
			inputFieldEl.value=Math.LN10(inputFieldEl.value);
		}
		else if(buttonvalue=="x^2"){
			inputFieldEl.value=Math.pow(inputFieldEl.value,2);
		}
		else if(buttonvalue=="π"){
			inputFieldEl.value+=Math.PI;
		}
		
		else if(buttonvalue=="|x|"){
			inputFieldEl.value=Math.abs(inputFieldEl.value);
		}
		
		else if(buttonvalue=="√"){
			inputFieldEl.value=Math.sqrt(inputFieldEl.value);
		}
		else if(buttonvalue=="x!")
		{
			fact();
		}
		else{
			addvalue(buttonvalue);
		}
    });
}
function clearresult()
{
	inputFieldEl.value="";
}
function calculateresult()
{
	inputFieldEl.value=eval(inputFieldEl.value);	
}

function deleteresult()
{
	inputFieldEl.value=inputFieldEl.value.toString().slice(0,-1);
}

function addvalue(buttonvalue)
{
	inputFieldEl.value+=buttonvalue;
}

function fact()
{
  let i,num,f;
  f=1;
  num=inputFieldEl.value;
  for(i=1;i<=num;i++)
  {
	f=f*i;
  }
  inputFieldEl.value=f;
}