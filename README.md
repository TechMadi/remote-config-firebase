
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
<div style="background-color:white;">

![Realtime  Remote Config By  Firebase](https://firebase.google.com/static/docs/remote-config/images/real-time-client-server.png)

</div>

 
### Use Cases 
- A/B testing - rolling out different features 
- Personalized UX - customize  view eg  Language , Geographic user preference , Welcome  Messages
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

this.remoteConfig.app
this.remoteConfig.defaultConfig
this.remoteConfig.fetchTimeMillis
this.remoteConfig.lastFetchStatus
```

## Parameter Vs Parameter Groups 

- Parameter Name - Name 
- Data  Type  - Json
- Default Value 
- Condition - 

## Conditions 
 Change this if if this is meet



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


 ## How to Update  Remote Configs
 - Programatically 
    - ![Using  Remote Config API](https://firebase.google.com/static/docs/remote-config/images/Diagram-RC-REST-v3-580px.png)
    - Batch import config values ( templates)
    - Cloud Functions for Firebase


## Best Practices 
- Have default values in json
- Advisable to have a the default time fetch to be 12hrs 


## Next Challenges 
- How does it intergrate with cloud functions 
- How does it work with A/B testing
















 