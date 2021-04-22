import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import buildSchema from './graphql/schema'

const PORT = process.env.PORT || 4000

async function bootstrap() {
  const schema = await buildSchema()

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    playground: process.env.NODE_ENV === 'development',
  })

  // Start the server
  const { url } = await server.listen(PORT)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
