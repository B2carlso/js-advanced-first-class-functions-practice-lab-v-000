function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  }
)}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(driver) {
    if (driver.hometown === town) {console.log(driver.name)}
  })
}

function driversByRevenue(drivers, rev) {
  drivers.sort(function(driver) {

  }
}
