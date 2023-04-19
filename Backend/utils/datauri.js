const DataURIParser =require ("datauri/parser");
const path = require('path')

exports.getDataUri = (file) => {

    const parser = new DataURIParser();
    // const extName = path.extname(file.originalName).toString()

    // return parser.format(extName, file.buffer);
    const extName = path.extname(file.originalname).toString();
    // console.log(extName);
    return parser.format(extName, file.buffer);
};
