/*17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar sonini va 2-argument sifatida uch ochkolik gollar sonini qabul qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang*/

// let firstArg = +prompt("2 ochkolik gollar sonini kiriting:");

// let secondArg = +prompt("3 ochkolik gollar sonini kiriting: ");

// function points(x,y){
//     let overal = x*2 + y*3;
//     return overal;
// }

// console.log("Umumiy hisob: ",points(firstArg,secondArg));

///////////////////////////////////////////////////////////////////////////////////////////



/*18.Quyidagi namunalarni kuzatgan holda unga muvofiq funksiya yasang.
Namuna:
nameString("Mubashir")=> "MubashirEdabit"
nameString("Matt")=> "MattEdabit"
nameString("javaScript")=> "javaScriptEdabit*/ 


// let word = prompt("So'z yozing");

// function nameString(n){
//    let sentence = n + "Edabit";
//    return sentence;
// }

// console.log(nameString(word));


// ////////////////////////////////////////////////////////////////////////////////////////


/*19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya yasang.*/ 

// let firstNumber = +prompt(" 1-sondi kiriting");
// let secondNumber = +prompt("2-sondi kiriting");

// function moreThanHundred(n,l){
//     if(n+l<100){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(moreThanHundred(firstNumber,secondNumber));

///////////////////////////////////////////////////////////////////////////////////////////


/* 20 Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
Namuna:
printArray(1)=> [1]
printArray(3)=> [1, 2, 3]
printArray(6)=> [1, 2, 3, 4, 5, 6*/


// function printArray(n){
//     let arr = [];
//     for(i=1;i<=n;i++){
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(printArray(5));

///////////////////////////////////////////////////////////////////////////////////////////


/*21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi argument sifatida tovuqlar sonini, ikkinchi argument sifatida qo’ylarni va uchinchi argument sifatida sigirlarning sonini qabul qiladi.*/

// let сhicken = +prompt("Tovuqlar sonini kiriting");
// let cows = +prompt("Tovuqlar sonini kiriting");
// let sheeps = +prompt("Tovuqlar sonini kiriting");

// function hooves(x,y,z){
//      let result  = x*2 + (y + z)*4;
//      return result;
// }

// console.log(hooves(сhicken,cows,sheeps));

///////////////////////////////////////////////////////////////////////////////////////////


/*FizzBuzz*/

// let number = +prompt("Son kiriting");

// function fizzBuzz(n){
//     let result = "";
//     for(i=1;i<=n;i++){
//         if(i%5===0 && i%3===0){
//            result += "FizzBuzz\n";
//         } else if(i%3===0){
//             result += "Fizz\n";
//         }else if(i%5===0){
//             result += "Buzz\n ";
//         }else{
//             result += i + " bo'linmaydi \n";
//         }
//     }
//     return result;
// }
// console.log(fizzBuzz(number));

//////////////////////////////////////////////////////////////////////////////////////////



/* Fibonachi sonlari(Recursiv funksiya bilan ishlash)*/

let fib = +prompt("Fibonachi son chiqrish uchun son kriting");

function fibadachi(n){
  if(n<0){
    return "Son 0dan kotta bo'lish kerak"
  }else if(n==0){
    return 0;
  }else if(n==1){
    return 1;
  }else{
    return fibadachi(n-1) + fibadachi(n-2);
  }
}

console.log(fibadachi(fib));
  
 



