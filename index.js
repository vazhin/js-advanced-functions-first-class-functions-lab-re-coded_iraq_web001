// Code your solution in this file!
const returnFirstTwoDrivers = function (arrOfDrivers) {
  let newArr = [arrOfDrivers[0], arrOfDrivers[1]]
  return newArr
}

const returnLastTwoDrivers = function(arrOfDrivers) {
  let newArr = []
  let arrLength = arrOfDrivers.length
  newArr.push(arrOfDrivers[arrLength - 2])
  newArr.push(arrOfDrivers.pop(arrOfDrivers[arrLength - 2]))
  return newArr
}
