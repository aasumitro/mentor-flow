import dayjs from "dayjs";

export const timeReference: string[] = [
  "12:00am",
  "12:15am",
  "12:30am",
  "12:45am",
  "01:00am",
  "01:15am",
  "01:30am",
  "01:45am",
  "02:00am",
  "02:15am",
  "02:30am",
  "02:45am",
  "03:00am",
  "03:15am",
  "03:30am",
  "03:45am",
  "04:00am",
  "04:15am",
  "04:30am",
  "04:45am",
  "05:00am",
  "05:15am",
  "05:30am",
  "05:45am",
  "06:00am",
  "06:15am",
  "06:30am",
  "06:45am",
  "07:00am",
  "07:15am",
  "07:30am",
  "07:45am",
  "08:00am",
  "08:15am",
  "08:30am",
  "08:45am",
  "09:00am",
  "09:15am",
  "09:30am",
  "09:45am",
  "10:00am",
  "10:15am",
  "10:30am",
  "10:45am",
  "11:00am",
  "11:15am",
  "11:30am",
  "11:45am",
  "12:00pm",
  "12:15pm",
  "12:30pm",
  "12:45pm",
  "01:00pm",
  "01:15pm",
  "01:30pm",
  "01:45pm",
  "02:00pm",
  "02:15pm",
  "02:30pm",
  "02:45pm",
  "03:00pm",
  "03:15pm",
  "03:30pm",
  "03:45pm",
  "04:00pm",
  "04:15pm",
  "04:30pm",
  "04:45pm",
  "05:00pm",
  "05:15pm",
  "05:30pm",
  "05:45pm",
  "06:00pm",
  "06:15pm",
  "06:30pm",
  "06:45pm",
  "07:00pm",
  "07:15pm",
  "07:30pm",
  "07:45pm",
  "08:00pm",
  "08:15pm",
  "08:30pm",
  "08:45pm",
  "09:00pm",
  "09:15pm",
  "09:30pm",
  "09:45pm",
  "10:00pm",
  "10:15pm",
  "10:30pm",
  "10:45pm",
  "11:00pm",
  "11:15pm",
  "11:30pm",
  "11:45pm",
];

export const timezoneReference: string[] = [
  "Asia/Baku",
  "Asia/Dhaka",
  "Asia/Brunei",
  "Asia/Thimphu",
  "Asia/Shanghai",
  "Asia/Urumqi",
  "Europe/Helsinki",
  "Europe/Paris",
  "Europe/London",
  "Europe/Athens",
  "Asia/Hong_Kong",
  "Europe/Budapest",
  "Asia/Jakarta",
  "Asia/Makassar",
  "Asia/Jayapura",
  "Europe/Dublin",
  "Asia/Jerusalem",
  "Asia/Kolkata",
  "Asia/Baghdad",
  "Asia/Tehran",
  "Europe/Rome",
  "Asia/Tokyo",
  "Asia/Seoul",
  "Europe/Luxembourg",
  "Europe/Monaco",
  "Europe/Chisinau",
  "Asia/Macau",
  "Europe/Malta",
  "Asia/Kuala_Lumpur",
  "Europe/Amsterdam",
  "Europe/Oslo",
  "Asia/Kathmandu",
  "Asia/Manila",
  "Asia/Gaza",
  "Asia/Hebron",
  "Europe/Moscow",
  "Asia/Tomsk",
  "Europe/Stockholm",
  "Asia/Singapore",
  "Asia/Bangkok",
  "Asia/Dushanbe",
  "Asia/Taipei",
  "Europe/Kiev",
  "Pacific/Wake",
  "America/New_York",
  "America/Detroit",
  "America/Chicago",
  "America/Menominee",
  "America/Denver",
  "America/Boise",
  "America/Phoenix",
  "America/Los_Angeles",
  "America/Anchorage",
  "America/Juneau",
  "America/Sitka",
  "America/Metlakatla",
  "America/Yakutat",
  "America/Nome",
  "America/Adak",
  "Africa/Johannesburg",
];

export const intToDay = (numOfWeek: number) =>
  dayjs().day(numOfWeek).format("dddd").toString();

export const intToTime = (timeInt: number): string => {
  if (!Number.isInteger(timeInt)) {
    return "";
  }
  const hour = Math.floor(timeInt / 100);
  const minute = timeInt % 100;
  const period = hour < 12 ? "am" : "pm";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}${period}`;
};

export const addOneHour = (time: number): number => {
  const hours = Math.floor(time / 100);
  const minutes = time % 100;
  let newHours = hours + 1;
  const newMinutes = minutes;
  if (newHours >= 24) {
    newHours -= 24;
  }
  const newTime = newHours * 100 + newMinutes;
  return newTime;
};

export const strTimeToInt = (timeStr: string): number => {
  const cleanTimeString = timeStr.replace(/(am|pm)/i, "").trim();
  const [hours, minutes] = cleanTimeString.split(":").map(Number);
  let convertedHours = hours;
  if (timeStr.toLowerCase().includes("pm") && hours !== 12) {
    convertedHours = hours + 12;
  } else if (timeStr.toLowerCase().includes("am") && hours === 12) {
    convertedHours = 0; // Midnight case
  }
  const timeInt = convertedHours * 100 + minutes;
  return timeInt;
};
