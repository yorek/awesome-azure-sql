import * as yaml from 'js-yaml';
import * as fs from 'fs';
import {Tags} from './tags';

type Temp = {
    title: string;
    description: string;
    website: string;
    author: string;
    url: string | null;
    tags: Array<string>[];
    websiteTags: Array<string>[];
  };

const itemsPath = "./items/";
var templates = [];
try {
  var items = fs.readdirSync(itemsPath);
  items.forEach(item => {
    var jsonData = readYamlToJSON(itemsPath + item);
    templates = templates.concat(getAwesomeObjects(jsonData));
    fs.writeFileSync('./src/data/templates.json', JSON.stringify(templates));
  });
} catch (err) {
  console.log(err.stack || String(err));
}


// *** Helper Functions ****/

/**
 * Converts YAML data to JSON format.
 * @param filename - The path to the YAML file.
 * @returns The JSON representation of the YAML data.
 */
function readYamlToJSON(filename) {
    let yamlData = yaml.load(fs.readFileSync(filename, 'utf8'));
    return JSON.parse(JSON.stringify(yamlData));
  };
  
  /**
   * Extracts relevant data from the JSON data and creates an array of user objects.
   * @param jsonData - The JSON data obtained from the YAML file.
   * @returns An array of user objects.
   */
  function getAwesomeObjects(jsonData) {
    var awesomeObjects = [];
    for (let [key, value] of Object.entries(jsonData)) {
      let temp = value as Temp;
      let allTags = []
      if (!!temp.tags){
        allTags.push(..._getUniqueTags(temp.tags));
      }
      if (!!temp.websiteTags){
        allTags.push(..._getUniqueTags(temp.websiteTags));
      }
      awesomeObjects.push(Object.assign({}, { title: key, description: temp.description, website: temp.website, author: temp.author, source: temp.url, tags: allTags }));
    }
    return awesomeObjects;
    // get unique tags
    function _getUniqueTags(allTags) {
      let uniqueTagsList = [];
      allTags.forEach(element => {
        if (element.indexOf("/") > -1) {
          let leftTag = element.split(" / ")[0].toLowerCase().replace(/\s/g, "-");
          let rightTag = element.split(" / ")[1].toLowerCase().replace(/\s/g, "-"); 
          if (leftTag in Tags){
            uniqueTagsList.indexOf(leftTag) === -1 ? uniqueTagsList.push(leftTag) : null;
          }
          if (rightTag in Tags){ 
          uniqueTagsList.indexOf(rightTag) === -1 ? uniqueTagsList.push(rightTag) : null;
          }
        } else {
          let newTag = element.toLowerCase().replace(/\s/g, "-");
          if (newTag in Tags){ 
          uniqueTagsList.indexOf(newTag) === -1 ? uniqueTagsList.push(newTag) : null;
          }
        }
      });
      return uniqueTagsList;
    };
  };
  