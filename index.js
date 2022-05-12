// Bit Counting 

// function play(num) {
//   var number = num.toString(2);
//   var sNumber = number.toString()
//   var split = sNumber.split("")
//   var array = split.map(Number)
//   console.log(array.reduce((a, b) => a + b, 0))
  
// };

// play(32)
// -----------------------------------------------------------------------------------------
// Descending Order

// function play1(num) {
//     var number =num.toString()
//     var array = number.split("")
//     var map = array.map(Number)
//     var result = map.sort((a, b) => b - a)
//     var total = result.join("")
//     var results = Number(total)
//     console.log(results)
// } 

// play1(282457)

// -------------------------------------------------------------------------------------------

// Maskify

// function maskify (str) {
//     if (str.length <= 4) {
//         return str
//     } else {
//         var substring = str.substring(str.length - 4, str.length)
//         var substring1 = str.substring(0, str.length - 4)
//         var replace = substring1.replace(/./g,"#") + substring
//         console.log(replace)
// }
// }

// maskify ("olksiaoslsndzp")

// -----------------------------------------------------------------------------------------------------------------

// DIGITAL ROOT

// function digital_root(n) {
//     var string = n.toString()
//     var split = string.split("")
//     var map = split.map(Number)
//     var sum = map.reduce((a, b) => a + b, 0)
    

//      while (sum > 9) {
//         var string1 = sum.toString()
//         var split1 = string1.split("")
//         var map1 = split1.map(Number)
//         var sum1 = map1.reduce((a, b) => a + b, 0)
//         var sum = sum1
//     } 
//     console.log(sum)
// }

// digital_root(123212333333333)

// -------------------------------------------------------------------------------
// squareDigits.

// function squareDigits(num){
//     var string = num.toString()
//     var split = string.split("")
//     var map = split.map(Number)
//     var square = map.map(function(num) {
//         return num * num;
//       });
//     var total = square.join("")
//     var totalNumbers = Number(total)
//     return totalNumbers
//   }

//   squareDigits(2345)
  // -------------------------------------------------------------------
  // Fibonacci numbers

   
  
  // function productFib(num){

   
   
  // let fib = [0,1]
  

  //  while ((fib[fib.length -2]) * (fib[fib.length -1]) < num) {
  //     let fibNumbers = (fib[fib.length -2]) +  (fib[fib.length -1])
  //     fib = [...fib, fibNumbers]
  //  }
   

  //  return [(fib[fib.length -2]), (fib[fib.length -1]), (fib[fib.length -2]) *  (fib[fib.length -1]) === num]

  // }

  // productFib(714)


// -------------------------------------------------------------------------------------------------------------------
  // function isPrime(num) {
  //   let numbers = Array.from(Array(num).keys())
  //   numbers.splice(0, 2)
  //   let prime = true
  //   numbers.forEach(number =>  {
  //     if (num % number === 0 && num !== number) {
  //       prime = false
  //     }
  //   })

  //   return prime && num > 1
  
  // }
  
  // isPrime(25)

// -------------------------------------------------------------------------------------------------------------------
  
  // function tribonacci(signature,n){
  //   let array = [...signature] 
  //   if (n === 0) {
  //     return []
  //   }

  //   if (n === 1) {
  //     return [(array[array.length -3])]
  //   }

  //   if (n === 2) {
  //     return [(array[array.length -3]), (array[array.length -2]) ]
  //   }
  //   for (let i=3; i<n; i++) {
  //     let tri = (array[array.length -3]) +  (array[array.length -2]) + (array[array.length -1])
  //     array = [...array, tri]
  //   }
  //   return(array)
  // }

   
  // tribonacci([1,1,1],10)

// ---------------------------------------------------------------------------------------------------------------------------

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// Write Number in Expanded Form

// function expandedForm(num) {
//   var index = 0
//   var bracket = []
//   var string = num.toString()
//   var array = string.split("")
//   var numbers = array.map(Number)
//   var reverse = numbers.reverse()

