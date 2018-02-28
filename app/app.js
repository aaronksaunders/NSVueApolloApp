const Vue = require("./nativescript-vue");
const VueRouter = require('./vue-router')
const apolloProvider = require('./apollo.provider')

Vue.use(VueRouter)

const HomePage = require("./HomePage");
const PageTwo = require("./PageTwo");

HomePage.apolloProvider = apolloProvider

Vue.config.silent = false

const router = new VueRouter({
  pageRouting: true,
  routes: [{
      path: '/route-1',
      component: HomePage
    },
    {
      path: '/route-2',
      component: PageTwo
    },
    {
      path: '*',
      redirect: '/route-1'
    }
  ]
})

console.log("apolloProvider", apolloProvider)

new Vue({
  components: {},
  router,
  apolloProvider,
  created() {
    router.replace('/route-1')
  },
}).$start()