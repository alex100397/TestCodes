//Recursion - Function calls itself to solve smaller version of the same problem.

//Uses
// - Problem can be broken into sub problems
// - Trees and graphs
// - Backtracking, DP, Divide and conquer

//Common mistakes
// - Missing base case - stack overflow
// - Not simplifying the input - Never reaches base case
// - Too deep recursion - Larger input
// - Keeping in mind the time complexity

//Recursion n to 1;

// const print = (num) => {
//     if(num < 1) return;
//     console.log(num);
//     print(--num);
// }

// print(5);

//Recursion 1 to n;

let n = 5;
const print1 = (x) => {
    if(x > n) return; 
    console.log(x);
    print1(++x);
}
print1(1);