//   reverse.forEach(number => {
//     var calc = number * 10**index
//     index = index + 1
//     if (calc !== 0) {
//       bracket.push(calc)
//     }
//   });

//   var result = bracket.reverse()
//   var total = result.join(" + ")

//   return (total)
  
//   }
  
  
//   expandedForm(10342)

// ------------------------------------------------------------------------------------
  
// function bitsBattle(num) {
//   var arrayEven = []
//   var arrayOdd = []
//   var even = num.filter(even => even % 2 === 0 )
//   var odd = num.filter(odd => odd % 2 !== 0)
//   even.forEach(number => {
//     var bit = number.toString(2)
//     arrayEven.push(bit)
//   });
//   odd.forEach(number => {
//     var bit = number.toString(2)
//     arrayOdd.push(bit)
//   });

//   var joinEven = arrayEven.join("")
//   var joinOdd = arrayOdd.join("")

//   var countEven = 0
//   var countOdd = 0
//   for (var i=0; i< joinEven.length; i++) {
//     if (joinEven[i] === '0') {
//       countEven++
//     }
//   }

//   for (var i=0; i< joinOdd.length; i++) {
//     if (joinOdd[i] === '1') {
//       countOdd++
//     }
// }

// console.log(countEven)
// console.log(countOdd)

// if (countEven > countOdd) {
//   console.log ('evens wins')
// } else if (countOdd > countEven){
//   console.log ('odds wins')
// } else {
//   console.log ('tie')
// }

// }

// bitsBattle([3, 8, 22, 15, 78])

// -------------------------------------------------------------------------------
// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// var number = []
// var sum = 0

// function sumDigPow(a, b) {
//   for (var i=a; i<=b; i++) {
//     var string = i.toString()
//     var array = string.split("")
//     var numbers = array.map(Number)
//     console.log(numbers)

// var sum = 0
    
//     for (var j=0; j<numbers.length; j++){
//       sum = sum + (numbers[j]**[j+1])
//     }
//     if (sum === i) {
//       number.push(sum)
//     }
//   }
//     console.log(number) 


// }

// sumDigPow(80, 100)

// -------------------------------------------------------------------------------------

// function isAnagram (test, original) {
//   if (test.length === original.length) {
//     var test1 = test.toLowerCase()
//     var original1 = original.toLowerCase()
//     var split1 = test1.split("")
//     var split2 = original1.split("")
//     var sort1 = split1.sort()
//     var sort2 = split2.sort()
//     var join1 = sort1.join()
//     var join2 = sort2.join()

//     if (join1===join2) {
//       return(true) 
//     } else {
//       return(false);
//     }
//   } else {
//     return(false);
//   }
// }
  
// isAnagram ("test", "sett")
// -------------------------------------------------------------------------------

// var array = []
// a = 0
// function josephusSurvivor(n,k){
  

//   for (var i = 1; i <= n; i++) {
//     array.push(i)
//   }
  
//   while (array.length > 1) {
//     a = (a + k - 1) % array.length;
//     array.splice(a, 1);
//   }
//   console.log(array[0])
// }

// josephusSurvivor(7,3)

// --------------------------------------------------------------------------------

// RegexPasswordValidation = (password) => {
//   const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password)
  
// }

// RegexPasswordValidation ("eee")

// --------------------------------------
// var array = []
// var newArray = []
// var squareArray = []

// function doneOrNot(board){



// // LIGNES 

//   for (var k=0; k<9; k++) {
//     var myArray = board[k]
//     if (myArray.length === new Set(myArray).size) {
    
//         for (var j=0; j<9; j++){ 
//           array.push(board[j][k])
          
//         }  
      
//     } else {
//       console.log("bad");
//     }
    
//   }

//   // COLONNES 

//   for (var i=0; i<9; i++) {
//     var na = array.slice(0, 9)
//     newArray.push(na)
//     let sum = newArray[i].reduce((a, b) => a + b)
//     if (sum !== 45) {
//       console.log("bad");
//     }

//   }
    

