/**
 * This file contains the implementation for managing user data in the application.
 * It includes functions for reading YAML files, converting them to JSON, and extracting
 * relevant data to create user objects. It also provides functions for sorting and
 * organizing the user data.
 */

/* eslint-disable global-require */

import { sortBy } from '../utils/jsUtils';
import { TagType, User, Tags } from './tags';
import templates from './templates.json';

// *** ADDING DATA TO THE GALLERY ****/

// Currently using Custom Issues on Repo

// *************** CARD DATA STARTS HERE ***********************
// Add your site to this list
// prettier-ignore

export const unsortedUsers: User[] = templates as User[]

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = unsortedUsers;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  return result;
}

export const sortedUsers = sortUsers();
