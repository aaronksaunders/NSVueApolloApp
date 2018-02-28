module.exports = {
    name: 'page-two',
    template: `
    <Page>
        <ActionBar :title="$route.path" >
            <NavigationButton 
                Ltext="Go Back" 
                android.systemIcon="ic_menu_back" @tap="$router.go(-1)"/>
        </ActionBar>
        <stack-layout>
            <ListView for="item in listOfItems">
                <v-template>
                    <Label :text="item.name" />
                </v-template>
            </ListView>
        </stack-layout>
    </Page>
    `,
    data: function () {
        return {
            listOfItems: [{
                id: 1,
                name: "aaron"
            }, {
                id: 2,
                name: "andrea"
            }, {
                id: 3,
                name: "reina"
            }]
        }
    },
    methods: {
        onItemTap(event) {
            console.log("event.index", event.index)
            console.log("name", event.item.name)
            console.log("id", event.item.id)
        }
    }
}