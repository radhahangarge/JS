// Part 1: businessHours function
function businessHours(dayNumber, hourNumber) {
    if (dayNumber >= 1 && dayNumber <= 5 && hourNumber >= 9 && hourNumber <= 18) {
      console.log("It is business hours.");
      return true;
    } else {
      console.log("It is not business hours.");
      return false;
    }
  }
  
  // Testing businessHours function
  businessHours(1, 10);  // It is business hours. (returns true)
  businessHours(3, 20);  // It is not business hours. (returns false)
  
  
  // Part 2: getDayNumber function
  function getDayNumber(janFirstDayNumber, yearDayNumber) {
    return (janFirstDayNumber + yearDayNumber) % 7;
  }
  
  // Testing getDayNumber function
  console.log(getDayNumber(3, 100));  // 6 (Saturday)
  console.log(getDayNumber(1, 365));  // 2 (Tuesday)

  function isBusinessHours(yearDayNumber, hourNumber) {
    const dayNumber = (yearDayNumber + 1) % 7; // Adjust yearDayNumber to start from 1 instead of 0
    return businessHours(dayNumber, hourNumber);
  }
  