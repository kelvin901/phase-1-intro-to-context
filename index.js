function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  const employeeData = ["Gray", "Worm", "Security", 25];
  const employeeRecord = createEmployeeRecord(employeeData);
  console.log(employeeRecord);
    
  function createEmployeeRecords(employeesData) {
    return employeesData.map(employeeData => createEmployeeRecord(employeeData));
  }
  const employeesData = [
    ["Gray", "Worm", "Security", 25],
    ["Kelvin", "Nyoike", "Sales Associate", 15],
    ["Zipporah", "Gitau", "Intern", 10]
  ];
  const employeeRecords = createEmployeeRecords(employeesData);
  console.log(employeeRecords);
 
  function createTimeInEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    });
    return employeeRecord;
  }

  const EmployeeRecord = createEmployeeRecord(["Gray", "Worm", "Security", 25]);
const updatedRecord = createTimeInEvent(EmployeeRecord, "2023-04-01 0900");
console.log(updatedRecord);

function createTimeOutEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
  
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
    });
  
    return employeeRecord;
  }

  const employeeRecorded = {
    firstName: "Gray",
    familyName: "Worm",
    title: "Security",
    payPerHour: 25,
    timeInEvents: [{ type: "TimeIn", hour: 9, date: "2023-04-01" }],
    timeOutEvents: []
  };
  const dateStamp = "2023-04-01 17:30";
  const updatedEmployeeRecord = createTimeOutEvent(employeeRecorded, dateStamp);
  console.log(updatedEmployeeRecord);

  function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
  
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }

  const EmployeeRecorded = {
    firstName: "John",
    familyName: "Doe",
    title: "Manager",
    payPerHour: 25,
    timeInEvents: [
      { type: "TimeIn", hour: 9, date: "2023-04-01" },
      { type: "TimeIn", hour: 10, date: "2023-04-02" }
    ],
    timeOutEvents: [
      { type: "TimeOut", hour: 17, date: "2023-04-01" },
      { type: "TimeOut", hour: 16, date: "2023-04-02" }
    ]
  };
  const date = "2023-04-01";
  const hoursWorked = hoursWorkedOnDate(EmployeeRecorded, date);
  console.log(hoursWorked);

  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payRate = employeeRecord.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
  }

  const uemployeeRecord = {
    firstName: "Gray",
    familyName: "Worm",
    title: "Security",
    payPerHour: 25,
    timeInEvents: [
      { type: "TimeIn", hour: 9, date: "2023-04-01" },
      { type: "TimeIn", hour: 10, date: "2023-04-02" }
    ],
    timeOutEvents: [
      { type: "TimeOut", hour: 17, date: "2023-04-01" },
      { type: "TimeOut", hour: 16, date: "2023-04-02" }
    ]
  };
  const dated = "2023-04-01";
  const wagesEarned = wagesEarnedOnDate(uemployeeRecord, date);
  console.log(wagesEarned);

  function allWagesFor(employeeRecord) {
    const dates = employeeRecord.timeInEvents.map(event => event.date);
    const wages = dates.map(date => wagesEarnedOnDate(employeeRecord, date));
    const totalWages = wages.reduce((sum, wage) => sum + wage, 0);
    return totalWages;
  }

  const employeRecord = {
    firstName: "Gray",
    familyName: "Worm",
    title: "Security",
    payPerHour: 25,
    timeInEvents: [
      { type: "TimeIn", hour: 9, date: "2023-04-01" },
      { type: "TimeIn", hour: 10, date: "2023-04-02" }
    ],
    timeOutEvents: [
      { type: "TimeOut", hour: 17, date: "2023-04-01" },
      { type: "TimeOut", hour: 16, date: "2023-04-02" }
    ]
  };
  const totalWages = allWagesFor(employeRecord);
  console.log(totalWages);

  function calculatePayroll(employeeRecords) {
    const totalWages = employeeRecords.reduce((sum, employeeRecord) => {
      const wages = employeeRecord.timeInEvents.reduce((total, event) => {
        const date = event.date;
        return total + wagesEarnedOnDate(employeeRecord, date);
      }, 0);
      return sum + wages;
    }, 0);
    return totalWages;
  }

  const employeerecords = [
    {
      firstName: "Gray",
      familyName: "Worm",
      title: "Security",
      payPerHour: 25,
      timeInEvents: [
        { type: "TimeIn", hour: 9, date: "2023-04-01" },
        { type: "TimeIn", hour: 10, date: "2023-04-02" }
      ],
      timeOutEvents: [
        { type: "TimeOut", hour: 17, date: "2023-04-01" },
        { type: "TimeOut", hour: 16, date: "2023-04-02" }
      ]
    },
    {
      firstName: "Kelvin",
      familyName: "Nyoike",
      title: "Salesperson",
      payPerHour: 20,
      timeInEvents: [
        { type: "TimeIn", hour: 9, date: "2023-04-01" },
        { type: "TimeIn", hour: 10, date: "2023-04-02" }
      ],
      timeOutEvents: [
        { type: "TimeOut", hour: 17, date: "2023-04-01" },
        { type: "TimeOut", hour: 16, date: "2023-04-02" }
      ]
    }
  ];
  const totalPayroll = calculatePayroll(employeerecords);
  console.log(totalPayroll);
 
  
  
  
  
    