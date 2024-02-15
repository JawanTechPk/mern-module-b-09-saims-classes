
# Firebase Authentication

**Create a Firebase Project:** This is like setting up your toolbox for building your React app. You create a Firebase project on the Firebase website.

**Register Your React App:** After creating your Firebase project, you need to let Firebase know that your React app is going to be using its services. This involves adding your React app to your Firebase project.

**Get Configuration Object:** Once your React app is registered with Firebase, Firebase provides you with a special set of instructions called a configuration object. You'll use this configuration object in your React app to connect it with Firebase services like authentication, databases, and storage.

So, in summary, before integrating Firebase with your React project, you need to set up a Firebase project, register your React app with Firebase, and then use the configuration object provided by Firebase to connect your React app with Firebase services.


Ref Docs: https://firebase.google.com/docs/web/setup?authuser=0#add-sdk-and-initialize

## Installation 

Install Firebase using npm:

```
npm install firebase
```
## Configuration

Initialize Firebase in your app and create a Firebase App object:
(create an `index.jsx` file inside `config/firebase` for firebase configuration)

```
import { initializeApp } from 'firebase/app';
import { auth } from 'firebase/auth';


const firebaseConfig = {
  // firebase project configuration goes here...
};

const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);

export {firebase_app, auth}

```
## Enable Authentication Service(s)


Go to the Firebase console website and select your project.

**Authentication Section:** Look for the Authentication section in the Firebase console menu. Click on it.

**Sign-in Method Tab:** In the Authentication section, you'll find a tab called "Sign-in method". Click on it.

**Enable Authentication Providers:** Here, you'll see various authentication providers like Email/Password, Google, Facebook, etc. Choose the authentication methods you want to enable for your app. For instance, if you want users to be able to sign in with their email and password, enable the "Email/Password" provider. If you want to allow sign-in with Google accounts, enable the "Google" provider, and so on.

**Save Configuration:** Once you've enabled the authentication providers you need, make sure to save your configuration.
## Use Authentication Methods

You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in.

Ref docs: https://firebase.google.com/docs/auth/web/start?authuser=0

### Signup Method - with email and password

Create a form that allows new users to register with your app using their email address and a password. When a user completes the form, validate the email address and password provided by the user, then pass them to the `createUserWithEmailAndPassword` method:

```
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/firebase-config/index'

const submit_handle = (e) => {
e.preventDefault();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}

```


### Login Method - with email and password
Create a form that allows existing users to sign in using their email address and password. When a user completes the form, call the `signInWithEmailAndPassword` method."

This means you need to design a form where users can input their email address and password. Once they fill out the form and submit it, you'll use a method provided by Firebase called `signInWithEmailAndPassword` to verify their credentials and log them into your application.

```
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../config/firebase-config/index'

  const submit_handle = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(user)
      });
  };

```


## Authentication state observer
For each of your app's pages that need information about the signed-in user, attach an observer to the global authentication object. This observer gets called whenever the user's sign-in state changes.

Attach the observer using the `onAuthStateChanged` method. When a user successfully signs in, you can get information about the user in the observer.

 ```
 import {onAuthStateChanged} from "firebase/auth";
 import {auth} from '../config/firebase-config/index'

 onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('user id', uid)

        // ...
      } else {
        // User is signed out
        // ...
      }
    });
 ```


 ##  Sign out / Logout User
  To sign out a user, call `signOut`:


  ```
import {signOut} from "firebase/auth";
import {auth} from '../config/firebase-config/index'

const logout_handle = () => {

signOut(auth).then(() => {
    // Sign-out successful.

}).catch((error) => {

    // An error happened.

})
}
  ```