const MAX = 100

function ApiCall (callback) {
  setTimeout(() => {
    const randNum = Math.floor(Math.random() * MAX) + 1
    callback({
      status: 200,
      body: `{"data":[{"id": 1, "type": "random", "attributes": { "value": ${randNum} }}]}`
    })
  }, 500)
}

function JsonParser (response) {
  if (response.status !== 200) {
    throw new Error('invalid response-code')
  }
  return JSON.parse(response.body)
}

function getTheValue (serverResponseObject) {
  return serverResponseObject.data[0].attributes.value
}

ApiCall((response) => {
  const parsedData1 = JsonParser(response)
  const randNum1 = getTheValue(parsedData1)
  ApiCall((response2) => {
    const parsedData2 = JsonParser(response2)
    const randNum2 = getTheValue(parsedData2)
    console.log(randNum1 + randNum2)
  })
})
