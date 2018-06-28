graphql-mongo-test

#Instalation
run `npm install` then `nodemon app`

go to localhost:4000/api

#Avaialable queries
```
{
  books{
    id
    name,
    genre
  }
}
```

```
{
  authors{
    id,
    name,
    age
  }
}
```

```
{
  book(id: "ID-Of-BOOk"){
    id,
    name,
    genre,
    author{
     name
    }
  }
}
```

for more click on "Docs" in the right side of Graphiql
