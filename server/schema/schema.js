const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      resolve(parent, args) {
        // This is a placeholder - you would typically fetch data from a database
        return {
          id: '1',
          title: 'Sample Task',
          weight: 5,
          description: 'This is a sample task'
        };
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
