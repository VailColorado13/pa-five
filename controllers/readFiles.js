const mammoth = require('mammoth')
const fs = require('fs')
const { raw } = require('express')
const e = require('express')

module.exports = {
    readAndExtract: async function readFiles() {
        const files = fs.readdirSync('./uploads')
        fileZero = files[0]
      //  const rawText = await mammoth.extractRawText({path: './uploads' + '/' + fileZero})
        return [files, rawText.value]
    },
      
    getJobNumber: async function (rawText) {
      const regex = /(?:JOB #:).*(?:ISCI)/gm
      const match = rawText.match(regex) 
      const jobNumber = match[0].substring(6, match[0].length -4).trim()
      if (jobNumber) return jobNumber
      else return 'INSERT JOB NUMBER'
    }, 

    getClientName: async function (rawText) {
      const regex = /(?:CLIENT:).*(?:CAMPAIGN)/gm
      const match = rawText.match(regex) 
      const clientName = match[0].substring(7, match[0].length -8).trim()
      if (clientName) return clientName
      else return 'INSERT CLIENT NAME'
    }


}
  
