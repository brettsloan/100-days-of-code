//challenge 1 (medium)                                                                          
//https://edabit.com/challenge/hzxN9bAebBPNqdQto                                                
//Write a function redundant that takes in a string str and returns a function that returns str. 
    function redundant(str) {                                                                   
        console.log(str);                                                                        
        return function redundancy() {                                                          
            return str;                                                                         
        }                                                                                       
    }                                                                                           
    redundant("Take this string and return a function that returns this string");               
    //Completed challenge!                                                                      
    //Others used short hand notation which I should be learning as well so noted below         
    const redundant = str => () => str; //top voted solution                                    
                                                                                                
    //breakdown (personal notes)                                                                
    const //like 'var' but cannot be reassinged; Constant                                       
    redundant = str //function name 'redundant' and  '= str' is telling us it's parameters 'str'
    => () //'=>' is a 'return' function written shorthand. Ex: 'return function()' (See line 8) 
    => () => str; //a return function returning a function that returns a string                
                                                                                                
    //my example                                                                                
    const age = num => "my age is " + num;                                                      
    age(27);                                                                                    
//----------------------------------------------------------------------------------------------


//Challenge 2 (very easy)                                                                          
//https://edabit.com/challenge/8q54MKnRrm89pSLmW                                               
//Write a function that takes an integer minutes and converts it to seconds.                    
    const convert = minutes => minutes * 60;                                                        
//Completed challenge!                                                                          
//Using full syntax
    function convert(minutes) {
        return minutes * 60;
    }
//-----------------------------------------------------------------------------------------------

//Challenge 3 (very easy)
//https://edabit.com/challenge/3CaszbdZYGN4otQD8
//Write a function that takes the base and height of a triangle and return its area.
    const triArea = (base, height) => (base * height) / 2; //multiple arrow function parameters go inside brackets. See lines 13 and 30 vs 41.
//Completed challenge!
//Using full syntax
    function a(base, height) {
        return (base * height) / 2;
    }
//------------------------------------------------------------------------------------------------

//Challenge 4 (very easy)
//https://edabit.com/challenge/NAQhEoxbofPidLxm9
//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
    const addition = num => num + 1;
//Completed challenge!
//Using full syntax
    function addition(num) {
        return ++num //num = num + 1
    }
//-------------------------------------------------------------------------------------------------

//Challenge 5 (back to medium) I hadn't realized it went back down to very easy 
//https://edabit.com/challenge/PXau3Fzk8GXgF6oRQ
//Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.
    function solveForExp(a, b) {
        var a = Math.log2(a); //Math.log2 = Math.log(x) / Math.log(2). if 'a' is < 0, value of Math.log2 is always NaN.
        var b = Math.log2(b);
        return Math.round(b / a);
    }
//Completed Challenge!
//This one was a lot more difficult. Javascripting logic was easily there. Knowledge of Math was pretty much there. Needed to learn how to put into JS
//Learned about Math.log2 but there's a lot more Math functions that I should study.
//Other notable answers with different logics
    const solveForExp = (a, b) => { //arrow function to start
        let count = 0
        while (a ** count !== b) count++ //Just learned that '**' is exponentiation
        return count
    }
//The logic behind this is so simple and easy. While 'a' to the power of 'count' (0, 1, 2, 3, etc.) does not equal 'b', add 1 to 'count' and try again.
//once 'a' ** 'count' = 'b', return count
    const solveForExp = (a, b) => Math.round(Math.log(b) / Math.log(a));
//Short hand arrow functions using Math.log

