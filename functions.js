function stringLength (string){
  if(string.length >=1 && string.length <=10){
    return string.length
  }else{
  throw new Error('The string length must be between 1 and 10');   
  }
}

function reverseString(string) {
  const array = [...string];
  let reversed = '';
  for(let i=array.length-1; i>=0; i-=1){
    reversed+=array[i];
  }
  return reversed;  
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

module.exports= {stringLength, reverseString, capitalize};

