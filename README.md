# NSVueApolloApp
integrate apollo into nativescript vue app with original template

```
npm install
```
then run app...
```
tns run android or tns run ios
```
### integration currently needed a hack to work

I need to manually inject the apolloProvider into the component
```
HomePage.apolloProvider = apolloProvider
```