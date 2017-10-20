/*

Three resolvers are defined:

- list (e.g.: ProjectsList(terms: JSON, offset: Int, limit: Int) )
- single (e.g.: ProjectsSingle(_id: String) )
- listTotal (e.g.: ProjectsTotal )

*/

// basic list, single, and total query resolvers
const resolvers = {

  list: {

    name: 'ProjectsList',

    async resolver(root, {terms = {}}, context, info) {
      const url = `https://bestofjs-api-v1.now.sh/projects?$skip=2`;
      const data = HTTP.get(url);

      const content = JSON.parse(data.content);
      const projects = content.data;
      return projects;
      // return context.currentUser ? projects : [];
    },

  },

  single: {
    
    name: 'ProjectsSingle',

    resolver(root, {documentId}, context) {
      return {}
    },
  
  },

  total: {
    
    name: 'ProjectsTotal',
    
    async resolver(root, {terms = {}}, context) {
      const url = `https://bestofjs-api-v1.now.sh/projects?$skip=2`;
      const data = HTTP.get(url);
      const content = JSON.parse(data.content);
      const projects = content.data;
      return projects.length;
    },
  
  }
};

export default resolvers;