var { graphql, buildSchema } = require("graphql")

var schema = buildSchema(`
  type Query {
    hello: String
    age:Int
  }
`)

var rootValue = { 
    hello: () => { return "Hello world!"},
     age: ()=>{return 25}
}

var source = "{ age }"

graphql({ schema, source, rootValue }).then(response => {
  console.log(response)
})