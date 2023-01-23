const express = require('express')
const fs = require('fs')
const path = require('path')
const uploader = require('../uploader')
const readFiles = require('../controllers/readFiles')
const titleParser = require('../controllers/titleParser')
const xlsxWriter = require('../controllers/xlsxWriter')
const Job = require("../model/Job");
const mammoth = require('mammoth')




module.exports = {
    pageLoad: async (req, res) => {      
        res.render('index', {titleData: [[],[]], downloadEnabled: false})
    },

 
    createJob: async (req, res) => {
      console.log(req.body)
        try {
          await Job.create({
            titles: req.body.nameArray,
            rawText: req.body.rawText
          })
          console.log("Scripts have been added!")
        } catch (err) {
          console.log(err);
        }
        res.redirect('/written')
      },

     pageLoadWithTableData: async (req, res) => {
        const fileData = await Job.findOne({}, {}, { sort: { _id: -1 } })
        const titleData = await titleParser.parse(fileData.titles)
       // const text = await mammoth.convertToHtml({path: fileData.rawText})
       // console.log(text)
        const writeXlsx = await xlsxWriter.write(titleData, fileData[1]) 

        res.render('index', {titleData: titleData, downloadEnabled: true})  
        
        
     },

    sendEstimate: (req, res) => {
        const filePath = path.join(__dirname, '..', 'newEstimate.xlsx')
        res.sendFile(filePath);
    },

    uploadFiles: async (req, res, next) => {
        try {
        const uploadPromise = new Promise((resolve, reject) => {
            uploader(req, res, (error) => {if (error) {reject(error)}
             else {resolve()}
            })
            res.redirect('/readFiles')
          })
        }catch(err) {console.log('uploader error',err)}
    }, 

    readFiles: async (req, res) => {
    console.log('reading files')
    const fileData = req.body
    // const fileData = await readFiles.readAndExtract()
    const titleData = await titleParser.parse(fileData)
    const writeXlsx = await xlsxWriter.write(titleData, fileData[1]) 
    res.render('index', {titleData: titleData, downloadEnabled: true})
  
 
    }, 

}





