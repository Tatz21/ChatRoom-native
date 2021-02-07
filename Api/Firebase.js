import firebase from 'firebase'

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

init = () => {
     if(!firebase.apps.length){
         firebase.initializeApp({
                apiKey: "AIzaSyCrE5mg_ncIVR-3u6LHrH5JRy-MfH6Xnec",
                authDomain: "chatapp-112bd.firebaseapp.com",
                projectId: "chatapp-112bd",
                storageBucket: "chatapp-112bd.appspot.com",
                messagingSenderId: "528081338821",
                appId: "1:528081338821:web:eb2bdebfd1c2ef748e4bac",
                measurementId: "G-7D3D2D5FS6"
                
         });
     }
 };
  
 checkAuth=() =>{
     firebase.auth().onAuthStateChanged(user =>{
         if(!user) {
             firebase.auth().signInAnonymously();
         }
     });
 };
 send = messages => {
     messages.forEach(item => {
         const message ={
             text:item.text,
             timestamp:firebase.database.ServerValue.TIMESTAMP,
             user: item.user
         }
         this.db.push(message)
     });
    };
    parse = message =>{
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return{
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback =>{
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

 get db() {
     return firebase.database().ref("messages");
 }

 get uid() {
     return (firebase.auth().currentUser || {}).uid
 }
}

export default new Fire();