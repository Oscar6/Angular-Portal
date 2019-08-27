import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portalgram';

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyDnRpN_8uSA4ih7pLBMA1ykkPvFyZq3Wm4",
      authDomain: "portalgram-890b1.firebaseapp.com",
      databaseURL: "https://portalgram-890b1.firebaseio.com",
      projectId: "portalgram-890b1",
      storageBucket: "portalgram-890b1.appspot.com",
      messagingSenderId: "65309806517",
      appId: "1:65309806517:web:e3c099c6f8ce5af7"
    };
    firebase.initializeApp(config);
  }
}
