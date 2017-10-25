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