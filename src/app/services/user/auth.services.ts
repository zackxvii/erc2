import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Injectable({
providedIn: 'root',
})
export class AuthService {
constructor() {}


//1
loginUser(email: string, password: string): 
Promise<firebase.auth.UserCredential> 
{
return firebase.auth().signInWithEmailAndPassword(email, password);
}

//2
signupUser(email: string, password: string, firstName: string, lastName: string, phoneNum: number): Promise<any> { 
    return firebase.auth().createUserWithEmailAndPassword(email, password).then((newUserCredential: firebase.auth.UserCredential) => {
    firebase.firestore().doc(`/userProfile/${newUserCredential.user.uid}`).set({ email, password, firstName, lastName, phoneNum });
    }).catch(error => {
    console.error(error);
    throw new Error(error);
    });
    }

    //3
resetPassword(email:string): Promise<void> {  
        return firebase.auth().sendPasswordResetEmail(email);
        }

// 4
        logoutUser():Promise<void> {
            return firebase.auth().signOut();
            }

}
