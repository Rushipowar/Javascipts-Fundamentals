function extract(pattern, string){

    let regex = new RegExp(pattern)

    let match = string.match(regex)

    if(match){
        return match.slice(1)
    }else{
        return null
    }
}

const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
const dateString = "30-01-2024";

const date = extract(datePattern, dateString);

if (date) {
    const [day, month, year] = date;
    console.log('Matched Date:');
    console.log('Day:', day);
    console.log('Month:', month);
    console.log('Year:', year);
} else {
    console.log('No match found.');
}