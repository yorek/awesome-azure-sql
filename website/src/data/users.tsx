/**
 * This file contains the implementation for managing user data in the application.
 * It includes functions for reading YAML files, converting them to JSON, and extracting
 * relevant data to create user objects. It also provides functions for sorting and
 * organizing the user data.
 */

/* eslint-disable global-require */

import { sortBy } from '../utils/jsUtils';
import { TagType, User, Tags, Temp } from './tags';
import * as yaml from 'js-yaml';
import * as fs from 'fs-web';

const itemsPath = "../items/";
var templates = [];
try {
  var items = fs.readdirSync(itemsPath);
  items.forEach(item => {
    var jsonData = readYamlToJSON(itemsPath + item);
    templates = templates.concat(getAwesomeObjects(jsonData));
  });
} catch (err) {
  console.log(err.stack || String(err));
}

// *** ADDING DATA TO THE GALLERY ****/

// Currently using Custom Issues on Repo

// *************** CARD DATA STARTS HERE ***********************
// Add your site to this list
// prettier-ignore
console.log(templates);
export const unsortedUsers: User[] = templates as User[]

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = unsortedUsers;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  return result;
}

export const sortedUsers = sortUsers();


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
    awesomeObjects.push(Object.assign({}, { title: key, description: temp.description, website: temp.website, author: temp.author, source: temp.url, tags: _getUniqueTags(temp.tags) }));
  }
  return awesomeObjects;
  // get unique tags
  function _getUniqueTags(allTags) {
    let uniqueTagsList = [];
    allTags.forEach(element => {
      if (element.indexOf("/") > -1) {
        uniqueTagsList.indexOf(element.split(" / ")[0]) === -1 ? uniqueTagsList.push(element.split(" / ")[0].toLowerCase().replace(/\s/g, "-")) : null;
        uniqueTagsList.indexOf(element.split(" / ")[1]) === -1 ? uniqueTagsList.push(element.split(" / ")[1].toLowerCase().replace(/\s/g, "-")) : null;
      } else {
        uniqueTagsList.push(element.toLowerCase().replace(/\s/g, "-"));
      }
    });
    return uniqueTagsList;
  };
};
