
//grab data from the DOM and store it in a 2D array (arrOfVals) with the format [[ISCI, title]]
let rows = document.querySelectorAll("table tr")
let arrayOfRows = Array.from(rows)


let arrOfVals = arrayOfRows.map(row => row.innerText)
arrOfVals = arrOfVals.filter(val => val !== '\t' && val !== 'ISCI\tTitle')
arrOfVals = arrOfVals.map(val => val.split('\t'))


let ISCIs = arrOfVals.map(pair => pair[0])
let titles = arrOfVals.map(pair => pair[1])


let cleanedVals = [[null , null]]

for (let i = 0; i < titles.length; i++) {
    if (titles[i] != cleanedVals[cleanedVals.length -1][1]) {
        cleanedVals.push([ISCIs[i], titles[i]])
    }
}

cleanedVals.shift()

console.log(cleanedVals)

 


//________________________________________________\\


async function addRows() {
    for (let i = 0; i<= cleanedVals.length -2; i++) {
        document.querySelector("#generalView > div.tabPanel > div:nth-child(14) > div:nth-child(2) > a").click()
    }
}

function addData() {
    for (let i = 0; i < cleanedVals.length; i++) {
        document.getElementsByName(`creativeCodes[${i}].MediaId`)[0].value =  cleanedVals[i][0]
        document.getElementsByName(`creativeCodes[${i}].Title`)[0].value =  cleanedVals[i][1]        
    }
}

async function executor () {
    await addRows()
    addData()
} 
executor()




console.log(cleanedVals, addRows.toString(), addData.toString(), executor.toString() )

