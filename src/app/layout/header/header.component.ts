import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'kyc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status: boolean = false;
  @Output() receiveStatusEvent: EventEmitter<boolean>  = new EventEmitter();
  constructor(private authservice: AuthService) { 
    }

  ngOnInit(): void {
  }
  
  clickEvent(){
    this.status = !this.status;  
    this.receiveStatusEvent.emit(this.status);
  }

  onLogout(){
    this.authservice.logout();
  }

}
