import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AddEditConsumerGroupComponent } from './add-edit-consumer-group/add-edit-consumer-group.component';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ConsumerGroup } from 'src/app/models/ConsumerGroup';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';

@Component({
  selector: 'kyc-consumer-group',
  templateUrl: './consumer-group.component.html',
  styleUrls: ['./consumer-group.component.scss']
})
export class ConsumerGroupComponent implements OnInit {
  public onClose!: Subject<boolean>;
  public modalRef!: BsModalRef;
  consumerList: ConsumerGroup []= [];
  submitted: boolean = false;
  loading = false;
  constructor(private modalService: BsModalService,  private mockDataService: MockDataService) { }

  ngOnInit(): void {
   this.getLoadConsumerList();
  }

  getLoadConsumerList(){
    this.mockDataService.getConsumersGroup().subscribe((res) => {
       this.consumerList = res;
    }, error => {
      console.log(error)
    })
  }

onOpenModal(): void {
  const initialState = {
    isEdit: false
  };
  let modalConfig = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false };
  this.modalRef = this.modalService.show(AddEditConsumerGroupComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
  this.modalRef.content.onClose.subscribe((result: any) => {
    if (result && result.data !=null) {
      let data: ConsumerGroup = {
                   ID : 40,
                  groupname: result.data.groupname,
                  status : result.data.status,     
      }
      this.consumerList.push(data)
    }
  });
}


onEditRow(data: any, index: any): void {
  const initialState = {isEdit: true, consumerGroup: data ,index: index};
  let modalConfig = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false };
  this.modalRef = this.modalService.show(AddEditConsumerGroupComponent, Object.assign({}, modalConfig, {class: 'modal-md', initialState}));
  this.modalRef.content.onClose.subscribe((result: any) => {
    if (result && result.data !=null) {
      this.consumerList[result.index].groupname = result.data.groupname;
      this.consumerList[result.index].status =  result.data.status;
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
    this.consumerList.splice(index, 1)
  }
}
