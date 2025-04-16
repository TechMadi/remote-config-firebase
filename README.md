
# Dynamic App Experiences with Remote Config



## Firebase Introduction 
A  development platform to build  mobile or  web apps 


Other Firebase Features 
- Build 
- Run ( We are here)
- Analytics 


# Remote Config
Easy way of making  updates to your  product 
Not  programatically , but in an operations standpoint 

Eg: 
- Need to publish and update every time
- Show   some parts based on  a location , type of user 
- Enable , disable content

#
<div style="background:white;">

![Realtime  Remote Config](https://firebase.google.com/static/docs/remote-config/images/real-time-client-server.png)

</div>

 
### Use Cases 
- A/B testing - rolling out different features 
- Personalized UX - customize  view eg  Language , Geographic user preference 
- Phased feature rollouts 
- Experiment app behaviour - better user  engagement 
- Feature flag - disable  certain features /  tests 
- Kill switch -  disable problem matic features 


## Demo 
Creating a sample remote config 
Name-Value-action 

```
ng new projectName
```

## Body of a Remote Config
 What  is the remote config instance made  up of 

```typescript
// code
```

## Parameter Vs Parameter Groups 

## Remote Templates 
```json
      {
        "conditions": [
          {
            "name": "ios",
            "expression": "device.os == 'ios'"
          }
        ],
        "parameters": {
          "welcome_message": {
            "defaultValue": {
              "value": "Welcome to this sample app"
            },
            "conditionalValues": {
              "ios": {
                "value": "Welcome to this sample iOS app"
              }
            }
          },
          "welcome_message_caps": {
            "defaultValue": {
              "value": "false"
            }
          },
          "header_text": {
            "defaultValue": {
              "useInAppDefault": true
            }
          }
        },
        "version": {
          "versionNumber": "28",
          "updateTime": "2020-05-14T18:39:38.994Z",
          "updateUser": {
            "email": "user@google.com"
          },
          "updateOrigin": "CONSOLE",
          "updateType": "INCREMENTAL_UPDATE"
        }
      }
// Accredited to Google
```

## Core  Functions

``` typescript

//Listen  on   any changes
 addOnConfigUpdateListener()

//Fetch all  configs 
fetch()

//fetch and activate
fetchAndActivate()

//Get a remote instance
getRemoteConfig()

```


## Best Practices 
- Have default values in json
- Advisable to have a teh default time fetch to be 12hrs 


## Next Challenges 
- How does it intergrate with cloud functions 
- How does it work with A/B testing
















 