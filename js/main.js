function isWeekendOff(weekendOff, futureDate) {
    const currentDate = new Date();
    const futureWeekend = new Date(futureDate);
    const currentWeekend = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (6 - currentDate.getDay()));
  
    if (weekendOff === "upcoming") {
        if (futureWeekend < currentWeekend) {
            return false;
        } else {
            return (Math.floor((futureWeekend - currentWeekend) / (7 * 24 * 60 * 60 * 1000)) % 2 === 0);
        }
    } else if (weekendOff === "past") {
        if (futureWeekend > currentWeekend) {
            return false;
        } else {
            let pastWeekends = Math.floor((currentWeekend - futureWeekend) / (7 * 24 * 60 * 60 * 1000));
            return (pastWeekends % 2 === 0);
        }
    } else {
        return "Invalid input for weekendOff. Please enter 'upcoming' or 'past'";
    }
}

function checkDate() {
    var date = new Date(document.getElementById("futureDate").value);
    var day = date.getDay();
    var submitButton = document.getElementById("submitButton");

    if (day == 0 || day == 6) {
        submitButton.disabled = false;
        submitButton.innerText = "Check"
    } else {
        submitButton.disabled = true;
        submitButton.innerText = "Please select a Saturday or Sunday"
    }
}

  function checkWeekendOff() {
    let weekendOff = document.getElementById("weekendOff").value;
    let futureDate = new Date(document.getElementById("futureDate").value);
    let output = document.getElementById("output");

    if (isWeekendOff(weekendOff, futureDate) === true) {
        output.innerHTML = "It's your weekend off!";
    } else if (isWeekendOff(weekendOff, futureDate) === false) {
        output.innerHTML = "It's not your weekend off.";
    } else {
        output.innerHTML = isWeekendOff(weekendOff, futureDate);
    }
}
