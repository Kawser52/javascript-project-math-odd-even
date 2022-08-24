const form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
   e.preventDefault(); 
   let seperate = '';
   let searchKeword = numberInput.value;
   console.log(searchKeword)
   if(searchKeword<0){
    console.log("Please give postive number")
   } else if(searchKeword % 2 == 0){
      console.log('this is even number');
       for(let i = 1; i<4; i++){
         searchKeword = +searchKeword+2;
         seperate+=searchKeword + ", ";
         console.log(searchKeword);
       }
       document.getElementById('kita').innerText = seperate;
       
   } else{
    console.log('this is odd number');
      for(let i = 1; i<4; i++){
         searchKeword = +searchKeword+2;
         seperate+=searchKeword + ", ";
         console.log(searchKeword);
      }
      document.getElementById('kita').innerText = seperate;
   }
})