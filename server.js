var { graphql, buildSchema } = require("graphql")
var express  = require ("express");
const app=express();
var {createHandler} = require('graphql-http/lib/use/express')
var {ruruHTML} = require('ruru/server')
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello(name: String): String
    age:Int
    weight:Float!
    isOver18:Boolean
    hobbies:[String]!
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: (args) => {
    return "Hello"+args.name;
  },
  age: () => {
    return 20
  },
  weight:108.55,
  isOver18:true,
  hobbies:()=>["Reading","Writing"]
}


app.all(
    "/graphql",
    createHandler({
      schema: schema,
      rootValue: root,
    })
  )
//help to intract with server
app.get("/", (req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })
app.listen(4000);