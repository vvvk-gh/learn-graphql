### Serving over HTTP using Apollo

- to expose the API over HTTP we use Apollo library

once the server is up and running we will get a Apollo sandbox

Its the tool that helps us to create graphql quieries

In the sandox
its shows suggestions based on our schema provided in the code

Types of requests we can make are the following

```
fragments
mutations
query
```

Executing the following will give the output that our resolver has for that field

```
query {
    greeting
}
```

we can also execute with empty brackets as by default its query operation

```
{
    greeting
}
```

They both outputs the same which is a object.

our output is stored always store inside a data field property

##### output

```
{
    "data" : {
        "greeting" : 'Hello World!'
    }
}
```

schema polling enabled thats every sec its re-requesting the schema to verify thats its updated

### Normal flow of a request

```
the client (Apollo) sends a request over HTTP as post request to the server thats running locally (localhost:9000).

the server (localhost:9000) sends the some JSON data back.

```

by default all GraphQL request are `HTTP POST` requests

### Miscellaneous

##### To know PID of the port running

```
lsof -i:<portnumber>
```

the above gives the pid and we can kill the process with it.

##### To kill the Process with PID

```
kill -9 <pid>
```
