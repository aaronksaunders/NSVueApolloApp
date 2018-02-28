const Vue = require("./"),
  ObservableArray = require("data/observable-array").ObservableArray;

Vue.registerElement("RadAutoCompleteTextView", () => require("nativescript-pro-ui/autocomplete").RadAutoCompleteTextView);
Vue.registerElement("SuggestionView", () => require("nativescript-pro-ui/autocomplete").SuggestionView);

Vue.directive("suggestionItemTemplate", {
  inserted: function (el, binding, vnode) {
    Vue.nextTick(() => {
      // get the autocomplete View
      const autocomplete = el.parentNode.parentNode.nativeView

      // listen for the itemLoading event, and patch the template
      autocomplete.on('itemLoading', (args) => {
        const index = args.index;
        const item = args.data
        const oldVnode = args.view['__vueVNodeRef__'];
        el.$templates.patchTemplate('default', { item }, oldVnode)
      })

      // set the itemViewLoader to use the default template
      autocomplete.itemViewLoader = function (viewType) {
        switch (viewType) {
          case "itemview":
            return el.$templates.patchTemplate('default', { item: {} });
        }
      };
    })
    
  }
});