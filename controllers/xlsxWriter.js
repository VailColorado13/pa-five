const excel = require('exceljs')
const readFiles = require('../controllers/readFiles')



module.exports = {
    write: async function (fileData) {
       const workbook = new excel.Workbook()
       await workbook.xlsx.readFile('./template.xlsx')
       const worksheet = workbook.getWorksheet('Sheet1')

       //rawText = rawText.replace(/[\t\r\n]+/g, ' ')
      
       //const jobNumber = await readFiles.getJobNumber(rawText)
       //const clientName = await readFiles.getClientName(rawText)

      // worksheet.getCell('C6').value = jobNumber
      // worksheet.getCell('C8').value = clientName
    
    
       for (let i = 0; i < fileData.length; i++) {
          worksheet.getCell(`B${15+i}`).value = fileData[i][0]
          worksheet.getCell(`C${15+i}`).value = fileData[i][1]
       } 
       await workbook.xlsx.writeFile('./newEstimate.xlsx')
    }
}