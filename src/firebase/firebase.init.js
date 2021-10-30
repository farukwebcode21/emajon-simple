import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/*

steps for authentication
---------------------------------------
Initial Setup
1 . firebase: create project
2 . create web app
3 . get configuration
4 . initialize firebase
5 . Enable auth method
6 ............................................
Step-2
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register
..................................................
Step-3
1 . Set up sign in method
2 . Set up Sign out method
3 . use state
4 . Special observision method
5. return necessary methods and states from useFirebase

........................................................
Step 4:
1 .create a auth context
2 . create context provider
3 . use auth provider
4. create useAuth Hook


*/