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
var number = []
var sum = 0

function sumDigPow(a, b) {
  for (var i=a; i<=b; i++) {
    var string = i.toString()
    var array = string.split("")
    var numbers = array.map(Number)
    
    for (var j=0; j<numbers.length; j++){
      sum = sum + (numbers[j]**[j+1])
    }
    if (sum === i) {
      number.push(sum)
    }
  }
    console.log(number) 


}

sumDigPow(90, 120)