/*

A SimpleSchema-compatible JSON schema

*/

const schema = {

  // default properties

  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  
  // updatedAt: {
  //   type: Date,
  //   optional: true,
  //   viewableBy: ['guests'],
  // },

  // createdAt: {
  //   type: Date,
  //   optional: true,
  //   viewableBy: ['guests'],
  // },

  // userId: {
  //   type: String,
  //   optional: true,
  //   viewableBy: ['guests'],
  //   resolveAs: {
  //     fieldName: 'user',
  //     type: 'User',
  //     resolver: (movie, args, context) => {
  //       return context.Users.findOne({ _id: movie.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
  //     },
  //     addOriginalField: true
  //   }
  // },
  
  name: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },

  repository: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  
  fullName: {
    type: String,
    optional: true,
    viewableBy: ['members'],
    resolveAs: {
      type: 'String',
      resolver: (document) => {
        return document.github.full_name;
      }
    }
  },

  description: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    resolveAs: {
      type: 'String',
      resolver: (document) => {
        return document.github.description;
      }
    }
  },

  stargazers: {
    type: Number,
    optional: true,
    viewableBy: ['guests'],
    resolveAs: {
      type: 'String',
      resolver: (document) => {
        return document.github.stargazers_count;
      }
    }
  },

};

export default schema;
