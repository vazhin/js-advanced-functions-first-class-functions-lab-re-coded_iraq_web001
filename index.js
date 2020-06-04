// Code your solution in this file!
const returnFirstTwoDrivers = function (arrOfDrivers) {
  let newArr = [arrOfDrivers[0], arrOfDrivers[1]]
  return newArr
}

const returnLastTwoDrivers = function(arrOfDrivers) {
  let newArr = []
  let arrLength = arrOfDrivers.length
  for (let i = 2; i > 0; i--){
    newArr.push(arrOfDrivers[arrLength - i])
  }
  return newArr
}

let selectingDrivers = [
  returnFirstTwoDrivers(),
  returnLastTwoDrivers();
]
