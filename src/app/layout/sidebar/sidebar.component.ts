import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'kyc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  implements OnInit {

  user: any = {
    role: 'Admin'
  }
  @Input() statusReceived: boolean = false;
  public basicCollapse = false;
  status: boolean = false;
  ngOnInit(): void {
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // Extract changes to the input property by its name
    let change: SimpleChange  = changes['statusReceived']; 
    this.status = change.currentValue;

}

  onOpenCollape(){
    this.basicCollapse = ! this.basicCollapse;
  }


}
