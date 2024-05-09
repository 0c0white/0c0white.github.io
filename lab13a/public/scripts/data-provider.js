const path = require("path");
const fs = require("fs");
// for now, we will get our data by reading the provided json file
const file = process.env.DATAFILE;
module.exports = {
    filename: file,
    data: stocks
    };