//   if (myArray.length === new Set(myArray).size) {
//     console.log("good");
//   } else {
//     console.log("bad");
//   }


// }
// doneOrNot(
// [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]);

// -----------------------------------------------------------------------------------
// function humanReadable(seconds) {
//   const oneMinute = 60
//   const oneHour = oneMinute * 60
//   const H = ('0' + Math.floor(seconds / oneHour))
//   const M = ('0' + Math.floor(seconds / oneMinute) % 60)
//   const S = ('0' + seconds % 60).slice(-2)
//   console.log(`${H}:${M}:${S}`); 
// }



// humanReadable(25)
// ----------------------------------------------------




// function pell(n) {
//   var array = [0, 1]
//   while (array.length <= n) {
//     var calc = 2 * (array[array.length - 1]) + (array[array.length-2])
//     array.push(calc)
//   }
//   console.log(array[array.length-1]); 

// }

// pell(4)

// -----------------------------------------
// var array = []
// var count = 0
// function findReverseNumber(n) {
// while (array.length < n) {
//   var split = count.toString().split('').reverse().join('')
//   if (Number(split) === count) {
//     array.push(count)
//  }
//  count ++
// }  
// console.log(array[array.length -1]);
// }

// findReverseNumber(100)

// --------------------------------------------
// var array = []
// function solution(number){
//   for (var i=0; i<number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       array.push(i)

//     }
//   }
  
// console.log(array.reduce((a, b) => a + b, 0));
// }

// solution(200)

// ----------------------------------------------


// function arrayDiff(a, b) {
//   b.forEach(element => {
//     a = a.filter(num => num !== element)
//   });
//   return a
// }

// arrayDiff([2, 6, 6, 7],[2, 6, 7]) 

// ----------------------------------




// function partsSums(ls) {
//   var array = []
//   var count = 0

//   ls.forEach(element => {
//     const newArray = ls.slice(count, ls.length)
//     const calc = newArray.reduce((a, b) => a + b, 0)
//     array.push(calc)
//     count ++ 
//   });
//   array.push(0)
//   console.log(array);
// }

// partsSums ([1, 2, 3, 4, 5, 6])


// function partsSums(ls) {
//   var array = []
//   while (ls.length > 0) {
//     const calc = ls.reduce((a, b) => a + b, 0)
//     array.push(calc)
//     ls.splice(0, 1)
//   }
//   array.push(0)
//   console.log(array);
// }

// partsSums ([1, 2, 3, 4, 5, 6])

// ----------------------------------------------------

// function findOdd(A) {
//   var array = []
//   A.forEach(element => {
//    const filter = A.filter(num => num === element )
//    if (filter.length % 2 !== 0) {
//     array.push(filter[0])
//   }
//   });
//   console.log(array[0]);
// }
// findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])

// --------------------------------------------------------------------

// function withdraw(n) {
//   let countA = 0
//   let countB = 0
//   let countC = 0
//   const result = []

//  while (n > 0) {
//     if (n % 20 === 0) {
//         n = n - 20
//         countC++
//     } else {
//       if (n >= 50) {
//         n = n - 50
//         countB++
//       } else {
//         n = n - 20
//         countC++
//       }
//     }
//     if (countB > 1) {
//       countA++
//       countB--
//     }
//     if (countC > 4) {
//       countA++
//       countC = 0
//     }
//  }
//  result.push(countA)
//  result.push(countB)
//  result.push(countC)
//  console.log(result);

// }

// withdraw(40);
// withdraw(250);
// withdraw(260);
// withdraw(230);
// withdraw(60);

// -----------------------------------------------------

// function solve (a, b){
//   if (b % a === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
//   };

//   solve(1000013,7187761)
// -------------------------------------------------------

// function numPrimorial(n){

//   var array = [2, 3, 5, 7]
//   var count = 11

//   if (array.length > n) {
//     while (array.length > n) {
//       array.splice(array.length -1, 1)
//     }
//   } else {
//     while (array.length < n) {
//       if (count % 2 !== 0 && count % 3 !== 0 && count % 5 !== 0 && count % 7 !== 0) {
//         array.push(count)
//         count ++
//       } else {
//         count ++
//       }
//     }
//   }
  
