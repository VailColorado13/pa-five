module.exports = {
    clean: async function (titleData) {
        let ISCIs = titleData.map(pair => pair[0])
        let titles = titleData.map(pair => pair[1])  
       
        console.log('ISCIs' , ISCIs)
        console.log('titles' , titles)

        let cleanedVals = [[null , null]]

        for (let i = 0; i < titles.length; i++) {
             if (titles[i] != cleanedVals[cleanedVals.length -1][1]) {
                cleanedVals.push([ISCIs[i], titles[i]])
            }
        }

        cleanedVals.shift()
        
        return cleanedVals
    }
}