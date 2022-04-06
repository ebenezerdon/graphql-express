import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()

await server.start()

server.applyMiddleware({ app })

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`🚀 Find me on http://localhost:${port}`)
})