//   return array.reduce( (a, b) => a * b )

// }

// numPrimorial(3)


// function comparePowers(n1,n2){
//   const result1 = Math.pow(n1[0], n1[1]);
//   const result2 = Math.pow(n2[0], n2[1]);
//   if (result1 > result2) {
//     console.log(-1); 
//   } else if (result1 < result2) {
//     console.log(1); 
//   } else {
//     console.log(0); 
//   }
// }

// comparePowers([1,7],[1,8])

// function spinWords(string){
//   var array = []
//   var words = string.split(' ')
//   words.forEach(element => {
//     if (element.length > 4) {
//       const reverse = element.split('').reverse().join('')
//       array.push(reverse)
//     } else {
//       array.push(element)
//     }
//   });
//   return array.join(' ')
  
// }

// spinWords("Hey fellow warriors")


// function likes(names) {
//   if (names.length === 0) {
//     return('no one likes this');
//   } else if (names.length === 1) {
//     return(`${names[0]} likes this`);
//   } else if (names.length === 2) {
//     return(`${names[0]} and ${names[1]} like this`);
//   } else if (names.length === 3) {
//     return(`${names[0]}, ${names[1]} and ${names[2]} like this`);
//   } else {
//     return(`${names[0]}, ${names[1]} and ${names.length -2} others like this`);
//   }
// }

// likes(['Alex', 'Jacob', 'Mark', 'Max'])

//-------------------------------------------------------------------------------------------------------------------------------------

// function numberOfPairs(gloves) {
//   count = 0
//   const newArray = gloves.sort()

//   while (newArray.length > 0 ) {
//     if (newArray[0] === newArray[1]) {
//       newArray.splice(0, 2)
//       count ++
//     } else {
//       newArray.splice(0, 1)
//     }
//   }

  
//   return count

// }

    
// numberOfPairs(['red', 'red', 'green', 'green', 'green', 'red', 'red', 'red', 'yellow', 'yellow', 'yellow'])


// const moveZeros = (arr) => {
//   let arrayof0 = []


//   arr.forEach(element => {
//     if (element === 0) {
//       const index = arr.indexOf(element)
//       arr.splice(index, 1)
//       arrayof0.push(0)
//     }
//   });
//   console.log(arr.concat(arrayof0));
// }

//  moveZeros([1,2,0,1,0,1,0,3,0,1,"a","A","b"])

// function cakes(recipe, available) {

//     const recipeIngredients = Object.keys(recipe)

//     const availableFiltered = Object.fromEntries(
//     Object.entries(available).filter(([key]) => recipeIngredients.includes(key)
//     )
//     )
  
//     const availableIngredients = Object.keys(availableFiltered)

//     const orderedRecipe = Object.keys(recipe).sort().reduce(
//       (obj, key) => { 
//         obj[key] = recipe[key]; 
//         return obj;
//       }, 
//       {}
//     )

//     const orderedAvailable = Object.keys(availableFiltered).sort().reduce(
//       (obj, key) => { 
//         obj[key] = availableFiltered[key]; 
//         return obj;
//       }, 
//       {}
//     )

//     if (recipeIngredients.length === availableIngredients.length) {
//       let index = 0
//       let array = []
//       const recipeValues = Object.values(orderedRecipe)
//       const availableValues = Object.values(orderedAvailable)

//       availableValues.forEach(element => {
//         const quantity = Math.floor(element / recipeValues[index])
//         array.push(quantity)
//         index++
//       })

//       console.log(Math.min(...array))

//     } else {
//       console.log(0);
//     }
  
  
// }

// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, milk: 200, sugar: 1200, eggs: 5, lin : 2}); 


// function getCount(str) {
//   var vowelsCount = 0;
//   var voyel = ["a","e","i","o","u"]
//   var array = str.split("")
//   array.forEach(element => {
//   var a =  voyel.includes(element)
//   if (a) {
//     vowelsCount ++
//   }
//   })
//   console.log(vowelsCount);
// }

