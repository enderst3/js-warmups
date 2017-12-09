// Given a string, return a new string where "not " has been added to the front.
//  However, if the string already begins with "not", return the string unchanged.

// notString('candy') → 'not candy'
// notString('x') → 'not x'
// notString('not bad') → 'not bad'

function notString (str) {
   let pos = str.indexOf('not') 
   
   if (pos !== 0) {
       console.log("not " + str)
   } else {
       console.log(str)
   }
}

notString('candy')
notString('x')
notString('not bad')

// Given a non-empty string and an int n, 
// return a new string where the char at index n has been removed.
//  The value of n will be a valid index of a char in the original string 
// (i.e. n will be in the range 0..len(str)-1 inclusive).

// missingChar('kitten', 1) → 'ktten'
// missingChar('kitten', 0) → 'itten'
// missingChar('kitten', 4) → 'kittn'

function missingChar(str, ind) {
    let position = str.charAt(ind)
    let change = str.replace(position, '')
    console.log(change)
 }

 missingChar('kitten', 1)
 missingChar('kitten', 0)
 missingChar('kitten', 4)

// Given a string, we'll say that the front is the first 3 chars of the string. 
// If the string length is less than 3, the front is whatever is there. 
// Return a new string which is 3 copies of the front.
 
//  front3('Java') → 'JavJavJav'
//  front3('Chocolate') → 'ChoChoCho'
//  front3('abc') → 'abcabcabc'

function front3(str) {
    let three = str.slice(0,3).repeat(3)
    console.log(three)
}

 front3('Java')
 front3('Chocolate')
 front3('abc')

//  Given a string and a non-negative int n, return a larger string 
//  that is n copies of the original string.
 
//  stringTimes('Hi', 2) → 'HiHi'
//  stringTimes('Hi', 3) → 'HiHiHi'
//  stringTimes('Hi', 1) → 'Hi'

function stringTimes(str, num) {
    let times = str.repeat(num)
    console.log(times)
}

 stringTimes('Hi', 2)
 stringTimes('Hi', 3)
 stringTimes('Hi', 1)

//  Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
 
//  stringBits('Hello') → 'Hlo'
//  stringBits('Hi') → 'H'
//  stringBits('Heeololeo') → 'Hello'

function stringBits(str) {
    let out = ''
    for (let i = 0; i < str.length; i += 2) {
        out += str[i]
    }
    console.log(out)
}

 stringBits('Hello')
 stringBits('Hi')
 stringBits('Heeololeo')

//  Given a non-empty string like "Code" return a string like "CCoCodCode".
 
//  stringSplosion('Code') → 'CCoCodCode'
//  stringSplosion('abc') → 'aababc'
//  stringSplosion('ab') → 'aab'

function stringSplosion(str) {
    let out = ''
    for (let i = 0; i < str.length + 1; i++) {
        out = out + str.substring(0,i)
    }
    console.log(out)
} 

 stringSplosion('Code')
 stringSplosion('abc')
 stringSplosion('ab')

// two bricks small: 1, big: 5
// with the available bricks reach the goal without
// going over it
// function makeBricks(smallStep, bigStep, goal)


// compare both small and big ints singular
// then compare both together
// if unsucsesful recurs the func subtracting 1 from both args



 function makeBricks(small, big, goal) {
    let smallBrick = 1 * small
    let bigBrick = 5 * big
    if (smallBrick + bigBrick === goal) {
        console.log(true)
    }else{
        console.log(false)
    }
}

makeBricks(1, 5, 26)
makeBricks(1, 5, 27)

/*
Write a function that will return the count of distinct case-insensitive 
alphabetic characters and numeric digits that occur more than once in the 
input string. The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits. 

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
    let textLower = text.toLowerCase();
    let letterCount = 0;
    let dupLetter = [];
    
    textLower.split('').forEach(function(letter) {
      if (!dupLetter.includes(letter) && (textLower.split(letter).length - 1) > 1) {
        letterCount = letterCount + 1;
        dupLetter.push(letter);
      }
    });
    
    return letterCount;
  }

duplicateCount(abcde)
duplicateCount(aabBcddee)

/*
Croquet Registration

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members in which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input:

Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Example Input:

[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Output:

Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.

Example Output:

["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/

function playerInfo(age, handicap) {
    if ((age >= 55)  && (handicap >= 7)) {
        console.log('Senior')
    } else {
        console.log('Open')
    }
}

playerInfo(18, 20)
playerInfo(61, 12)

/*
Given 3 int values, a b c, return their sum. However, 
if one of the values is the same as another of the values, 
it does not count towards the sum.

lone_sum(1, 2, 3) → 6
lone_sum(3, 2, 3) → 2
lone_sum(3, 3, 3) → 0
*/

function lone_sum(a, b, c) {
  if ((a === b) && (a ===c )) {
    console.log(0)
    return
  } if (a === b) {
    console.log(c)
    return
  } if (a === c) {
    console.log(b)
    return
  } if (b === c) {
    console.log(a+c)
    return
  } else {
   console.log(a+b+c)
  }
}

lone_sum(1, 2, 3)
lone_sum(3, 2, 3)
lone_sum(3, 3, 3)

/*
Given 3 int values, a b c, return their sum.
However, if one of the values is 13 then it does not count towards the 
sum and values to its right do not count. So for example, if b is 13, 
then both b and c do not count.

lucky_sum(1, 2, 3) → 6
lucky_sum(1, 2, 13) → 3
lucky_sum(1, 13, 3) → 1
*/

