const form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
   e.preventDefault(); 
   let seperate = '';
   let inputValue = numberInput.value;
   if(inputValue<0){
    document.getElementById('resultNumber').innerText = 'Enter a positive number';
   } else if(inputValue % 2 == 0){
       for(let i = 1; i<4; i++){
         inputValue = +inputValue + 2;
         seperate+=inputValue + ", ";
         // console.log(inputValue);
       }
       document.getElementById('resultNumber').innerText = seperate;
       
   } else{
   //  console.log('this is odd number');
      for(let i = 1; i<4; i++){
         inputValue = +inputValue+2;
         seperate+=inputValue + ", ";
         // console.log(inputValue);
      }
      document.getElementById('resultNumber').innerText = seperate;
   }
})