import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') { 
  // In development, use a global variable so the MongoDB client is only created once
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production, create a new MongoClient instance for each request
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export default clientPromise
