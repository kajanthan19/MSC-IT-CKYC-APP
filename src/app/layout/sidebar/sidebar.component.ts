import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from 'rxjs';

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
  mainTitle!: string;
  constructor(private router: Router,  private route: ActivatedRoute){
    this.router.events.subscribe(
      ( event: NavigationEvent ) : void => {
        if ( event instanceof NavigationEnd ) {
           let dataVal = this.route?.snapshot?.firstChild?.data?.title;
           this.mainTitle = dataVal;
           // console.log(dataVal)
           if(this.mainTitle == 'AccessManagement'){
            this.basicCollapse = true;
           }
           this.isMainClassActive()
        }

      }
    );
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // Extract changes to the input property by its name
    let change: SimpleChange  = changes['statusReceived']; 
    this.status = change.currentValue;

}

isMainClassActive(): void {
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
  ).subscribe(() => {
    const rt = this.getChild(this.route);
    rt.data.subscribe((data: any) => {
      this.mainTitle = data?.title;
      console.log(this.mainTitle)
    });
  });
}

getChild(activatedRoute: ActivatedRoute): any {
  if (activatedRoute.firstChild) {
    return this.getChild(activatedRoute.firstChild);
  } else {
    return activatedRoute;
  }
}

  onOpenCollape(){
    this.basicCollapse = ! this.basicCollapse;
  }

  onCloseCollape(){
    this.basicCollapse = false;
  }


}
