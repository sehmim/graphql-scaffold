import { createServer } from '@graphql-yoga/common'


const server = createServer({
    schema: {
      typeDefs:
      `type Post {
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
        }`,
      resolvers: {
        Query: {
        },
      },
    },
  })

server.start() 