const luckySum = (... list) => list
  //.filter((value, index) => list.slice(0, index + 1).indexOf(13) === -1)
  .filter((value, index) => list.slice(0, index + 1).includes(13) === false)
  .reduce((total, value) => total + value)

  lucky_sum(1, 2, 3)
  lucky_sum(1, 2, 13)
  lucky_sum(1, 13, 3)

  /*
  Mr. Scrooge has a sum of money 'P' that wants to invest, 
  and he wants to know how many years 'Y' this sum has to be kept in the bank 
  in order for this sum of money to amount to 'D'.

  The sum is kept for 'Y' years in the bank where interest 
  'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T' 
  Note: that the principal is not taxed but only the year's accrued interest.
  */

  function Scrooge(desiredSum) {
    let time
    let principal = 1000.0
    let interestRate = 0.05
    let taxRate = 0.18
    let annualAccrualRate = interestRate - taxRate
    console.log(annualAccrualRate)
    let desiredGrowth = desiredSum - principal
    return desiredGrowth * annualAccrualRate
 }
 
 console.log(Scrooge())

/*
// How would you call this function repeatedly to get the whole sentence?

const getSentenceFragment = (offset = 0) => {
  const pageSize = 3
  const sentence = [...'hello world']
  return {
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset + pageSize < sentence.length ? offset + pageSize : null
  }
}

const getSentence = (sentence, offset) => {
  // MODIFY CODE HERE ------------
  return [];
  // MODIFY CODE HERE ------------
}

console.log(getSentence([], 0).join(''))

// How would you interface with this async function to get the whole sentence?

const getSentenceFragment = (offset, callback) => {
  const pageSize = 3
  const sentence = [...'hello world']
  setTimeout(() => callback({
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset +
        pageSize < sentence.length ? offset + pageSize : undefined
  }), 500)
}

const getSentence = (offset, callback) => {
  // MODIFY THE CODE HERE ------
  return []
  // MODIFY THE CODE HERE ------
}

getSentence(0, (sentence) => console.log(sentence))
*/

/*
The word i18n is a common abbreviation of internationalization the developer community use instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation following the same rules.

Notes:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example:

abbreviate("elephant-rides are really fun!")

Output:

"e6t-r3s are r4y fun!"
*/
const abbreviate_sentence = (str) => {
    str = str.split(" ")
    let words = []
    for (word of str) {
      words.push(abbreviate_word(word))
    }
    return words.join(" ")
  }
  
  const abbreviate_word = (str) => {
    let punc = ""
    if("!?.,".includes(str[str.length - 1]))
    {
      punc = str[str.length - 1]
      str = str.slice(0, str.length-1)
    }
  
    if(str.includes("-")){
      words = str.split("-")
      return abbreviate_word(words[0]) + "-" + abbreviate_word(words[1]) + punc
    }else if(str.length > 3){
      return str[0] + (str.length - 2) + str[str.length - 1] + punc
    }else{
      return str + punc
    }
  }
  
  console.log(abbreviate_sentence("elephant-rides are really fun!"))

/* 
Have you heard that Fibonacci had an older brother, Tribonacci? Tribonacci came up with a pattern that created the next element in the sequence based on the sum of the previous three elements:

0, 1, 1, 2, 4, 7, 13, 24 ...
Well, now it's time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

Guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
xbonacci {1,1} produces the Fibonacci sequence

*/

const xbonacci = (signature, n) => {
  let len = signature.length
  while (signature.length < n) {
    signature.push(signature.slice(signature.length - len, signature.length).reduce((total, v) => total + v, 0))
  }
  return signature
}

console.log(xbonacci([1, 1, 1], 10))


/*
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect:

89 = 8^1 + 9^2
The next number in having this property is 135.

See this property again:

135 = 1^1 + 3^2 + 5^3
We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) ==> []
*/

const getDigits = (num) => {
    let digitCount = Math.floor(Math.log10(num)) + 1
    let digits = []
    while (digitCount > 0) {
      digits.push(Math.floor(num / 10 ** (digitCount - 1)))
      num %= 10 ** (digitCount - 1)
      digitCount -= 1
    }
    return digits
  }

/*
This problem takes its name by arguably the most important event in the life of the ancient historian Josephus:
according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist:
they formed a circle and proceeded to kill one man every three, until one last man was left
(and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story,
you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items
to be permuted as if they were in a circle and counted out every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

For example, with n=7 and k=3 josephus(7,3) should act this way.

[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:

josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
For more info, browse the Josephus Permutation page on wikipedia; related kata: Josephus Survivor.
*/


const josephus = (items, k) => {
  let result = []
  let index = -1
  while (items.length > 0) {
    index = (index + k) % items.length
    result.push(items[index])
    items = items.slice(0, index).concat(items.slice(index + 1, items.length))
    index -= 1
  }
  return result
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)) // [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
console.log(josephus(['C', 'o', 'd', 'e', 'W', 'a', 'r', 's'], 4)) // ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3)) // [3, 6, 2, 7, 5, 1, 4]
console.log(josephus([], 3)) // []

/*
Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

The function takes two arguments:

The length of Bob's lap (larger than 0)
The length of Charles' lap (larger than 0)

The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

The first number is the number of laps that Bob has to run
The second number is the number of laps that Charles has to run

*/

let nbrOfLaps = function (x, y) {
  let count = x

  while(count%y!==0) {count+=x}
    return [count/x, count/y]
}

console.log(nbrOfLaps(5, 3)) // returns [3, 5]
console.log(nbrOfLaps(4, 6)) // returns [3, 2]
console.log(nbrOfLaps(13, 28)) // returns [ 28, 13 ]
console.log(nbrOfLaps(81, 3)) // returns [ 1, 27 ]
console.log(nbrOfLaps(51, 9)) // returns [ 3, 17 ]