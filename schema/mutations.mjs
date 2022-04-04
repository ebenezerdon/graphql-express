import { GraphQLString } from 'graphql'
import NoteType from './types.mjs'
import db from '../models/index.js'

const noteMutation = {
  addNote: {
    type: NoteType,
    args: {
      title: { type: GraphQLString },
      body: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
      const { title, body, tags } = args
      const newNote = await db.Note.create({ title, body, tags })
      return newNote
    },
  },
}

export { noteMutation }
