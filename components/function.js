export function dateConvertor(element) {
    const dateString = element; // your date string from MongoDB

    const year = '20' + dateString.substring(6); // get the year from the date string
    const month = Number(dateString.substring(3, 5)) - 1; // get the month from the date string (subtract 1 to adjust for zero-based index)
    const day = dateString.substring(0, 2); // get the day from the date string

    const date = new Date(year, month, day); // create a new Date object with the parsed values

    const options = { month: 'long', day: 'numeric', year: 'numeric' }; // options for formatting the date string
    const formattedDateString = date.toLocaleDateString('en-US', options); // format the date string using the options

    return formattedDateString
}