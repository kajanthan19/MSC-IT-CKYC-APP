import { Component } from '@angular/core';

@Component({
  selector: 'kyc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  status: boolean = false;


  clickEvent(){
    this.status = !this.status;       
  }

  onLogout(){
    // this.authservice.logout();
  }

}
