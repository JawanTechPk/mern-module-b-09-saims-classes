Ref Doc: [﻿redux-toolkit.js.org/tutorials/quick-start](https://redux-toolkit.js.org/tutorials/quick-start) 

<!-- ----------------------  Redux Toolkit configuration start  ---------------------- -->
- **Redux Toolkit Configuration**
Install Redux and Redux Toolkit using following Commands 

`npm install @reduxjs/toolkit` 

`npm install react-redux ` 

- **Create a Redux Store**
```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

```
- **Provide the store to React App Project (main.jsx file)**
```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "../store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

```
- **Create a Redux Slice using create**
```
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  <!-- define initialState object here... -->
  <!-- using key and value pair -->
  value:0
}

export const counterSlice = createSlice({
  <!-- define name here -->
  name: 'counter',

  <!-- pass initialState here  -->
  initialState: initialState,


  reducers: {
  <!-- action reducer function goes here -->
    
  },
})

<!-- Action creators are generated for each case reducer function -->
export const { 
  
 } = counterSlice.actions

<!-- export slice/reducer  -->
export default counterSlice.reducer


```
- **Pass created slice inside the store reducer**

```
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'


export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})
```

<!-- ----------------------  Redux Toolkit configuration end  ---------------------- -->



- **Define reducer actions**
```
<!-- define action reducer(s) inside the slice file  -->

 reducers: {

<!-- defined an increment action function here which will increment the counterSlice value by 1 -->
  increment: (state) => {
    <!-- state means the current state of the slice -->
      state.value += 1
    },

  },

<!-- export the action function(s) from counterSlice.actions -->
export const { 
  
 } = counterSlice.actions


```

- **Use Redux State and Actions in React Components**
```
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './counterSlice'

export function Counter() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()


  const click_handle = () => {

    dispatch(increment())
  }


  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={click_handle}
        >
          Increment
        </button>
        <span>{state.counter.value}</span>
      </div>
    </div>
  )
}

```


#### 




