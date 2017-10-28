// The best way async await

const MAX = 100
const FAILURE_RATE = 0.0

function maybeFail () {
  if (Math.random() < FAILURE_RATE) {
    throw new Error('bad stuff happened')
  }
}

function ApiCall () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        maybeFail()
        const randNum = Math.floor(Math.random() * MAX) + 1
        resolve({
          status: 200,
          body: `{"data":[{"id": 1, "type": "random", "attributes": { "value": ${randNum} }}]}`
        })
      } catch (e) {
        reject(new Error('oops, it didnt work out'))
      }
    }, 500)
  })
}

function JsonParser (response) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (response.status !== 200) {
        reject(new Error('invalid response-code'))
      }
      resolve(JSON.parse(response.body))
    }, 100)
  })
}

function getTheValue (serverResponseObject) {
  return serverResponseObject.data[0].attributes.value
}

const addNumbersFromApi = (callNumber) => {
  return Array(callNumber).fill().reduce(async (total) => {
      const result = await ApiCall()
      const parsedBody = await JsonParser(result)
      return await total + getTheValue(parsedBody)
  }, 0)

/*
const output = Array(callNumber).fill().map(async () => {
    const result = await ApiCall()
    const parsedBody = await JsonParser(result)
    return getTheValue(parsedBody)
})
return Promise.all(output)
.then((numbers) => {
    return numbers.reduce((total, x) => total + x, 0)
}) 
*/
}

addNumbersFromApi(10)
  .then(console.log)
  .catch((x) => console.log('Error!!!', x))

console.log('what is happening?')