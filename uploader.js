const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        const dir = './uploads'
        callback(null, dir)
    },

    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})

const uploader = multer({storage: storage}).array('files')


module.exports = uploader