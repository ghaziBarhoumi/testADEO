const data = require('./data');

'use strict'

const args = process.argv
var output = true

function isEmpty(arr) {
    return (Array.isArray(arr) && arr.length)
}

// This function filters out every animal that does not match the string pattern
const removeNonMatching = (searchedStr, person) => {
    return person.animals.map((animal) => {
        if (animal.name.toLowerCase().includes(searchedStr.toLowerCase())) {
            return animal;
        }
    }).filter(e => e)
}

const filter = (searchedStr) => {
    const newList = data.filter(q => {
        let newCountry = q
        newCountry.people = q.people.filter(p => {
            let newPerson = p
            newPerson.animals = removeNonMatching(searchedStr, p)

            // The 'animals' entry will be removed if there is nothing left inside
            return isEmpty(newPerson.animals)
        })

        // The 'people' entry will be removed if there is nothing left inside
        return (isEmpty(newCountry.people))
    });

    // prints out the filtered list if there is any match
    if (output) {
        console.log((!isEmpty(newList)) ? 'Nothing found' : JSON.stringify(newList))
    }
    return (!isEmpty(newList)) ? 'Nothing found' : JSON.stringify(newList)
}

const count = (list) => {
    let dataList
    list?  dataList = list : dataList = data
    const newList = dataList.map((country) => {
        country.people.map((person) => {
            person.name = `${person.name} [${person.animals.length}]`
            return person
        })
        country.name = `${country.name} [${country.people.length}]`
        return country
    })
    console.log(JSON.stringify(newList))
    return JSON.stringify(newList)
}

// USAGE: node app.js --filter=[PATTERN] OR node app.js filter=[PATTERN]
// USAGE: node app.js --count OR node app.js count

try {
    const cmd = args[2].split("=");
    if (cmd[0] === '--filter' || cmd[0] === 'filter') {
        if(args[3]==='--count' || args[3]==='count')
        {
            output = false
            let x = JSON.parse(filter(cmd[1]))
            count(x);
            output = true
        } else filter(cmd[1])
    } else if (cmd[0] === '--count' || cmd[0] === 'count') {
        if (args[3]) {
            const cmd2 = args[3].split("=")
        if(cmd2[0]==='--filter' || cmd2[0]==='filter')
        {
            output = false
            let x = JSON.parse(filter(cmd2[1]))
            count(x)
            output = true
        }
        } else 
            count()
        } else 
        {
        console.log('Wrong arguments')
    }
} catch(err) {
    throw err
}


module.exports = {
    count, filter
}
