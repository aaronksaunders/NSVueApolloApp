const gql = require('graphql-tag')

const ExchangeRateQuery = gql `
    query rates($currency: String!) {
      rates(currency: $currency) {
        currency
        rates {
          currency
          rate
        }
      }
    }
  `;

module.exports = {
    name: 'home-page',
    template: `
    <Page>
        <ActionBar :title="$route.path" />
        <stack-layout>
            <Label  textWrap="true"
                style="background-color: green; 
                font-size: 30; 
                text-align: center;
                color: white" 
                text="Hello from SFC w/Router - HOME PAGE">
            </Label>
            <Button text="Button" @tap="$router.push('/route-2')" />
           <Label>{{filteredRates}}</Label> 
        </stack-layout>
    </Page>
    `,
    created: function () {
        console.log("created home page..")
        // console.log(this.$apollo)

    },
    computed: {
        // here we filter the results of the query to get
        // just a subset of the elements
        filteredRates() {
            console.log("in filteredRates")
            if (!this.rates) return [];
            return this.rates.rates.filter(
                ({
                    currency
                }) =>
                currency !== this.currentCurrency &&
                (["USD", "BTC", "LTC", "EUR", "JPY", "ETH"].indexOf(currency) !== -1)
            )
        }
    },
    // specific varoables that we are using in this simple
    // application
    data() {
        return {
            msg: 'Vue.js App - GraphQL With Apollo Client',
            rates: null,
            isLoading: true,
            currentCurrency: "BTC"
        }
    },
    methods: {
        // here we set the value for the specific currency to use
        // as the base for the conversion
        selectedCurrency(_value) {
            this.currentCurrency = _value.currency
        }
    },
    // This is the code to support the apollo client
    // queryingt the data
    apollo: {
        // variable to hold results of query..
        rates: {
            // see the actual query below...
            query: ExchangeRateQuery,
            // this is how we pass in the specific parameter
            // for the query to use
            variables() {
                return {
                    "currency": this.currentCurrency
                }
            },
            $error(error) {
                console.error('We\'ve got an error!', error)
            },
            // this is where we track the loading state which 
            // is used to determine if we should show indicator
            // of not
            watchLoading(isLoading, countModifier) {
                // isLoading is a boolean
                // countModifier is either 1 or -1
                console.log(isLoading)
                this.isLoading = isLoading
            }
        },
    },
}