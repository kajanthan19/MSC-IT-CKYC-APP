import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { MockDataService } from 'src/app/services/mock-data.service';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';

@Component({
  selector: 'kyc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public onClose!: Subject<boolean>;
  public modalRef!: BsModalRef;
  userList: User []= [];
  submitted: boolean = false;
  loading = false;
  constructor(private modalService: BsModalService,  private mockDataService: MockDataService) { }

  ngOnInit(): void {
   this.getLoadConsumerList();
  }

  getLoadConsumerList(){
    this.mockDataService.getUserList().subscribe((res) => {
       this.userList = res;
    }, error => {
      console.log(error)
    })
  }

onOpenModal(): void {
  const initialState = {
    isEdit: false
  };
  let modalConfig = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false };
  // this.modalRef = this.modalService.show(AddEditConsumerGroupComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
  // this.modalRef.content.onClose.subscribe((result: any) => {
  //   if (result && result.data !=null) {
  //     let data: Role = {
  //                  ID : 40,
  //                 rolename: result.data.rolename,
  //                 description : result.data.description,     
  //     }
  //     this.rolelist.push(data)
  //   }
  // });
}


onEditRow(data: any, index: any): void {
  const initialState = {isEdit: true, consumerGroup: data ,index: index};
  let modalConfig = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false };
  // this.modalRef = this.modalService.show(AddEditConsumerGroupComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
  // this.modalRef.content.onClose.subscribe((result: any) => {
  //   if (result && result.data !=null) {
  //     this.rolelist[result.index].rolename = result.data.rolename;
  //     this.rolelist[result.index].description =  result.data.description;
  //   }
  // });
}

onDeleteRow(data: any, index: number): void {
  const initialState = {
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true,
  };

  this.modalRef = this.modalService.show(DeleteComponent, initialState);
  this.modalRef.content.onClose.subscribe((result: any) => {
    if (result.Action === 'DELETE') {
      this.delete(data, index);
    } else {

    }
  });
  }

  delete(data: any, index: number): void {
    this.userList.splice(index, 1)
  }
}
