const drivers = [
    { name: 'John Doe', hometown: 'New York' },
    { name: 'Jane Smith', hometown: 'Los Angeles' },
    { name: 'Mike Johnson', hometown: 'Chicago' },
  ];


function findMatching(drivers, name) {
  const matchingDrivers = [];
  drivers.forEach(driver => {
    if (driver.toLowerCase() === name.toLowerCase()) {
      matchingDrivers.push(driver);
    }
  });
  return matchingDrivers;
}

function fuzzyMatch(drivers, name) {
  const matchingDrivers = [];
  drivers.forEach(driver => {
    if (driver.slice(0,1) === name.slice(0,1)) {
      matchingDrivers.push(driver);
    }
  });
  return matchingDrivers;
}


function matchName(drivers, string) {
  const matchingDrivers = [];
  drivers.forEach(driver => {
    if (driver.name === string) {
      matchingDrivers.push(driver);
    }
  });
  return matchingDrivers;
}