# ngc bug repro

When trying to AOT compiling an sdk project I get this error:

```
Error: Error encountered resolving symbol values statically. Calling function 'SDKBrowserModule', function calls are not supported. Consider replacing the function or lambda with a reference to an exported function, resolving symbol AppModule in C:/Users/TSC/flyacts/test/api-generator/fe/src/app/app.module.ts, resolving symbol AppModule in C:/Users/TSC/flyacts/test/api-generator/fe/src/app/app.module.ts
```

## Steps

# Clone this repository
# cd be/sdk
# yarn link
# cd ../../fe
# yarn global add ionic cordova
# yarn link "api-generator-sdk"
# ionic cordova build browser --prod
# boom


