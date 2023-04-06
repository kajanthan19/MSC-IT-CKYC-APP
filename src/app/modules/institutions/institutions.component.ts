import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AddEditInstitutionComponent } from './add-edit-institution/add-edit-institution.component';

@Component({
  selector: 'kyc-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss']
})
export class InstitutionsComponent implements OnInit {
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
  this.modalRef = this.modalService.show(AddEditInstitutionComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
  this.modalRef.content.onClose.subscribe((result: boolean) => {
    if (result) {
      // call or bind it
    }
  });
}


onEditRow(data: any): void {
  const initialState = {isEdit: true, project: data};
  let modalConfig = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false };
  this.modalRef = this.modalService.show(AddEditInstitutionComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
  this.modalRef.content.onClose.subscribe((result: boolean) => {
    if (result) {
      // call list or bind it
    }
  });
}

onDeleteRow(data: any, index: number): void {
}

delete(data: any, index: number): void{
}
}
