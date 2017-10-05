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
