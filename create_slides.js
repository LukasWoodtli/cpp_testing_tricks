
const fs = require('fs');
const { templates } = require('handlebars');
const Handlebars = require("handlebars");

const  indexTemplateCode = fs.readFileSync(__dirname + '/presentation/templates/index.hbs').toString();

const template = Handlebars.compile(indexTemplateCode);

const generatedIndexCode = template({ 
    dontEditNote: "This file is generated! Do not edit!",
    hello: ["Hello", "World"] });

fs.writeFile(__dirname + '/presentation/index.html', generatedIndexCode, function (err) {
    if (err) return console.log(err);
});
