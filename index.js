
import express from "express";
const app=express();
import { ruruHTML } from 'ruru/server';
import { createYoga } from 'graphql-yoga'
import { schema } from "./src/graphql/index.js";
 

const yoga = createYoga({
    schema,
  })
app.all("/graphql",yoga)
//help to intract with server
app.get("/", (req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })
app.listen(3000);