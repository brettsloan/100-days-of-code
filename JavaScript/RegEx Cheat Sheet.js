// RegEx Cheat Sheet 
// Regular Expressions are used to match parts of strings and create patterns.

// There are multiple ways to use Regexes and one way is the .test() method. 
// It tests a string for the regEx listed and returns a boolean value.
// i.e
    let testStr = "The test string";
    let regEx = /The/;
    testStr.test(regEx); // Returns true because 'The' was found in 'The test string'
// This is an example of a literal string regEx. 'The' is different than 'the' and 'tHe'
// Another way is the .match() method. 
// It returns matching strings, index and input in an array value.
// i.e
    let testStr = "The test string";
    let regEx = /test/;
    testStr.match(regEx); // Returns ['test', index: 4, input: 'The test string']


// You can search for multiple things using the OR operator '|' 
// i.e 
    let regEx = /The | the | tHe/;


// Flags do certain things depending on which one you use. 
// All flags take the form of a letter after the RegEx.
// i.e
    let regEx = /the/i; // The 'i' is the flag which tells the regEx to ignore case values.
                        // Meaning that 'the', 'The', 'tHe' or 'THE' are all true.
    
    let global= /the/g; // The 'g' is the flag for global.
                        // It will search for every instance of 'the' and then returns it
                        // This will return just the literal string as an array ['the', 'the', 'the']


// Wildcard characters let replace unknown characters in your searches.
// The '.' character will match any one character in a RegEx
// i.e
    let strMatch = "fun run sun 9un other words and some more";
    let regEx = /.un/; 
    strMatch.match(regEx); // This will find 'fun', 'run', 'sun', '9un', etc.
// A more specific use of wildcards is using character classes.
// By putting only a certain amount of possible matches inside square brackets, the RegEx will only search for those
// i.e
    let strMatch = "fun run sun 9un other words and some more";
    let regEx = /[fr]un/gi; 
    strMatch.match(regEx); // This will find 'fun' and 'run' 
// The '[^]' character creates a negated character set and searches for everything but the characters after '^'
// It should be noted that outside of a character class, '^' will search only the beginning of strings 
// The opposite of this is '$' which will match at the ending of strings.
// i.e
    let strMatch = "fun run sun 9un other words and some more";
    let regEx = /[^fr]un/gi; 
    strMatch.match(regEx); // This will find 'sun' and '9un'

    let regEx = /^[fr]un/;
    strMatch.match(regEx); // Returns 'fun';

    let regEx = /fun$/;
    strMatch.match(regEx); // Returns null
// Sometimes you need to search for a character which appears one or more times in a row. 
// That wildcard character is '+'. 
// This will return the character to its left if it appears at least once and every occurence after.
// i.e
    let strMatch = "Mississipi";
    let regEx = /s+/; 
    strMatch.match(regEx);  // Returns [ 'ss', index: 2, input: 'Mississippi' ]
                            
    let strMatch = "MissssissipiSS ssSS";
    let regEx = /s+/gi;     // Using the global flag will find all instances
    strMatch.match(regEx);  // Returns [ 'ssss', 'ss', 'SS', 'ssSS' ]
// You may need to search for a character which may or may not even be there.
// '*' will search for the character to its left even if it's not there plus any repetitions it may have.
// i.e
    let strMatch = "Hi, hello! How are you? hiiiiiii";
    let regEx = /hi*/; 
    strMatch.match(regEx); // Returns [ 'h', index: 4, input: 'Hi, hello! How are you? hiiiiiii' ]
    
    let regEx = /hi*/gi;
    strMatch.match(regEx); // Returns [ 'Hi', 'h', 'H', 'hiiiiiii' ]
// You can use curly brackets '{}' to specify how many of a repetition there might be
// If you put a number inside the braces {3}, it will look for the character left of it that many times.
// If you put a number and a comma inside {3,}, it will look for the character left of it at least 3 times in a row
// You're able to put 2 numbers inside {3,5}, it will look for the character left of it at least 3 times but max, 5 times.
// i.e
    let strMatch = "Hi, hello! How are you? hiiiiiii";
    let regEx = /hi{3,5}/; 
    strMatch.match(regEx); // Returns [ 'hiiiii', index: 24, input: 'Hi, hello! How are you? hiiiiiii' ]

    let strMatch = "Hi, hello! How are you? hiiiiiii";
    let regEx = /hi{3}/; 
    strMatch.match(regEx); // Returns [ 'hiii', index: 24, input: 'Hi, hello! How are you? hiiiiiii' ]

    let strMatch = "Hi, hello! How are you? hiiiiiii";
    let regEx = /hi{3,}/; 
    strMatch.match(regEx); // Returns [ 'hiiiiiii', index: 24, input: 'Hi, hello! How are you? hiiiiiii' ]

// Using a RegEx by default will give you the biggest entirely matching string it finds.
// This is defined as a 'greedy' match. You can use the '?' to find the shortest possible match
// You can also use '?' as an optional match. /colou?r/ will return true for 'color' and 'colour'
// i.e
    let strMatch = "Hiiiiiii";
    let regEx = /h[a-z]*i/i; 
    let result = strMatch.match(regEx); // Returns [ 'Hiiiiiii', index: 0, input: 'Hiiiiiii' ]

    let strMatch = "Hiiiiiii";
    let regEx = /h[a-z]*?i/i; 
    let result = strMatch.match(regEx); // Returns [ 'Hi', index: 0, input: 'Hiiiiiii' ]
// Shortcuts are available to make regEx easier to use.
// /\w/ is equal to typing /[A-Za-z0-9_]/ and will find any letter, number or underscore, ignoring its case.
// the opposite is /\W/ which is the same as [^A-Za-z0-9_]
// i.e
    let strMatch = "The five boxing wizards jump quickly.";
    let regEx = /\w/;
    strMatch.match(regEx); // Returns [ 'T', index: 0, input: 'The five boxing wizards jump quickly.' ]

    let strMatch = "The five boxing wizards jump quickly.";
    let regEx = /\w/g;
    strMatch.match(regEx); // Returns [ 'T','h','e','f','i','v','e',...]

    let strMatch = "The five boxing wizards jump quickly.";
    let regEx = /\w+/g;
    strMatch.match(regEx); // Returns [ 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly' ]

    let strMatch = "The five boxing wizards jump quickly.";
    let regEx = /\W+/g;
    strMatch.match(regEx); // Returns [ ' ', ' ', ' ', ' ', ' ', '.' ] (All the whitespace and period)
// /\d/ is the same as /[0-9]/ and /\D/ is the same as /[^0-9]/
// /\s/ will match any whitespace (spaces, returns, new lines) and /\S/ returns everything but whitespace
// i.e  
    let username = "A1"; 
    let userCheck = /^[a-z]([a-z]+\d*|\d\d+)$/i; 
    // First character must be a letter
    // Second character can be any number of letters and then 0 or more numbers OR
    // A number and then at least one or more numbers    
    userCheck.test(username); // Returns false

    let username = "GoodUserName1100"; 
    let userCheck = /^[a-z]([a-z]+\d*|\d\d+)$/i; 
    userCheck.test(username); // Returns true
// Lookaheads check the pattern for matches but don't actually return them
// Mostly used for boolean values
// Positive lookahead (?=...) and negative lookahead (?!...)
// i.e
    let password = "abc123";
    let checkPass = /(?=\w{3,6})(?=\D*\d)/; // Checking for 3-6 characters and at least one of them is a number
    password.test(checkPass); // Returns true
    