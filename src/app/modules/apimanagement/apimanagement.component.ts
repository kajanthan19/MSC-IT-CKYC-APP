import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { APIName } from 'src/app/models/APImanagement';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'kyc-apimanagement',
  templateUrl: './apimanagement.component.html',
  styleUrls: ['./apimanagement.component.scss']
})
export class APIManagementComponent implements OnInit {
  public onClose!: Subject<boolean>;
  public modalRef!: BsModalRef;
  apimanagementList: any []= [];
  submitted: boolean = false;
  loading = false;
  apinamelist: APIName [] = [];
  constructor(private modalService: BsModalService, private mockservice: MockDataService) { }

  ngOnInit(): void {
   this.getAllAPiNameList();
  }

  getAllAPiNameList(){
    this.mockservice.getApiNameList().subscribe((res)=>{
      this.apinamelist = res;
    })
  }


onOpenModal(): void {
  const initialState = {
    isEdit: false
  };
  let modalConfig = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false };
  // this.modalRef = this.modalService.show(AddEditConsumerGroupComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
  // this.modalRef.content.onClose.subscribe((result: boolean) => {
  //   if (result) {
  //     // call or bind it
  //   }
  // });
}


onEditRow(data: any): void {
  const initialState = {isEdit: true, project: data};
  let modalConfig = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false };
  // this.modalRef = this.modalService.show(AddEditConsumerGroupComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
  // this.modalRef.content.onClose.subscribe((result: boolean) => {
  //   if (result) {
  //     // call list or bind it
  //   }
  // });
}

onDeleteRow(data: any, index: number): void {
}

delete(data: any, index: number): void{
}
}
