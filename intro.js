console.log("Introduction to JavaScript");

//Create fizzBuzz problem
    for(var i = 1; i < 100; i++)
    {
        if (i % 3 === 0) {
            console.log("Fizz");
        }
        if (i % 5 === 0){
            console.log("Buzz");
        }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else{
            console.log(i);
        }
    }
    
     //Create function countB's
    function countBs(word)
    {
       var charToSearch = 'B';
       
       var count = 0;
       
       for(var i = 0; i < word.length; i++)
    {
        if(word[i] == charToSearch)
        {
            count++;
        }
    }
       
       return console.log("There are " + count + " Bs " + "in " + word);
    }
    
       //Call countB function
    countBs("BBQ");
    
    
   function countChar(word, character) {
        var count = 0;
  for (var i = 0; i < word.length; i++) {
         if (word.charAt(i) == character) {
        count++;
     }
  }
  return console.log("There are " + count + " occurences of the letter " + character + " in " + word);
}
countChar('Rain','a');
    