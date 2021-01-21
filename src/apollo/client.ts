import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
            query {
                sayHello(name: "Viktor")
            }
        `,
    })
    .then((result) => console.log(result));

export default client;
