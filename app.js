// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var kalvium_1 = "Brain";
console.log("The driver's name is ",kalvium_1)

var kalvium_2 = ("Amir");
console.log("The navigator's name is ",kalvium_2)

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var size1 = kalvium_1.length;
var size2 = kalvium_2.length;
for (i=0;size1>i;++i) {
  for (j=0;size2>j;++j) {
      if (i>j) {
        var s ="The driver has the longest name, it has 5 characters.";
      } else if (j>i) {
          var s = "The navigator's has the longest name, it has 4 characters.";
      } else{
        var s = "Wow, you both have equally long names, x characters!";
      }  
  } 
}
console.log(s);

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 
var vowels =['a','e','i','o','u','A','E','I','O','U'];
var a="no vowels";
b='';
c='';
for ( var i=0;i<kalvium_1.length;i++){
  var cur=kalvium_1[i];
  var vowel =false;
  for (var j=0;j<vowels.length;j++) {
    if (cur==vowels[j]){
      vowel=true;
      break;
    }
  }
  if (vowel) {
    b +=vowels[j]+' ';
    c +=i+ ' ';
  }
}
console.log(b,c)
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
let d=0;
let e=0;
for (let i=0;i<kalvium_2.length;i++) {
  var upper = u(kalvium_2[i]);
  if (upper) {
    d +=1;
  } else {
    e += 1;
  }
}
console.log(d);
console.log(e);

function u(char) {
  return char == char.toUpperCase() && char != char.toLowerCase();
}

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
var space1=kalvium_1.split('').join(' ').toUpperCase();
console.log(space1);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
var space2 = kalvium_2.split('').reverse().join(' ');
console.log(space2);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
var merge1 = kalvium_1+ ' '+kalvium_2;
console.log(merge1);

var merge2 = kalvium_2+ ' '+kalvium_1;
console.log(merge2);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (kalvium_1>kalvium_2) {
      console.log(kalvium_1);
} else if (kalvium_2>kalvium_1){
  console.log(kalvium_2);
} else {
  console.log("Wha?! You both have the same name?")
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut mattis ante. Morbi in odio vel dolor viverra dictum eu vitae orci. Integer sed nunc ipsum. Phasellus non nunc vitae odio dictum dignissim. Nulla ac nibh sit amet ante auctor consequat. Proin a venenatis lacus. Sed dictum porta diam, non feugiat quam accumsan pellentesque. Suspendisse tincidunt, metus et dignissim ullamcorper, lectus leo pharetra lectus, vitae vestibulum enim enim nec nibh. Nulla arcu sapien, sagittis vel nibh vitae, vehicula commodo lorem. Quisque consequat ex odio, vel egestas nibh tristique ac. Donec id leo libero. Duis ligula urna, iaculis sed purus ut, dapibus rutrum lorem.

Mauris at ultrices purus, at faucibus nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse imperdiet vel dui venenatis ornare. Aenean tempor ullamcorper mauris, quis dignissim est rhoncus ut. Sed pharetra id dolor vitae tincidunt. Mauris a ante ultricies urna pulvinar vestibulum. Etiam in orci sit amet tortor dignissim viverra. Nulla tincidunt iaculis gravida. Nullam a ex dictum, viverra massa sed, feugiat magna. Phasellus lacinia ligula tempus dui maximus molestie. Ut mi quam, ullamcorper in eros eu, sodales varius eros.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum faucibus orci ut faucibus semper. Aenean faucibus enim ut velit euismod aliquam. Vivamus venenatis vestibulum maximus. Morbi ac pharetra nibh. Nullam consectetur nibh non purus sodales, sed gravida risus tempus. Aenean quis erat suscipit est pharetra pharetra. Sed tincidunt sagittis tortor, ut molestie sem. Nullam sodales porttitor vehicula. Nunc bibendum nulla quis dolor pulvinar, et congue velit efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit sit amet quam in malesuada. Curabitur maximus purus vel mi auctor dignissim. Donec pharetra justo non risus facilisis placerat. Curabitur hendrerit eu ex vel dignissim.`
var word = lorem.split(' ');
var words = word.length;
console.log(words)





// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
