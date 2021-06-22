// format Date example > Mon, 5 Feb

const dayWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
const monthYear = [
	"Jan",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];

//Format Date
export const formatDate = (d) => {
	const today = new Date(d);

	const day = today.getUTCDay();
	const date = today.getUTCDate();
	const month = today.getUTCMonth();

	return `${dayWeek[day]}, ${date} ${monthYear[month]}`;
};
//return tomorrow & week
export const dayCurrent = (date, i) => {
	if (i !== 0) return formatDate(date);
	return "Tomorrow";
};

//replace .
export const replacePoint = (visibility) =>
	Math.round((visibility * 10) / 10)
		.toFixed(1)
		.replace(".", ",");

//

// convert celsius to fahrenheit

export const convertToFahrenheit = (celsius) => {
	return Math.round((celsius * 9) / 5 + 32);
};

// convert unitTemp
export const setUnitTemp = (tempCF) => {
	return tempCF === "celsius" ? "°C" : "°F";
};

export const setConvertCToF = (temp, tempCF) => {
	if (tempCF === "celsius") {
		return Math.round(temp);
	}

	if (tempCF === "fahrenheit") {
		return convertToFahrenheit(temp);
	}
};
