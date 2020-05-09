let allYoMamaJokes = JSON.parse(fs.readFileSync("joe-mama.json"));

const url = require("url-escape-tag");
// const program = require("commander");
const request = require("request");
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;
var pfp_url = ""

args.send(allYoMamaJokes[Math.floor(Math.random() * allYoMamaJokes.length)]);
