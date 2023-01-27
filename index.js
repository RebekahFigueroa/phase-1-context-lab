/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
	const eligibleDates = this.timeInEvents.map(function (e) {
		return e.date;
	});

	const payable = eligibleDates.reduce(
		function (memo, d) {
			return memo + wagesEarnedOnDate.call(this, d);
		}.bind(this),
		0
	); // <== Hm, why did we need to add bind() there? We'll discuss soon!

	return payable;
};

function createEmployeeRecord(array) {
	const [firstName, familyName, title, payPerHour] = array;
	return {
		firstName: firstName,
		familyName: familyName,
		title: title,
		payPerHour: payPerHour,
		timeInEvents: [],
		timeOutEvents: [],
	};
}

function createEmployeeRecords(arrays) {
	return arrays.map((array) => createEmployeeRecord(array));
}

function createTimeInEvent(stringDateStamp) {
	const timeSplit = stringDateStamp.split(" ");
	this.timeInEvents.push({
		type: "TimeIn",
		hour: parseInt(timeSplit[1], 10),
		date: timeSplit[0],
	});
	return this;
}

function createTimeOutEvent(stringDateStamp) {
	const timeSplit = stringDateStamp.split(" ");
	this.timeOutEvents.push({
		type: "TimeOut",
		hour: parseInt(timeSplit[1], 10),
		date: timeSplit[0],
	});
	return this;
}

function hoursWorkedOnDate(stringDate) {
	const timeInEvent = this.timeInEvents.find(
		(event) => event.date === stringDate
	);
	const timeOutEvent = this.timeOutEvents.find(
		(event) => event.date === stringDate
	);
	return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

function wagesEarnedOnDate(stringDate) {
	const hours = hoursWorkedOnDate.call(this, stringDate);
	return hours * this.payPerHour;
}

// function allWagesFor(objectEmployeeRecord) {
// 	const dates = objectEmployeeRecord.timeInEvents.map((event) => event.date);
// 	return dates.reduce(
// 		(total, date) => total + wagesEarnedOnDate(objectEmployeeRecord, date),
// 		0
// 	);
// }

function findEmployeeByFirstName(srcArray, firstName) {
	return srcArray.find((record) => firstName === record.firstName);
}

function calculatePayroll(arrayEmployeeRecords) {
	return arrayEmployeeRecords.reduce(
		(total, employeeRecord) => total + allWagesFor.call(employeeRecord),
		0
	);
}
