

function updateTime() {
    const currentTimeDisplay = document.getElementById('currentTime');
    const currentDayDisplay = document.getElementById('currentDay');

    let currentDate = new Date();

    //    define arrays for the days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    

    //  to calculate and format hours(in 12-hour format) minute, secondas, and AM/PM.
    let hours = currentDate.getHours();
    const am_pm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    //  construct a date and time string in this format
    const dateTimeString = `${hours}:${minutes}:${seconds}  ${am_pm}`;
    const dayString = `${dayOfWeek}`;

    currentTimeDisplay.textContent = dateTimeString;
    currentDayDisplay.textContent = dayString;


}
// update the date and time every second(100 millisecond).
setInterval(updateTime, 1000);
// initial update.
updateTime();
