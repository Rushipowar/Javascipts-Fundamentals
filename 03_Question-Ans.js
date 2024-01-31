function searchCharacter(string, character){

    let regex = new RegExp(`[${character}]`)

    let match = string.match(regex)

    return match || []
}

let test = "Hello All 1234 Sections!"

let digitMatch = searchCharacter(test, '0-9')
console.log(digitMatch)

let upperCase = searchCharacter(test, 'A-Z')
console.log(upperCase)

let lowerCase = searchCharacter(test, 'a-z')
console.log(lowerCase)

let specialChar = searchCharacter(test, '!@#$%^&*()_+')
console.log(specialChar)