var { graphql, buildSchema,GraphQLObjectType, GraphQLSchema, GraphQLBoolean, GraphQLString, GraphQLInt } = require("graphql")
var express  = require ("express");
const app=express();
var {createHandler} = require('graphql-http/lib/use/express')
var {ruruHTML} = require('ruru/server')
// Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello(name: String): String
//     age:Int
//     weight:Float!
//     isOver18:Boolean
//     hobbies:[String]!

//     user:User
//   }

//   type User{
//     id:Int
//     name:String

//     posts:[posts]
    
//   }

// `)
// const User = new GraphQLObjectType({
//   name:'User', //parent
//   fields:{
//     id:{
//       type:GraphQLInt
//     },
//     name: {
//       type : GraphQLString,
//       resolve:(obj)=>{
//         console.log(obj)
//         return obj.name.toUpperCase();
//       }
//   }
// }
// })
// //first approach
// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//       hello: {
//         type: GraphQLString,
//         resolve: () => {
//           return "hello harsh";
//         },
//       },
//       user:{
//         type:User,
//         resolve:()=>{
//           return{
//             id:1,
//             name:"harsh", //parent does not have resolver then this print
//           }
//         }
//       }
//     }
//   })
// });



// The root provides a resolver function for each API endpoint
// var root = {
//   hello: (args) => {
//     return "Hello"+args.name;
//   },
//   age: () => {
//     return 20
//   },
//   weight:108.55,
//   isOver18:true,
//   hobbies:()=>["Reading","Writing"],
//   user: ()=>{
//     return {
//        id:1,
//        name:"harsh"
//     }
//   }
// }


app.all(
    "/graphql",
    createHandler({
      schema: schema
    })
  )
//help to intract with server
app.get("/", (req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })
app.listen(4000);