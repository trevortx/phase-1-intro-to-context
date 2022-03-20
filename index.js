// first challenge
function createEmployeeRecord(array) {
return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

// second challenge
function createEmployeeRecords(arrays) {
  const arrayOfEmployees = []
  for (let element of arrays) {
    let newEmployee = createEmployeeRecord(element)
    arrayOfEmployees.push(newEmployee)
  }
  return arrayOfEmployees
}

// event creator for challenges 3 & 4

function newEventCreator(dateTimeStamp) {
  const dateTime = dateTimeStamp.split(" ")
  const newEvent = {
    hour: parseInt(dateTime[1]),
    date: dateTime[0]
  }
  return newEvent
}

// challenge 3

function createTimeInEvent(employee, dateTimeStamp) {
  const newEvent = newEventCreator(dateTimeStamp)
  employee.timeInEvents.push(newEvent)
  let eventArray = employee.timeInEvents[0]
  eventArray.type = "TimeIn"
  return employee
}

// challenge 4

function createTimeOutEvent(employee, dateTimeStamp) {
  const newEvent = newEventCreator(dateTimeStamp)
  employee.timeOutEvents.push(newEvent)
  let eventArray = employee.timeOutEvents[0]
  eventArray.type = "TimeOut"
  return employee
}

//challenge 5

//   isolate two arrays of objects (timeIn, timeOut)
//   iterate over the arrays to find objects that have a matching date value
//   return the objects with the matching date value's hours
//   subtract the difference
//   return the difference (integer)

function hoursWorkedOnDate(employee, dateStamp) {
  const timeInEvents = employee.timeInEvents
  const timeOutEvents = employee.timeOutEvents

  let foundInEvent = timeInEvents.find((event) => event.date === dateStamp)
  let foundOutEvent = timeOutEvents.find((event) => event.date === dateStamp)

  return Math.abs((foundInEvent.hour - foundOutEvent.hour) / 100)
}

// challenge 6

function wagesEarnedOnDate(employee, dateStamp) {
  let hours = hoursWorkedOnDate(employee, dateStamp)
  return hours * employee.payPerHour
}

// challenge 7

function allWagesFor(employee) {
// store timeInEvents array which has timeIn objects within it
let events = employee.timeInEvents

// run each date through wagesEarnedOnDate and return sum
let sum = 0
for (let i = 0; i < events.length; i++) {
  sum += wagesEarnedOnDate(employee, (events[i].date))
}
return sum
}

// challenge 8

function calculatePayroll(arrayOfEmployees) {
  console.log(arrayOfEmployees)
  let sum = 0
  for (let i = 0; i < arrayOfEmployees.length; i++) {
    sum += allWagesFor(arrayOfEmployees[i])
  }
  return sum
}