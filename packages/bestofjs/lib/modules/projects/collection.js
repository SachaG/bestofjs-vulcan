/*

The main Projects collection definition file.

*/

import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import schema from './schema.js';
import resolvers from './resolvers';
import './fragments';
import './newsletter';

/*

Projects collection definition

*/
const Projects = createCollection({

  collectionName: 'Projects',

  typeName: 'Project',

  schema,
  
  resolvers,

  // mutations: getDefaultMutations('Projects'),

});

/*

Default sort

*/
Projects.addDefaultView(terms => ({
  options: {
    sort: {
      createdAt: -1
    }
  }
}));


export default Projects;
