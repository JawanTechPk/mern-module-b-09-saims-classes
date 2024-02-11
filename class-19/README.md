# Redux Toolkit with Action Reducers

**Introduction**

The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

"Configuring a Redux store is too complicated"
"I have to add a lot of packages to get Redux to do anything useful"
"Redux requires too much boilerplate code"
We can't solve every use case, but in the spirit of create-react-app, we can try to provide some tools that abstract over the setup process and handle the most common use cases, as well as include some useful utilities that will let the user simplify their application code.


Ref Doc: [﻿redux-toolkit.js.org/tutorials/quick-start](https://redux-toolkit.js.org/tutorials/quick-start) 
## Installation

install @reduxjs/toolkit and react-redux packages  into your project by running the following command(s).


```
npm install @reduxjs/toolkit react-redux
```

or run commands individually

```
npm install @reduxjs/toolkit
```
```
npm install react-redux
```
## Redux Toolkit Configuration into React App
Steps are as follows to configure Redux into React App

- Create a Redux Store
- Pass Redux Store into React App using Provider
- Create a Redux State Slice



## Create a Redux Store

Create a file named `src/store/index.jsx.` Import the `configureStore` API from Redux Toolkit. create empty store and export store (named export) instance variable from `index.js` file

```
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({

})

export { store }

```
## Connect Redux Store to React App with Provider

To link our Redux store with React, use the `<Provider>` from React-Redux. In `src/main.js`, we import the store, wrap `<App>` with `<Provider>`, passing the store as a prop. This allows React App to access the store's data.

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

    <Provider store={store}>
      <App />
    </Provider>

);

```
## Create a Redux State Slice

Create a folder named `slices` inside store folder `src/store/slices`. This folder will hold all of the slices for your Redux store.

Create a file named `theme_slice.jsx` (using the keyword "slice" in the file name to identify it).

Import the `createSlice` API from Redux Toolkit into `theme_slice.jsx`


```
import { createSlice } from '@reduxjs/toolkit'
```

Define initialState 

```
const initial_state ={
    theme_mode:'light'
}
```

Create a slice using `createSlice` & pass the required value into the `createSlice` API. 

- name 
- initialState
- reducers - (optional)

```
const theme_slice = createSlice({
    name:'theme',
    initialState:initial_state
    reducers:{
        
    }

})
```

export theme_slice reducer as default 

```
export default theme_slice.reducer
```



Once the slice has been created, you need to pass it to your store

Create an object inside the store against `reducer` key.



```
const store = configureStore({

    reducer:{

    }

})
```

import theme_slice into store file


```
import theme_slice from './slices/theme_slice'
```


Pass `theme_slice` into store, (key value pair)


```
const store = configureStore({

    reducer:{
        theme : theme_slice
        <!-- the rest of the slices goes here -->
    }

})
```



Here redux toolkit has been configured!
## Accessing the Store from a Components / Pages


Now, we can utilize React-Redux hooks to enable React components to interact with the Redux store. We can read data from the store using `useSelector`. 

useSelector hook provides the store in callback parameter, so that we can get store and return the desired slice. 

For instance, you want to access the theme slice from the Redux store, you can do it by returning state.theme inside the useSelector hook. This means you're retrieving the theme data directly from the store's state.

```
import React from "react";
import "./App.css";
import { useSelector } from "react-redux";


const App = () => {

  const state_value = useSelector((state) => state.theme)

  const bg_color = state_value.theme_mode === "dark" ? "bg-black" : "bg-white";

  return (
    <div className={` ${bg_color} h-[100dvh]`}>

      App JSX File

    </div>
  );
};

export default App;

```
## Create Reducer State Actions

Reducer functions define how the state in a slice can be updated. These functions specify how different actions modify the state within the slice. Each reducer function typically takes the current state and an action object as arguments, and returns the new state based on the action type and payload.


- **Define simple action without payload values**

Inside the theme_slice file `reducers` (object), we can define multiple actions,

While creating the action, we need to define a callback function. Inside this callback function, the first parameter provided is the state, representing the current state of the slice. You can then update or change the state as needed within this callback.

Two reducer actions have been created. One action changes the `theme_mode` to `'dark'` by setting `state.theme_mode` to `'dark'`, while the other action changes the `theme_mode` to `'light'`.

After creating the actions, simply export (named export) both actions from `theme_slice.actions`.

```
const theme_slice = createSlice({
    name:'theme',
    initialState:initial_state,
    reducers:{
        convert_to_dark:(state)=>{
            state.theme_mode = 'dark'
        },
        convert_to_light:(state)=>{
            console.log(actions)
            state.theme_mode = 'light'
        },

    }

})

export const {convert_to_dark, convert_to_light} = theme_slice.actions
```
---

- **Define action with payload data**
Inside the action callback function, the second parameter provided is indeed the actions object. This actions object typically provides access to the payload, which contains the data passed as parameters when dispatching the actions.

for instance, we are receiving the string value from `payload` and assign it to `state.theme_mode`

```
const theme_slice = createSlice({
    name:'theme',
    initialState:initial_state,
    reducers:{
        theme_toggle_using_payload:(state, actions)=>{

            state.theme_mode = actions.payload
        }

    }

})

export const {convert_to_dark, convert_to_light} = theme_slice.actions
```


## Dispatch Action(s) from Components / Pages

First, import actions from the particular slice

```
import { convert_to_dark, convert_to_light} from "./store/slices/theme_slice";
```

Using the `useDispatch` hook, actions can be dispatched from any components or pages to execute the action functions. This allows components to trigger state changes or other logic defined by Redux actions.


import `useDispatch` hook 

```
import { useDispatch } from "react-redux";
```

Create dispatch instance of `useDispatch()`

```
const dispatch = useDispatch();
```

- **Without Payload Actions**


To trigger an action, you pass the action function into the `dispatch` function wherever you need to execute the action. This dispatch function is provided by the `useDispatch` hook in React-Redux.

```
const App = () => {

  const dispatch = useDispatch();


  // convert theme to dark -----
  const convert_to_dark_handle = () => {

    dispatch(convert_to_dark());

  };

  // convert theme to light ----
  const convert_to_light_handle = () => {

    dispatch(convert_to_light());
    
  };



  return (
    <div className={` ${bg_color} h-[100dvh]`}>

      <Button onClick={convert_to_dark_handle}>Convert To dark</Button>

      <Button onClick={convert_to_light_handle}>Convert To Light</Button>
    </div>
  );
};

```


- **With Payload Actions**

When dispatching the action, pass the payload into the action parameter.

```
const App = () => {

 // changing theme by passing payload
  const theme_toggle_payload_handle = () => {

    dispatch(theme_toggle_using_payload('light'))
  }

  return (
    <div className={` ${bg_color} h-[100dvh]`}>
      
      <Button onClick={theme_toggle_payload_handle}>Theme Toggle using Payload</Button>

    </div>
  );
};
```