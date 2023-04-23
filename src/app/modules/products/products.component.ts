import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ProductItem } from 'src/app/models/product';

@Component({
  selector: 'kyc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  public onClose!: Subject<boolean>;
  public modalRef!: BsModalRef;
  productList: ProductItem []= [];
  submitted: boolean = false;
  loading = false;
  constructor(private modalService: BsModalService, private mockService: MockDataService) { }

  ngOnInit(): void {
   this.getProductList();
  }

  getProductList(){
    this.mockService.getProductList().subscribe((res)=>{
      this.productList = res;
    }, error => {
      console.log(error);
    })
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
