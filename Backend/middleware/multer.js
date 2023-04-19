// const multer = require('multer')

// const storage = multer.memoryStorage();

// exports.singleUpload = multer({ storage , limits:{fieldSize:2*1024*1024}}).single("file");
const multer = require('multer')
const storage = multer.memoryStorage();
exports.singleUpload = multer({storage}).single("file");



