import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment ProjectsFragment on Project {
    name
    fullName
    description
    stargazers
    repository
  }
`);