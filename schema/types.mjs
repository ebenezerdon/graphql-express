import { GraphQLString, GraphQLObjectType } from 'graphql'

const NoteType = new GraphQLObjectType({
  name: 'Note',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
})

export default NoteType
