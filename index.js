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

   
  


    function productFib(num){
      var a = 0
      var b = 1
   
    while (a * b <= num) {
      console.log(a)
      console.log(b)
      a = a + b
      b = a + b
    }
    if (a * b === num) {
      // console.log(a, b, true)
    } else {
      // console.log(a, b, false)
    }

  }
  productFib(714)



    
    

    // n =  
    // F[n] * F[n+1] = prod

    
    
    
    
    // var Fx2 = F.map(function(num) {
    //   return num * num;
    // });
  
    
    

   
   