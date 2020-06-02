// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
var prograd_1 = "Shank"
// 1.2 Print `"The driver's name is XXXX"`.
console.log(prograd_1)
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
var prograd_2 = "Ramesh"
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(prograd_2)
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
if (prograd_1.length > prograd_2.length) {
    console.log(`The driver has the longest name, it has ${prograd_1.length} characters`)
} else if (prograd_1.length < prograd_2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${prograd_2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${prograd_1.length} characters!`)
}
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.2. Check if the string contains vowels or not.
var vowel_list = 'aeiouAEIOU';
for (var x = 0; x < prograd_1.length; x++) {
    if (vowel_list.indexOf(prograd_1[x]) !== -1) {
        console.log(prograd_1[x] + ' Vowel At ' + x);
    } else {
        console.log('No vowels');
    }

}

for (var x = 0; x < prograd_2.length; x++) {
    if (vowel_list.indexOf(prograd_2[x]) !== -1) {
        console.log(prograd_2[x] + ' Vowel At ' + x);
    } else {
        console.log('No vowels');
    }

}

// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

if (prograd_1.toUpperCase() != prograd_1 && prograd_1.toLowerCase() != prograd_1) {

    console.log("it contains some upper and some lower case letters ")
    console.log("upper case letters count:")
    console.log(prograd_1.replace(/[^A-Z]/g, "").length);
    console.log("lower case letters count:")
    console.log(prograd_1.replace(/[^a-z]/g, "").length);
}






// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var newpro1 = [];
for (var x = 0; x < prograd_1.length; x++) {
    newpro1.push(prograd_1[x].toUpperCase() + " ");
}
space1 = newpro1.toString();
console.log(space1);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
console.log(prograd_2.split("").reverse().join(""))


// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"

console.log(`${prograd_1} ${prograd_2}`)

// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(`${prograd_2} ${prograd_1}`)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (prograd_1.localeCompare(prograd_2) < 0) {
    console.log("The driver's name goes first.");
} else if (prograd_1.localeCompare(prograd_2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 