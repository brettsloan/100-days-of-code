// Challenge 1 (hard) 
// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
    const sevenBoom = arr => {
        toString(arr);
        console.log(arr);
        for(var i = 0; i < arr.length; i++) {
            if (arr[i].indexOf('7')) {
                return "Boom!";
            }
        }
        return "there is no 7 in the array"
    }
// Completed Challenge!
// Other answers
    const sevenBoom = arr => /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';
// '/7/' is a regular expression (RegEx). searches for 7 in test(arr). 'test()' is a method to test for a match. Returns true or false.

// Challenge 2 (hard)
// A pair of strings form a strange pair if both of the following are true:
// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.
// Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.
    const isStrangePair = (str1, str2) => {
        var a = str1.charAt(0);
        var b = str1.charAt(str1.length-1);
        var c = str2.charAt(0);
        var d = str2.charAt(str2.length-1);
        if(a == d && b == c) {
            return true;
        } else {
            return false;
        }
    }
// Completed Challenge!
// Other answers
// Same as mine but more streamlined. 
    function isStrangePair(str1, str2) {
        return (str1.charAt(0) == str2.charAt(str2.length-1) && str2.charAt(0) == str1.charAt(str1.length-1))
    }
// Even more streamlined below
    const isStrangePair = (str1, str2) => str1.charAt(0) == str2.charAt(str2.length-1) && str2.charAt(0) == str1.charAt(str1.length-1);

// Challenge 3 (hard)
// Create a function to remove all null values from an array.
    const checkNull = isNull => isNull !== null;
    const removeNull = arr => arr.filter(checkNull);
// Completed Challenge!
// learned about '.filter()' method. Creates an array filled with elements that pass a test (function).
// Other answers. '.filter(Boolean)' filters out all false elements. ie "", null, NaN, undefined, etc.
    const removeNull = arr => arr.filter(Boolean);

// Challenge 4 (hard)
// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.
    const retrieveMajor = semver => {
        let arr = semver.split(".");
        return arr[0];
    }
    const retrieveMinor = semver => {
        let arr = semver.split(".");
        return arr[1];
    };
    const retrievePatch = semver => {
        let arr = semver.split(".");
        return arr[2];
    };
// Completed Challenge!
// Other answers
    const retrieveMajor = semver => semver.split(".")[0];
    const retrieveMinor = semver => semver.split(".")[1];
    const retrievePatch = semver => semver.split(".")[2];
// The same as mine but more streamlined and immediately calls the arr index

// Challenge 5 (hard)
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
    const monthName = num => {
       const months = {
           1:"January",
           2:"February",
           3:"March",
           4:"April",
           5:"May",
           6:"June",
           7:"July",
           8:"August",
           9:"September",
           10:"October",
           11:"November",
           12:"December"
       };
       return months[num];
    }
// Completed Challenge!
// Other answers consisted of Switch/Case, calling a single array of just month names and indexing num-1.

// Challenge 6 (hard)
// Write a function that takes three string arguments (first, last, word) and returns true if (when alphabetically sorted) word is found between first and last.
    const isBetween = (first, last, word) => {
        var arr = [first, last, word].sort();
    return (arr[1] == word ? true : false);
    }
// Completed Challenge!
// Other answers
// This is a fun answer because it doesn't sort anything but compares them instead which is something you don't necessarily think of with strings
    const isBetween = (first, last, word) => word > first && word < last;
// The below answer is similiar to mine but more streamlined. The same logic but immediately tests the array against word, returning true if a match and false by default
    const isBetween = (first, last, word) => [first, last, word].sort()[1] === word;

// Challenge 7 (hard)
// Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".
// If the number is a multiple of 3 the output should be "Fizz".
// If the number given is 5 the output should be "Buzz". <------ this should have read as 'is a multiple of 5'
// If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
// If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below. <---- this also should've read as 'output as a string'
    const FizzBuzz = num => 
        num % 3 == 0 && num % 5 == 0 
        ? "FizzBuzz" 
        : num % 3 == 0 
        ? "Fizz" 
        : num % 5 == 0 
        ? "Buzz"
        : num.toString();
// Completed Challenge!
// proud of my answer on this based on the short hand ternaries 
// Other answers
// This answer was logically so smart to me. If it's a multiple of 3 put fizz, if of 5, put buzz, if both put fizzbuzz OR just put '${num}'
// The only concept I can't get is num%3?. I can't seem to find how it determines what's true vs false
    const FizzBuzz = num => (num%3?'':'Fizz')+(num%5?'':'Buzz')||`${num}`;