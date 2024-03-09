var { graphql, buildSchema } = require("graphql")
var express  = require ("express");
const app=express();
var {createHandler} = require('graphql-http/lib/use/express')
var {ruruHTML} = require('ruru/server')
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    age:Int
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!"
  },
  age: () => {
    return 20
  },
}


app.all(
    "/graphql",
    createHandler({
      schema: schema,
      rootValue: root,
    })
  )
//help to intract with server
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })
app.listen(4000);