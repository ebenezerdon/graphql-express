import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { noteMutation } from './schema/mutations.mjs'
import noteQueries from './schema/queries.mjs'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...noteQueries,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...noteMutation,
    },
  }),
})

const app = express()
const server = new ApolloServer({ schema })

await server.start()

server.applyMiddleware({ app })

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`🚀 Find me on http://localhost:${port + server.graphqlPath}`)
})
