function fibonacciGenerator(n) {
  let fibboList = [0, 1];
  
  if (n === 1) {
    return fibboList.slice(0,1);

  } else if (n === 2) {
      return fibboList.slice(0,2);
    
  } else {
      for (let num = 0; num < n - 2; num++) {
        let prevNum = fibboList[num] + fibboList[num + 1];
        fibboList.push(prevNum);      
      } 
      return fibboList
}
  }

let num = 10;
let list = fibonacciGenerator(num);
console.log(list);

let count = 0;
let start = 0;
let end = list[num -1];
let check = 8;
let notIn = true

while (start < end) {
    if (start != check) {
        count = count + 1;
        start = list[count];
    } else {
        console.log("o número está na lista");
        start = end;
        notIn = false;
}
  }

if (notIn === true) {
  console.log("o número não está na lista")
}