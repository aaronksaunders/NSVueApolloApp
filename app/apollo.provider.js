const Vue = require("./nativescript-vue");

const ApolloClient = require('apollo-client').default;
const HttpLink = require('apollo-link-http').HttpLink;
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache;
const VueApollo = require('vue-apollo').default;


const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: "https://v7mnw3m03.lp.gql.zone/graphql"
})

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

// Install the vue plugin
Vue.use(VueApollo)

module.exports = apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

//console.log("apolloProvider", apolloProvider)