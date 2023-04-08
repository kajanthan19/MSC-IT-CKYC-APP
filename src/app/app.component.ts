import { Component } from '@angular/core';
import { TokenData } from './models/token';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'kyc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'centralize-kyc-app';
  user: any;
  status: boolean = false;

  constructor(private authservice: AuthService){
    this.authservice.user.subscribe(x => this.user = x);
  }


  receivedMessageHandler(p: boolean) {
    this.status = p;
  
  }

  
}
