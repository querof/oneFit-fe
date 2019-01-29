# oneFit Fron-End APP.

Hi oneFit!

Here some code developed for you, I hope you'll have the time to take a look :-). 

Here you can find:

- Install instructions.
- General documentation of code.


## Install.

 - Copy the project folder in the same server where was installed the API.
 - Change config in file conf/api.json.

 _**Note: No CORS support in this version**_.



## General documentation.


  ### Code documentation.

Files and Directory structure.


├── conf                  
│   ├── api.json                  
│   └── routes.json                  
├── public                  
│   └── web                  
│       └── index.html                  
├── src                  
│   ├── js                  
│   │   ├── actions                  
│   │   │   ├── authActionsClass.js                  
│   │   │   ├── excercisesActionsClass.js                  
│   │   │   ├── planActionsClass.js                  
│   │   │   ├── userActionsClass.js                  
│   │   │   ├── user_planActionsClass.js                  
│   │   │   ├── work_out_daysActionsClass.js                  
│   │   │   └── work_out_days_excercisesActionsClass.js                  
│   │   ├── forms                  
│   │   │   ├── excercisesFormClass.js                  
│   │   │   ├── planFormClass.js                  
│   │   │   ├── userFormClass.js                  
│   │   │   ├── user_planFormClass.js                  
│   │   │   ├── work_out_days_excercisesFormClass.js                  
│   │   │   └── work_out_daysFormClass.js                  
│   │   ├── index.js                  
│   │   ├── listeners                  
│   │   │   ├── auth.js                  
│   │   │   ├── crud.js                  
│   │   │   ├── menu.js                  
│   │   │   └── user_plan.js                  
│   │   ├── routing                  
│   │   │   ├── routerClass.js                  
│   │   │   └── routes.js                  
│   │   └── tools                  
│   │       └── utilityClass.js                  
│   └── views                  
│       ├── excercises                  
│       │   ├── form.html                  
│       │   └── list.html                  
│       ├── login.html                  
│       ├── menu.html                  
│       ├── plan                  
│       │   ├── form.html                  
│       │   └── list.html                  
│       ├── user                  
│       │   ├── form.html                  
│       │   ├── list.html                  
│       │   └── register_form.html                  
│       ├── user_plan                  
│       │   ├── form.html                  
│       │   └── list.html                  
│       ├── work_out_days                  
│       │   ├── form.html                  
│       │   └── list.html                  
│       └── work_out_days_excercises                  
│           ├── form.html                  
│           └── list.html                  



Here the description of the directory structure of the project and main files.

 _**Note: the app is builded with a MVC "like" approach *_.


#### Actions:

Location: src\js\actions.

Description: The folder contains every actions of the app. One action for every API called.


#### Forms:

Location: src\js\forms.

Description: The folder contains every form class of the app. One form for every Action.


#### Actions:

Location: src\views

Description: The folder contains every view of the app.



##### Tools:

Location: src\js\tools.

Contains libs of general propose.


##### Conf:

Location: conf.

Description: Contains configurations files; the basic are:

  - api.json: contains API configuration, el route of the API.
  - routes.json: it has all the routes of the app, based in symfony route system.


### Listeners.

Listeners of every button or link in the app.

##### auth.js:

 Location: src\js\listeners.

 Description:Listeners for login, logout and register user from.


##### crud.js:

  Location: src\js\listeners

  Description: Containt all the listeners of buttons and links for generic CRUD calls.

## menu.js

Location: src\js\listeners

Description: Containts all the listeners of the collapsed menu.


##### user_plan.js:

Location: src\js\listeners.

Description: Containts all the user plan listeners.


### Routing.

Routing class and routines of the app.

##### routesClass.js:

Location: src\js\routing.

Description: Router of the app, controller the call and access to the API.

##### routes.js:

Location: src\js\routing.

Description: Declare routes and server API route.


Let me know your thoughts.

Best.
