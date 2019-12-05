// Challenge 1 (medium) 
// Write a function that checks if two numbers are either:
// Smaller than 0
// Greater than 0
// Exactly 0
    const both = (n1, n2) => {
        if (n1 > 0 && n2 > 0) {
            return true;
        } else if (n1 < 0 && n2 < 0) {
            return true;
        } else if (n1 == 0 && n2 == 0) {
            return true;
        } else {
            return false;
        }
    }
// Completed challenge!
// Wouldn't show me other answers for some reason

// Challenge 2 (medium)
// You are given 2 out of 3 of the angles in a triangle, in degrees.
// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees
    const missingAngle = (angle1, angle2) => {
        let angle3 = 180 - (angle1 + angle2);
        if (angle3 > 90) {
            return "obtuse";
        } else if (angle3 < 90) {
            return "acute";
        } else {
            return "right";
        }
    }
// Completed challenge!
// learning shorthand 'if' statements is something I need to memorize
    const missingAngle = (angle1, angle2) => angle1 + angle2 < 90 ? 'obtuse' 
        : angle1 + angle2 > 90 ? 'acute' 
        : 'right';
// This is the shorthand version of the if statement. This answer omits 'angle 3' and does 'opposite' math.
// They don't 'figure' out angle3 because they know if 'angle1 + angle2' is less than 90, the third angle has to be obtuse... etc.

// Challenge 3 (medium)
// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.
    const howManyTimes = num => {
        let a = 'a'.repeat(num);
        return 'Ed' + a + 'bit';
    }
// Completed Challenge!
// Shorter answer
    const howManyTimes = num => 'Ed'+'a'.repeat(num)+'bit';
// No need for 'a' varible 

// Challenge 4 (medium)
// Create a function to multiply all values in an array by the amount of values in that array.
    const MultiplyByLength = arr => {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr.length*arr[i];
        }
        return arr;
    }
// Completed challenge!
// Shorter answer
    const MultiplyByLength = arr => arr.map(x => x * arr.length);
// '.map' is a new concept to me but it makes perfect sense. 
// '.map' creates a new array with the results of the function inside. '.map(...)'
// Should be noted that it creates a NEW array. The old one still exists unless overwritten

// Challenge 5 (medium)
// A number added with its additive inverse equals zero.
// Create a function that returns an array of additive inverses.
    const additiveInverse = arr => arr.map(x => x - x*2);
// Completed challenge!
// Alt answer
    function additiveInverse(arr) {
        return arr.map(x => -x);
    }
// The answer is longer but the math is smarter. While they still get the same answer, multipling by -1 is just easier

// Challenge 6 (medium)
// Create a function that takes a string and returns the word count. The string will be a sentence.
    const countWords = str => str.split(" ").length;
// Completed Challenge!
// '.split' takes the sting entered and takes away the character in between the brackets. '(" ")' will remove all spaces from a string.
// '.split' then creates a new array of everything that was before a space. ie "this is a string" becomes [this,is,a,string].

// Challenge 7 (medium)
// Create a function that adds a string ending to each member in an array.
    const addEnding = (arr, ending) => arr.map(x => x + ending);
// Completed challenge

// Challenge 8 (medium)
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
    const Go = num => '-'.repeat(num);
// Completed challenge!

// Challenge 9 (medium)
// Create a function that returns the smaller number.
    const smallerNum = (n1,n2) => Math.min(n1,n2).toString();
// Completed challenge!