/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function pairs(names) {
  // Your code goes here
  const pairs = []
  if (names == []) {
    
    return pairs
  }
  if (names == undefined) {
    return pairs
  }
  else{
    
    if (names.length %2 ===0 )
      {  
        // for (let index = 0; index < names.length/2; index++)

        while(names.length !== 0 )
        { 
          let random1 = names.getRandom();
          let random2 = names.getRandom();
          pairs.push([random1,random2])
        }
        return pairs
        // console.log(pairs(names))




      }


    else
      {
        // if names.length  is odd 
        for (let index = 0; index < (names.length/2 ) ; index++)
        { 

          let random1 = names.getRandom();
          let random2 = names.getRandom();
          pairs.push([random1,random2]);
        } 
        for (let index = 0; index < (names.length%2 ) ; index++)
        { 
          let random1 = names.getRandom();
          let random2 = names.getRandom();
          pairs.push([random1,random2]);
        }  
          pairs.push([names.pop()])

        return pairs


      } 



  } 




}

module.exports = pairs;

/**********************************************
* READ ME!!!!
*
* We've included this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}

console.log(pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein', 'Lailz', 'Mr Potato']));
