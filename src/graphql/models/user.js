export const TypeDefs = `
  type Query {
    user: User
  }

  type Mutation{
    createUser(user:newUserInput!):User
  }
  input newUserInput{
    name: String!
    age:Int!
  }
  type User {
    id: Int
    name: String
    age:Int
  }
`;

export const resolvers = {
  Query: {
    user: () => {
      return {
        id: 1,
        name: "harsh"
      };
    },

  },
  Mutation:{
      createUser:(_,{user})=>{
        //insert into db
        return{
          id:1,
         ...user
        }
        console.log(args)
       console.log('user created');
      }
  },
  User: {
    name: (obj) => {
      return obj.name.trim().toUpperCase();
    }
  }
};
