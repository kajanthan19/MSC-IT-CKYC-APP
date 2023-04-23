import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Subject } from "rxjs";
import { Consumer } from "src/app/models/Consumer";
import { ConsumerService } from "src/app/services/consumer.service";
import { AddEditConsumerComponent } from "./add-edit-consumer/add-edit-consumer.component";
import { DeleteComponent } from "src/app/shared/delete/delete.component";

@Component({
  selector: "kyc-consumers",
  templateUrl: "./consumers.component.html",
  styleUrls: ["./consumers.component.scss"],
})
export class ConsumersComponent implements OnInit {
  public onClose!: Subject<boolean>;
  public modalRef!: BsModalRef;
  consumerList: Consumer[] = [];
  submitted: boolean = false;
  loading = false;
  constructor(
    private modalService: BsModalService,
    private consumerService: ConsumerService
  ) {}

  ngOnInit(): void {
    this.getLoadConsumerList();
  }

  getLoadConsumerList(){
    this.consumerService.getConsumers().subscribe((res) => {
       this.consumerList = res;
    }, error => {
      console.log(error)
    })
  }

  onOpenModal(): void {
    const initialState = {
      isEdit: false,
    };
    let modalConfig = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
    };
    this.modalRef = this.modalService.show(
      AddEditConsumerComponent,
      Object.assign({}, modalConfig, { class: "modal-md", initialState })
    );
    this.modalRef.content.onClose.subscribe((result: any) => {
      if (result && result.data !=null) {
        // call or bind it
        // console.log(result)
        let data: Consumer = {
                     ID : 40,
                    consumer_name: result.data.consumer_name,
                    consumer_type :  result.data.consumer_type,
                    registered_date : result.data.consumer_name,
                    consumer_ref : result.data.consumer_ref,
                    fee_template : 'string',
                    is_add_cust_allowed : 'string',
                    Encryption_type : result.data.Encryption_type,
                    Product_Code : 'string',
                    Created_on : 'string',
                    Created_by : 'string',
                    Modified_on: 'string',
                    Modified_by : 'string',
                    Is_active :result.data.Is_active,
                    CreatedAt : 'string',
                    cosumer_group_id : result.data.consumer_name,
                    ClientPublicKeyPath :result.data.ClientPublicKeyPath,
                    ClientPrivateKeyPath : result.data.ClientPrivateKeyPath,
                    ServerPublicKeyPath :result.data.ServerPublicKeyPath,
                    ServerPrivateKeyPath : result.data.ServerPrivateKeyPath,
        }
        this.consumerList.push(data)
      }
    });
  }

  onEditRow(data: any, index:any): void {
    const initialState = { isEdit: true, consumer: data ,index: index};
    let modalConfig = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
      consumer: data,
    
    };
    this.modalRef = this.modalService.show(
      AddEditConsumerComponent,
      Object.assign({}, modalConfig, { class: "modal-md", initialState })
    );
    this.modalRef.content.onClose.subscribe((result: any) => {
      if (result && result.data !=null ) {     
          this.consumerList[result.index].consumer_name = result.data.consumer_name,
          this.consumerList[result.index].consumer_type =  result.data.consumer_type,
          this.consumerList[result.index].registered_date = result.data.consumer_name,
          this.consumerList[result.index].consumer_ref = result.data.consumer_ref,
          this.consumerList[result.index].fee_template = 'string',
          this.consumerList[result.index].is_add_cust_allowed = 'string',
          this.consumerList[result.index].Encryption_type = result.data.Encryption_type,
          this.consumerList[result.index].Product_Code = 'string',
          this.consumerList[result.index].Created_on = 'string',
          this.consumerList[result.index].Created_by = 'string',
          this.consumerList[result.index].Modified_on = 'string',
          this.consumerList[result.index].Modified_by = 'string',
          this.consumerList[result.index].Is_active = result.data.Is_active,
          this.consumerList[result.index].CreatedAt = 'string',
          this.consumerList[result.index].cosumer_group_id = result.data.consumer_name,
          this.consumerList[result.index].ClientPublicKeyPath =result.data.ClientPublicKeyPath,
          this.consumerList[result.index].ClientPrivateKeyPath = result.data.ClientPrivateKeyPath,
          this.consumerList[result.index].ServerPublicKeyPath = result.data.ServerPublicKeyPath,
          this.consumerList[result.index].ServerPrivateKeyPath = result.data.ServerPrivateKeyPath
      }
    });
  }

  onDeleteRow(data: any, index: number): void {
  const initialState = {
    // backdrop: 'static',
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
