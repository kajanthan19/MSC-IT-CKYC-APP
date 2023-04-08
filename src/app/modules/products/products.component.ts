import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

@Component({
  selector: 'kyc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  public onClose!: Subject<boolean>;
  public modalRef!: BsModalRef;
  productList: any []= [];
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
  this.modalRef = this.modalService.show(AddEditProductComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
  this.modalRef.content.onClose.subscribe((result: boolean) => {
    if (result) {
      // call or bind it
    }
  });
}


onEditRow(data: any): void {
  const initialState = {isEdit: true, project: data};
  let modalConfig = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false };
  this.modalRef = this.modalService.show(AddEditProductComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
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
