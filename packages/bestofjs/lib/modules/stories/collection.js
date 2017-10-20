/*

The main Stories collection definition file.

*/

import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import schema from './schema.js';

/*

Stories collection definition

*/
const Stories = createCollection({

  collectionName: 'Stories',

  typeName: 'Story',

  schema,
  
  resolvers: getDefaultResolvers('Stories'),

  mutations: getDefaultMutations('Stories'),

});

/*

Permissions for members (regular users)

*/
const membersActions = [
  'stories.new',
  'stories.edit.own',
  'stories.remove.own',
];
Users.groups.members.can(membersActions);

/*

Default sort

*/
Stories.addDefaultView(terms => ({
  options: {
    sort: {
      createdAt: -1
    }
  }
}));

export default Stories;
