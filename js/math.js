const form = document.getElementById('form')
const error = document.getElementById('kita')
form.addEventListener('submit', (e)=>{
   e.preventDefault(); 
   error.innerText = '';
   const searchKeword = numberInput.value;
   console.log(searchKeword)
   
   if(searchKeword<0){
    console.log("Please give postive number");
    error.innerText = "Please Enter the positivie Number";
   } else if(searchKeword % 2 == 0){
      console.log('this is even number');
      searchKewordNext = +searchKeword + 2;
      serachNe = +searchKewordNext + 2;
      serachnewd = +serachNe + 2;
      console.log(searchKewordNext );
      console.log(serachNe );
      console.log(serachnewd );
      error.innerText = searchKewordNext.toString();
   } else{
    console.log('this is odd number');
      searchKewordNext = +searchKeword + 2;
      serachNe = +searchKewordNext + 2;
      serachnewd = +serachNe + 2;
      console.log(searchKewordNext );
      console.log(serachNe );
      console.log(serachnewd );
      error.innerText = searchKewordNext.toString();
   }
})