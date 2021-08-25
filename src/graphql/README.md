# Graphql

- Server & Clients

  - Backend
  - Frontend

## GraphQL vs REST

- **Who decides data structure ?**
  - GraphQL - cliemt
  - REST - server
- **Caching ?**
  - GraphQL - No automatic caching
  - REST - automatic in browser
- **Versioning ?**
  - GraphQL - No
  - REST - Yes
- **Data format ?**
  - GraphQL - Json only
  - REST - multiple formats
- **Data fetching ?**
  - GraphQL - single request
  - REST - multiple request & so multiple roundtrips
- GraphQL has single endpoint unlike REST with multiple endpoints
- REST and GraphQL are two API design approaches
- GraphQL is a query language, whereas REST is an architectural pattern.
- No over/under fetching like in REST
- Type system - The presence of a strong type system, which is expressed as a schema, dramatically reduces the effort required to implement queries. The type system stipulates the data structure the server can return
  - Types are defined in server side schema using the GraphQL Schema Definition Language (SDL).
  - This schema acts as contract between server & client
