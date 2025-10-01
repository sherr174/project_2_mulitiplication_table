function getrowsdesired() {
    /*console.log(document.getElementById('rows').value);*/
    return Number(document.getElementById('rows').value);
}

function getcolumnsdesired() {
    /*console.log(document.getElementById('cols').value);*/
    return Number(document.getElementById('cols').value);
}

function gethihglightvalue() {
    let highlightvalue = document.getElementById('highlight').value;

    if (!isNaN(highlightvalue !== '')) {
        return Number(highlightvalue);
    }
}

function creatwithhtmltable(rows, cols, highlight) {
    let string
    if (rows && cols) {
        string = "<table>\n"

        for (let row =1; row <= rows; row++) {
            if (highlight && highlight === row) {
                string += "<tr class='highlight'>\n"
            } else {
                string += "<tr>\n"
            }

            for (let col =1; col <= cols; col++) {

                if (highlight && highlight === col) {
                    string += "<td class='highlight'>\n"
                } else {
                    string += "<td>"
                }

                string += row * col
                string += "</td>\n"
            }
            string += "</tr>\n"
        }
        string += "</table>\n"
    } else {
        string = 'Provide some inputs'
    }
    document.getElementById("output").innerHTML = string;
}

/* Loop Examples
console.log('here\'s a loop for showing 1...10:\n')
for (let i = 0; i < 10; i++) {
    console.log(`${ i }\n`)
}

console.log('here\'s a d0-while for showing 1...10:\n')
let i = 0
do {
    console.log(i + `\n`)
    i++
} while (i<10)

console.log('here\'s a while for showing 1...10:\n')
let wil = 0
while (wil < 10) {
    console.log(`${ wil }\n`)
    wil++
}

console.log('here\'s a foreach loop iterating over an array showing 1...10\n')
let nums =[...Array(10).keys()]
nums.forEach(num => {
    console.log(`${ num }\n`)
})

console.log('Here\'s a multiplication table method rendered in the console with a for loop:\n')
console.log('This demos variables, concatenation, for loops, console.logging and methods, along with method paragraph')
let timestable = (to) => {
    console.log('Here\'s a times table for to ' + to + '\n')

    if (Number.isInteger(to)) {
        for (let i = 1; i <= to; i++) {
            let row = ""
            for (let j = 1; j <= to; j++) {
                row += `${i * j}\t`
            }
            console.log(row)
        }
    } else {
        console.log(`sorry, ${to} isn't a number!`)
    }
}
timestable(12)*/