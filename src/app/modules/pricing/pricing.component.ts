import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { MockDataService } from 'src/app/services/mock-data.service';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { AddEditPricingComponent } from './add-edit-pricing/add-edit-pricing.component';

@Component({
  selector: 'kyc-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  public onClose!: Subject<boolean>;
  public modalRef!: BsModalRef;
  pricingList: any []= [];
  submitted: boolean = false;
  loading = false;
  constructor(private modalService: BsModalService,  private mockDataService: MockDataService) { }

  ngOnInit(): void {
   this.getLoadConsumerList();
  }

  getLoadConsumerList(){
    this.mockDataService.getAllPricingInfo().subscribe((res) => {
       this.pricingList = res;
    }, error => {
      console.log(error)
    })
  }

onOpenModal(): void {
  const initialState = {
    isEdit: false
  };
  let modalConfig = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false };
  this.modalRef = this.modalService.show(AddEditPricingComponent, Object.assign({}, modalConfig, {class: 'modal-lg', initialState}));
  this.modalRef.content.onClose.subscribe((result: any) => {
    if (result && result.data !=null) {
      // let data: ConsumerGroup = {
      //              ID : 40,
      //             groupname: result.data.groupname,
      //             status : result.data.status,     
      // }
      // this.consumerList.push(data)
    }
  });
}


onEditRow(data: any, index: any): void {
  const initialState = {isEdit: true, consumerGroup: data ,index: index};
  let modalConfig = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false };
  this.modalRef = this.modalService.show(AddEditPricingComponent, Object.assign({}, modalConfig, {class: 'modal-lg', initialState}));
  this.modalRef.content.onClose.subscribe((result: any) => {
    if (result && result.data !=null) {
      this.pricingList[result.index].groupname = result.data.groupname;
      this.pricingList[result.index].status =  result.data.status;
    }
  });
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
    this.pricingList.splice(index, 1)
  }
}