// getCount("abracadabra")

// function score( dice ) {
//   var count = 0
//   const counts = {};
//   dice.forEach((x) => {
//     counts[x] = (counts[x] || 0) + 1;
//   });
//   const newArray = Object.entries(counts);
//   newArray.forEach(element => {

//     if (Number(element[0]) === 1) {
//         const div = element[1] / 3
//         count = count + Math.floor(div) * 1000
//         const modulo = element[1] % 3
//         count = count + modulo * 100
//       }

//     if (Number(element[0]) === 5) {
//       const div = element[1] / 3
//         count = count + Math.floor(div) * 500
//         const modulo = element[1] % 3
//         count = count + modulo * 50
//     }

//     if (Number(element[0]) === 2 || Number(element[0]) === 3 || Number(element[0]) === 4 || Number(element[0]) === 6) {
//       const div = element[1] / 3
//       count = count + Math.floor(div) * element[0] * 100
//     }
    
//   })
//   console.log(count);
   
// }

// score([2, 4, 4, 5, 4])

// function validParentheses(parens) {
//   const parenthèses = parens.split('')
//   const firstItem = "("
//   const secondItem =")"
//   let countFI = 0
//   let countSI = 0

//   parenthèses.forEach(element => {
//     if (element === firstItem) {
//       countFI++
//     }
//     if (element === secondItem) {
//       countSI++
//     }
//   });

//   console.log(countFI, countSI);

//  if (countFI === countSI) {
//    console.log(true);
//  } else {
//    console.log(false);
//  }
 
// }

// validParentheses("(()()))(")


// function pigIt(str){
//   const array = []
//   const finalArray = []
//   const ponctuation = ['!', '?']
//   const reverse = str.split(' ').map(word => word.split(""))

  

//   reverse.forEach(element => {
    
//     const firstElement = element.shift()
//     element.push(firstElement)
//     array.push(element.join(''));
//   });

//   console.log(array);

  
//   array.forEach(element => {
//     const ponct = ponctuation.includes(element)
//     if (!ponct) {
//       element = element + 'ay'
//       finalArray.push(element);
//     } else {
//       finalArray.push(element);
//     }
    
//   });
//   return(finalArray.join(" "))
//   // console.log(finalArray.join(" "));
// }

// pigIt('Pig latin is cool !')

// function isDivisible(num){
//   let array = []
//   const num1 = num.splice(0,1)
//   const every = (element) => element === true
//   num.forEach(element => {
//     if(num1[0] % element === 0) {
//       array.push(true)
//     } else {
//       array.push(false)
//     }
//   });
//   return array.every(every);
  
// }

// isDivisible([8,4,2])

// function createPhoneNumber(numbers){
//   let array = []
//   const firstNumbers = numbers.splice(0, 3)
//   const part1 = String(firstNumbers.join(''))
//   const secondsNumbers = numbers.splice(0, 3)
//   const part2 = String(secondsNumbers.join(''))
//   const thirdsNumbers = numbers.splice(0, 4)
//   const part3 = String(thirdsNumbers.join(''))
//   array.push(`(${part1}) ${part2}-${part3}`)
//   return array[0]

// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])


// function roundToNext5(n){
//   if (n % 5 !== 0) {
//     if ( n < 0) {

//       console.log(n + (0 - (n % 5))); 
//     } else {
//       console.log(n + (5 - (n % 5)))
//     }
//   } else {
//   console.log(n);
//   }
// }

// roundToNext5(-1)

// function getHints(answer, guess) {
//   const result = {black:0, white:0}

//   answer.forEach((element, index) => {
//     if (element === guess[index]) {
//       result.black++
//     }
//     else if (guess.includes(element)) {
//       result.white++
//     }
//     else {
//       return null
//     }
//   });
//   console.log(result);
// }

// getHints([1, 2, 3, 4], [1, 3, 4, 2])