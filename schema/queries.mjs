import { GraphQLList } from 'graphql'
import NoteType from './types.mjs'
import db from '../models/index.js'

const noteQueries = {
  getAllNotes: {
    type: new GraphQLList(NoteType),
    resolve: async () => db.Note.findAll(),
  },
}

export default noteQueries
