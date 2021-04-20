// var QuestionsArray = [
//   {
//     question: 'Entomology is the science that studies:',
//     answers: [
//       'Behavior of human beings',
//       'Insects',
//       'The origin and history of technical and scientific terms',
//       'The formation of rocks'
//     ],
//     correctAnswer: 1,
//   },
//   {
//     question: 'Galileo was an Italian astronomer who:',
//     answers: [
//       'developed the telescope',
//       'discovered four satellites of Jupiter',
//       'discovered that the movement of pendulum produces a regular time measurement',
//       'All of the above'
//     ],
//     correctAnswer: 3,
//   },
//   {
//     question: 'Exposure to sunlight helps a person improve his health because:',
//     answers: [
//       'the infrared light kills bacteria in the body',
//       'resistance power increases',
//       'the pigment cells in the skin get stimulated and produce a healthy tan',
//       'the ultraviolet rays convert skin oil into Vitamin D'
//     ],
//     correctAnswer: 3,
//   },
//   {
//     question: '\'OS\' computer abbreviation usually means:',
//     answers: [
//       'Order of Significance',
//       'Open Software',
//       'Operating System',
//       'Optical Sensor'
//     ],
//     correctAnswer: 2,
//   },
//   {
//     question: 'Which scientist discovered the radioactive element radium?',
//     answers: [
//       'Isaac Newton',
//       'Albert Einstein',
//       'Benjamin Franklin',
//       'Marie Curie'
//     ],
//     correctAnswer: 3,
//   },
//   {
//     question: 'The great Victoria Desert is located in:',
//     answers: [
//       'Canada',
//       'West Africa',
//       'Australia',
//       'North America'
//     ],
//     correctAnswer: 2,
//   },
//   {
//     question: 'Euclid was',
//     answers: [
//       'Greek mathematician',
//       'Contributor to the use of deductive principles of logic as the basis of geometry',
//       'Propounded the geometrical theorems',
//       'All of the above'
//     ],
//     correctAnswer: 3,
//   },
//   {
//     question: 'Who invented Dynamite?',
//     answers: [
//       'Alfred B. Nobel',
//       'Sir Alexander Graham Bell',
//       'Benjamin Franklin',
//       'Thomas Alva Edison'
   
//     ],
//     correctAnswer: 0,
//   }
// ];



function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  a = a+ b;
  b = a-b;
  a = a-b;
  console.log('after swap: ','a: ', a, 'b: ', b);  
}

console.log(swapNumb(5, 6));
  // = before swap:  a:  2 b:  3
  // = after swap:  a:  3 b:  2 


  function reverse(str){
    var rtnStr = '';
    for(var i = str.length-1; i>=0;i--){
      rtnStr +=str[i];
    }
    return rtnStr;
  }
  

  console.log(reverse('salam'))


    
// var arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];
// function showSpiral(array) {
//   let dir = true;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (dir) {
//         console.log("  ".repeat(j) + array[i][j]);
//       } else {
//         console.log("  ".repeat(5 - j) + array[i][j]);
//       }
//     }
//     dir = !dir;
//   }
// }
// console.log(showSpiral(arr));


// let arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];
// const m = arr.length;
// const k = m * m;
// let result = [];
// for (let i = 0; i < k; i++) {
//   let z = Math.floor(i / m);
//   let t = z % 2 == 0 ? i % m : m - 1 - (i % m);
//   result[i] = arr[z][t];
// }
// console.log(result);


// function getmeARandomNumber() {
//   return Math.floor(Math.random() * 100);
// }

// function findTheDifferentNumber(first_array, second_array) {
//   let count =
//     first_array.length > second_array.length
//       ? first_array.length
//       : second_array.length;
//   let sum_one = 0;
//   let sum_two = 0;
//   for (let i = 0; i < count; i++) {
//     sum_one += first_array[i] ? first_array[i] : 0;
//     sum_two += second_array[i] ? second_array[i] : 0;
//   }
//   let result = Math.abs(sum_one - sum_two);
//   console.log("The different number is: " + result);
//   console.log("The first array is: " + first_array.join(", "));
//   console.log("The second array is: " + second_array.join(", "));
// }

// let arr_one = [];
// let arr_two = [];
// let rand_point_in_array = Math.floor(Math.random() * 5);
// //just to populate numbers
// for (let i = 0; i < 5; i++) {
//   let num = getmeARandomNumber();
//   arr_one.push(num);
//   if (i !== rand_point_in_array) {
//     arr_two.push(num);
//   }
// }

// console.log(findTheDifferentNumber(arr_one, arr_two));


// function findDifferentNumber(){
//   let diff_nums=[];
//   let arr_one =[9,8,7,6,5,3];
//   let arr_two =[6,5,9,7];
//   let count = 
//      arr_one.length > arr_two.length 
//        ? arr_one.length
//        : arr_two.length;
//   console.log(count);
//   let summary_arr_1 = 0;
//   let summary_arr_2 =0;

//   for(let i=0; i<count;i++){
//     summary_arr_1 +=  arr_one[i] ? arr_one[i] : 0;
//     summary_arr_2 +=  arr_two[i] ? arr_two[i] : 0;
//   }
//   console.log(count)
//   console.log(arr_one)
//   console.log(summary_arr_2)
//   let result = Math.abs(summary_arr_1 - summary_arr_2);
//   console.log('Diiferent number is:' + result);
// }

// console.log(findDifferentNumber());

// function findDifferentNumber(){
//   var diff_nums=[];
//   let arr_one =[9,8,7,6,5,10];
//   let arr_two =[6,5,9,7];
//   let a = [];
  
//   for(let i=0; i < arr_one.length; i++){
//       a[arr_one[i]] = arr_one[i];
//   }
  
//   for(let j = 0; j < arr_two.length; j++){
//       if(a[arr_two[j]]){
//           delete a[arr_two[j]]
//       }
//   }
//   return a;
// }

// console.log(findDifferentNumber());


// function findDifferentNumber(){
//         var diff = [];
//         let arr_one =[8,7,6,5,3];
//         let arr_two =[6,5,9,7,1];
//         let a = [];


//         for (let i = 0; i < arr_one.length; i++) {
//             a[arr_one[i]] = true;
//         }

//         for (let i = 0; i < arr_two.length; i++) {
//             if (a[arr_two[i]]) {
//                 delete a[arr_two[i]];
//             } else {
//                 a[arr_two[i]] = true;
//             }
//         }

//         for (var k in a) {
//             diff.push(k);
//         }

//         return diff;
//     }


// const m = arr.length;
// console.log(m)
function getCol(matrix, col){
  var column = [];
  for(var i=0; i<matrix.length; i++){
     column.push(matrix[i][col]);
  }
  return column; // return column data..
}



var array =  [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]; //..your 3x20 array
console.log(getCol(array, 3));
// const count = m * m;
// let result = [];
// for (let i = 0; i < count; i++) {
//   let z = Math.floor(i / m);
//   let t = z % 2 == 0 ? i % m : m - 1 - (i % m);
//   result[i] = arr[z][t];
// }
// console.log(result);