const parseMpesaDate = (dateString) => {
  // Ensure the date string is 14 characters long (YYYYMMDDHHMMSS)
  if (dateString.length !== 14) {
    throw new Error("Invalid date format. Expected format: YYYYMMDDHHMMSS");
  }

  // Extract the year, month, day, hour, minute, and second from the string
  const year = parseInt(dateString.substring(0, 4), 10);
  const month = parseInt(dateString.substring(4, 6), 10) - 1; // Months are 0-indexed in JS Date
  const day = parseInt(dateString.substring(6, 8), 10);
  const hour = parseInt(dateString.substring(8, 10), 10);
  const minute = parseInt(dateString.substring(10, 12), 10);
  const second = parseInt(dateString.substring(12, 14), 10);

  // Define months array for formatting
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Helper function to get the correct suffix for the day
  function getDaySuffix(_day) {
    if (_day >= 11 && _day <= 13) return "th";
    switch (_day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  // Format the date in the desired format
  return `${day}${getDaySuffix(day)} ${months[month]} ${year}, ${hour
    .toString()
    .padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second
    .toString()
    .padStart(2, "0")} hrs`;
};

export default parseMpesaDate;
