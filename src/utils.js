import {readFile} from 'fs/promises';

import {
    graphqlSync,
    getIntrospectionQuery,
} from 'graphql';

import { fromIntrospectionQuery } from 'graphql-2-json-schema';

const readSchema = () => {

    const typeDefs = `type Post {
        id: ID!
        title: String!
        content: String!
      }
      type Query {
        getPost(id: ID!): Post
        listPosts: [Post]!
      }
      type Mutation {
        addPost(input: PostInput): Post
        deletePost(id: ID): Boolean
        updatePost(id: ID, input: PostInput): Post
      }
      type Subscription {
        onPostChange(id: ID): Post
      }
      input PostInput {
        title: String
        content: String
      }`
      
      const resolvers = {
        Query: {}
      }
      
      const schema = {
        typeDefs,
        resolvers
      }

    // try {
    //     const data = await readFile('src/schema.graphql', 'binary')

        // console.log(JSON.stringify(data))
        const introspection = graphqlSync(schema, getIntrospectionQuery()).data;
        const jsonSchema = fromIntrospectionQuery(introspection, options);

        console.log(jsonSchema);

    // } catch (error) {
    //     console.log(error)
    // }   

}


readSchema()