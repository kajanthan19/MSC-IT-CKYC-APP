import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'kyc-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.scss']
})
export class AccessManagementComponent implements OnInit {
  public onClose!: Subject<boolean>;
  public modalRef!: BsModalRef;
  consumerList: any []= [];
  submitted: boolean = false;
  loading = false;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
   
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
