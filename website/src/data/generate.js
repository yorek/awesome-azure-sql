"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yaml = require("js-yaml");
var fs = require("fs");
var tags_1 = require("./tags");
var itemsPath = "./items/";
var templates = [];
try {
    var items = fs.readdirSync(itemsPath);
    items.forEach(function (item) {
        var jsonData = readYamlToJSON(itemsPath + item);
        templates = templates.concat(getAwesomeObjects(jsonData));
        fs.writeFileSync('./src/data/templates.json', JSON.stringify(templates));
    });
}
catch (err) {
    console.log(err.stack || String(err));
}
// *** Helper Functions ****/
/**
 * Converts YAML data to JSON format.
 * @param filename - The path to the YAML file.
 * @returns The JSON representation of the YAML data.
 */
function readYamlToJSON(filename) {
    var yamlData = yaml.load(fs.readFileSync(filename, 'utf8'));
    return JSON.parse(JSON.stringify(yamlData));
}
;
/**
 * Extracts relevant data from the JSON data and creates an array of user objects.
 * @param jsonData - The JSON data obtained from the YAML file.
 * @returns An array of user objects.
 */
function getAwesomeObjects(jsonData) {
    var awesomeObjects = [];
    for (var _i = 0, _a = Object.entries(jsonData); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var temp = value;
        var allTags = [];
        if (!!temp.tags) {
            allTags.push.apply(allTags, _getUniqueTags(temp.tags));
        }
        if (!!temp.websiteTags) {
            allTags.push.apply(allTags, _getUniqueTags(temp.websiteTags));
        }
        awesomeObjects.push(Object.assign({}, { title: key, description: temp.description, website: temp.website, author: temp.author, source: temp.url, tags: allTags }));
    }
    return awesomeObjects;
    // get unique tags
    function _getUniqueTags(allTags) {
        var uniqueTagsList = [];
        allTags.forEach(function (element) {
            if (element.indexOf("/") > -1) {
                var leftTag = element.split(" / ")[0].toLowerCase().replace(/\s/g, "-");
                var rightTag = element.split(" / ")[1].toLowerCase().replace(/\s/g, "-");
                if (leftTag in tags_1.Tags) {
                    uniqueTagsList.indexOf(leftTag) === -1 ? uniqueTagsList.push(leftTag) : null;
                }
                if (rightTag in tags_1.Tags) {
                    uniqueTagsList.indexOf(rightTag) === -1 ? uniqueTagsList.push(rightTag) : null;
                }
            }
            else {
                var newTag = element.toLowerCase().replace(/\s/g, "-");
                if (newTag in tags_1.Tags) {
                    uniqueTagsList.indexOf(newTag) === -1 ? uniqueTagsList.push(newTag) : null;
                }
            }
        });
        return uniqueTagsList;
    }
    ;
}
;
