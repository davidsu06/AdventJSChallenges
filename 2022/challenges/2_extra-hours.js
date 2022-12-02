function countHours(year, holidays) {
  return holidays.reduce((extraHours, holiday) => {
    const date = new Date(`${holiday}/${year}`);

    if (date.getDay() > 0 && date.getDay() < 6) {
      return extraHours + 2;
    } else {
      return extraHours + 0;
    }
  }, 0);
}

console.log(countHours(2023, ['01/06', '04/01', '12/25']))